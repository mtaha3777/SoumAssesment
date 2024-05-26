import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, ImageSourcePropType } from 'react-native';
import Colors from '../../theme/Colors';
import { getLanguage } from "../../i18n/i18n";
import { TextTitle } from "../../i18n/TextTitle";
import Header from "../../components/Header";
import { WP } from "../../theme/Dimensions";
import ArrowBack from "../../assets/ArrowBack.png";
import GridComponent from "../../components/GridComponent";
import {BrandsDetailsNavigationProps, HomeStackNavigationProp} from "../../navigations/HomeStack";
import FontStyles from "../../theme/FontStyles";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyTabBar from "../../components/MyTabBar";
import {getBrands} from "../../utils/helper";
import Model from "./Model";


const Tab = createMaterialTopTabNavigator();
const Brands: React.FC = ({ route }): React.JSX.Element => {

    const [brandData,setBrandsData] = useState([])

    useEffect(()=>{
        getCategories()
    },[])
    const getCategories = () =>{
        //    We Will assume here that we got this data from api controller
        setTimeout(()=>{
           let data =  getBrands(route?.params?.id)
            setBrandsData(data)
        },100)
    }
    let allBrands = ["All",...brandData]
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Tab.Navigator
                tabBar={(props) => <MyTabBar {...props} />}
                backBehavior="none"
                initialRouteName={"All"}
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
            {allBrands?.map((item, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={item == 'All' ? 'All' : `${item.name}${index}`}
                            component={Model}
                            options={{
                                title: item.name,
                            }}

                        />
                    );
                })}
            </Tab.Navigator>
        </View>
    );
};

export default Brands;
