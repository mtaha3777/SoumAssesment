import React, { useEffect, useState } from 'react';
import { View, ImageSourcePropType, Button , Text} from 'react-native';
import Colors from '../../theme/Colors';
import { getLanguage } from "../../i18n/i18n";
import { TextTitle } from "../../i18n/TextTitle";
import Header from "../../components/Header";
import { WP } from "../../theme/Dimensions";
import ArrowBack from "../../assets/ArrowBack.png";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Brands from "./Brands";
const Tab = createMaterialTopTabNavigator();

const Category: React.FC = ({  route }): React.JSX.Element => {

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Header heading={getLanguage(TextTitle.Brands)} leftIcon={ArrowBack} />
            <Tab.Navigator
                backBehavior="none"
                initialRouteName={route.params.initRoute + route?.params?.data.findIndex((i) => i.name == route?.params?.initRoute)}
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.blue,
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors.primary,
                    },
                    tabBarPressColor: Colors.transparent,
                    tabBarStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        backgroundColor: Colors.transparent,
                    },
                    lazy: true,
                    lazyPreloadDistance: 0,
                    tabBarItemStyle: {
                        width: 'auto', // Adjust width to content
                        paddingHorizontal: WP(2), // Minimal padding
                        backgroundColor: Colors.transparent,
                    },
                    tabBarLabelStyle: {
                        fontSize: WP(4),
                        textTransform: 'none',
                    },
                }}>
                {route?.params?.data?.map((item, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={item.name + index}
                            component={Brands}
                            options={{
                                title: item.name,
                            }}
                            initialParams={{
                                id: item?.id,
                            }}
                        />
                    );
                })}
            </Tab.Navigator>
        </View>
    );
};


export default Category;
