import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home/Home';
import Category from "../screens/home/Category";
import Brands from "../screens/home/Brands";
import {NativeStackScreenProps} from "react-native-screens/lib/typescript/native-stack/types";
import Variants from "../screens/home/Variants";


type HomeStackParamList = {
    Home: undefined,
    Category : undefined,
    Variants : undefined
};


const Stack = createNativeStackNavigator<HomeStackParamList>();


const HomeStack: React.FC = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    animationEnabled: true,
                } as NativeStackNavigationOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Variants" component={Variants} />
            </Stack.Navigator>
        </>
    );
};

export default HomeStack;
