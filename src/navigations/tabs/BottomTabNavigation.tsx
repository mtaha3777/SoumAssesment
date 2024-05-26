import React, {useEffect} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from "@react-navigation/native";
import {Image, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../../theme/Colors";
import Home from "../../assets/Home.png"
import Settings from "../../assets/Settings.png"
import HomeStack from "../HomeStack";
import {getLanguage} from "../../i18n/i18n";
import {TextTitle} from "../../i18n/TextTitle";
import {WP} from "../../theme/Dimensions";
import Setting from "../../screens/Setting";

const Tab = createBottomTabNavigator();

const ImageRender = (source: any, style?) => {
    return (
        <Image
            source={source}
            style={[styles.imageStyle,style]}
        />
    );
};

const BottomTabNavigation: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>

            <Tab.Navigator
                initialRouteName="HomeStack"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.secondary,

                    tabBarLabelStyle:{
                        marginVertical:WP(2)
                    }
                })}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: getLanguage(TextTitle.Home),
                        tabBarIcon: ({ focused }) => {
                            let style = {
                                tintColor : focused ? Colors.primary : Colors.secondary
                            }
                            return ImageRender(Home,style)
                        },
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarLabel: getLanguage(TextTitle.Settings),
                        tabBarIcon: ({ focused }) => {
                            let style = {
                                tintColor : focused ? Colors.primary : Colors.secondary
                            }
                            return ImageRender(Settings,style);
                        },

                    }}
                />

            </Tab.Navigator>

        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: WP(8),
        height: WP(8),
        resizeMode: 'contain',
        marginTop: WP(3),
    }
});


export default BottomTabNavigation;
