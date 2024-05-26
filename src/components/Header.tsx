import React from "react";
import {BackHandler, Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";

import Colors from "../theme/Colors";
import {WP} from "../theme/Dimensions";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Variables} from "../utils/Enums";
import FontStyles from "../theme/FontStyles";

interface HeaderProps {
    onPressLeftIcon?: () => void;
    onPressRightIcon?: () => void;
    style?: ViewStyle,
    leftIcon?: number,
    leftIconStyle?: ViewStyle,
    mainNavigation?: NavigationProp<any>;
    temp?: Boolean,
    heading?: string,
    headingStyle?: ViewStyle,
    notToUpperCase?: boolean
}

const Temp = () => {
    return <View style={
        {
            width: WP(8),
            height: WP(8),
        }
    }>

    </View>
};


const Header: React.FC<HeaderProps> = ({
                                           onPressLeftIcon,
                                           style, leftIcon,
                                           leftIconStyle,
                                           mainNavigation, temp, heading,
                                           headingStyle, notToUpperCase
                                       }) => {
        let navigation = null;
        if(mainNavigation){
            navigation = Variables.mainNavigation
        }else{
            navigation = useNavigation();
        }
        const onPressBack = () => {
            if (navigation.canGoBack()) {
                navigation.goBack();
            } else {
                BackHandler.exitApp();
            }
        };

        const onPressHelp = () => null;

        return (
            <View style={{}}>
                <View style=
                          {
                              [
                                  {
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      paddingHorizontal:WP(2),
                                      paddingVertical:WP(4),
                                  }, style]}>

                    {
                        leftIcon ? <TouchableOpacity onPress={onPressLeftIcon ? onPressLeftIcon : onPressBack}>
                            <Image
                                source={leftIcon} style={[{
                                width:WP(8),
                                height:WP(8),
                                resizeMode: "contain"

                            }, leftIconStyle]}/>
                        </TouchableOpacity> :
                            <Temp/>
                    }

                    {heading && <Text
                        style={[FontStyles.global_text_large_regular(), styles.headingStyle, headingStyle]}>
                        {notToUpperCase ? heading.toUpperCase() :  heading  }
                    </Text>}
                   <Temp/>

                </View>


            </View>
        );
    }
;


const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            paddingVertical:
                WP(5),
            paddingHorizontal:
                WP(5),
            justifyContent:
                "space-between",
            borderColor:
            Colors.black
        }
        ,
        headingStyle: {
            textAlign: 'center',
            textAlignVertical:
                'center',
            alignSelf:
                'center',
        }
        ,
        rightIconStyle: {
            width: WP(6),
            height:
                WP(6),
            resizeMode:
                'contain',
        }
        ,
        leftIconStyle: {
            width: WP(6),
            height:
                WP(6),
            resizeMode:
                'contain',
        }
        ,
        leftIconView: {
            flexDirection: "row",
            justifyContent:
                "space-between",
            alignItems:
                "center"
        }
        ,

    }
    )
;

export default Header;
