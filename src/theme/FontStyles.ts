import { StyleSheet, Platform } from "react-native";
import Colors from "./Colors";
import {WP} from "./Dimensions";
import Fonts from "./Fonts";

type TextStyle = {
    fontSize: number;
    lineHeight?: number;
    letterSpacing: number;
    fontFamily: string;
    color: string;
    textDecorationLine?: string;
    textTransform?: string;
};

const createTextStyle = (
    fontSize: number,
    lineHeight: number,
    letterSpacing: number,
    fontFamily: string,
    color?: string,
    textDecorationLine?: string,
    textTransform?: string
) => {
    return (customColor?: string): TextStyle => {
        return {
            fontSize: WP(fontSize),
            lineHeight: Platform.OS === "android" ? WP(lineHeight) : undefined,
            letterSpacing: WP(letterSpacing),
            fontFamily,
            color: customColor || color || Colors.black,
            ...(textDecorationLine && { textDecorationLine }),
            ...(textTransform && { textTransform }),
        };
    };
};

const FontStyles = StyleSheet.create({
    global_text_large_regular: createTextStyle(4.44, 6.67, 0, Fonts.Regular), // Large Regular
    global_text_large_bold: createTextStyle(4.44, 6.67, 0, Fonts.SemiBold), // Large Bold
    global_text_large_label: createTextStyle(4.44, 6.67, 0, Fonts.Medium), // Large Label
    global_text_large_underline: createTextStyle(4.44, 6.67, 0, Fonts.Medium, undefined, 'underline'), // Large Underline

    global_text_medium_regular: createTextStyle(3.89, 6.11, 0, Fonts.Regular), // Medium Regular
    global_text_medium_bold: createTextStyle(3.89, 6.11, 0, Fonts.SemiBold), // Medium Bold
    global_text_medium_label: createTextStyle(3.89, 6.11, 0, Fonts.Medium), // Medium Label
    global_text_medium_underline: createTextStyle(3.89, 6.11, 0, Fonts.Medium, undefined, 'underline'), // Medium Underline


    global_text_small_regular: createTextStyle(3.33, 4.44, 0, Fonts.Regular), // Small Regular
    global_text_small_bold: createTextStyle(3.33, 4.44, 0, Fonts.SemiBold), // Small Bold
    global_text_small_label: createTextStyle(3.33, 4.44, 0, Fonts.Medium), // Small Label
    global_text_small_underline: createTextStyle(3.33, 4.44, 0, Fonts.Medium, undefined, 'underline'), // Small Underline


});

export default FontStyles;
