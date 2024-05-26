import React from "react";
import {BackHandler, Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";

import Colors from "../theme/Colors";
import {WP} from "../theme/Dimensions";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Variables} from "../utils/Enums";
import FontStyles from "../theme/FontStyles";
import Search from "../assets/Search.png"

interface SearchBarProps {
    style ? : ViewStyle,
    onPress ? : void
}



const SearchBar: React.FC<SearchBarProps> = ({
                                                 style,onPress
                                       }) => {


        return (
           <TouchableOpacity onPress={onPress && onPress} style={[{
               flexDirection:'row',
               borderWidth:1,
               borderColor:Colors.Greyscale200,
               borderRadius:WP(4),
               paddingVertical:WP(2),
               paddingHorizontal:WP(2),
               alignItems:'center'
           },style]}>
               <Image source={Search} style={{
                   width : WP(6),
                   height : WP(6)
               }}/>

               <Text style={[FontStyles.global_text_medium_regular(),{paddingStart:WP(2),
               marginBottom:WP(0.5)
               }]}>{"Search Your Products"}</Text>

           </TouchableOpacity>
        );
    }
;


const styles = StyleSheet.create(

    )
;

export default SearchBar;
