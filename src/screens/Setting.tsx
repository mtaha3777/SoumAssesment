// App.js
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import Colors from '../theme/Colors';
import {SettingsProps} from '../navigations/MainNavigation';
import {Variables} from "../utils/Enums";
import Logo from "../assets/Logo.png"
import {WP} from "../theme/Dimensions";
import Header from "../components/Header";

const Setting: React.FC = ({ navigation }): React.JSX.Element => {


    return (
        <View style={{ flex: 1, backgroundColor: Colors.white ,justifyContent:'center',alignItems: "center"}}>
            <Header heading={"Settings"}/>
        </View>
    );
}


export default Setting;
