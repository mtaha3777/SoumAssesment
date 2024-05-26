// App.js
import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import ManagementPortal from "../screens/ManagementPortal";
import BottomTabNavigation from "./tabs/BottomTabNavigation";


type MainNavigationParamList = {
    SplashScreen: undefined,
    BottomTabNavigation: undefined,

};

const Stack = createStackNavigator<MainNavigationParamList>();

const MainNavigation = (): React.JSX.Element => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainNavigation;
