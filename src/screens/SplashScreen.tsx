// App.js
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Colors from '../theme/Colors';
import {SplashScreenProps} from '../navigations/MainNavigation';
import {Variables} from "../utils/Enums";
import Logo from "../assets/Logo.png"
import {WP} from "../theme/Dimensions";

const SplashScreen: React.FC = ({ navigation }): React.JSX.Element => {
    useEffect(() => {
        Variables.mainNavigation = navigation;
        setTimeout(() => {
            navigation.replace("BottomTabNavigation")
        }, 1000);

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.darkBlue ,justifyContent:'center',alignItems: "center"}}>
            <Image source={Logo} style={{width : WP(70),
                height : WP(40),
                resizeMode:"contain"
            }}/>
        </View>
    );
}


export default SplashScreen;
