import React, { useEffect, useRef } from "react";
import { BackHandler, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

import Colors from "../theme/Colors";
import { WP } from "../theme/Dimensions";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Variables } from "../utils/Enums";
import FontStyles from "../theme/FontStyles";
import { Route, ParamListBase } from "@react-navigation/native";

interface MyTabBarProps {
    state: any; // The state type depends on your navigation setup
    descriptors: any; // The descriptors type depends on your navigation setup
    navigation: NavigationProp<ParamListBase>; // Adjust ParamListBase according to your navigation structure
    style?: ViewStyle;
}

const MyTabBar: React.FC<MyTabBarProps> = ({ state, descriptors, navigation, style }) => {
    const ref = useRef<FlatList<Route>>();

    useEffect(() => {
    }, [state.index]);

    return (
        <View
            style={{
                height: WP(10),
                justifyContent: 'center',
                marginTop: WP(3),
            }}>
            <FlatList
                ref={ref}
                style={style}
                data={state.routes}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: WP(2) }}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item, index }) => {
                    const route = item;
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                backgroundColor: isFocused ? Colors.primary : Colors.blue,
                                height: WP(8),
                                paddingHorizontal: WP(3),
                                marginHorizontal: WP(1.5),
                                justifyContent: 'center',
                                borderRadius: WP(10),
                            }}>
                            <Text style={FontStyles.global_text_large_regular(Colors.white)}>{label}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default MyTabBar;

