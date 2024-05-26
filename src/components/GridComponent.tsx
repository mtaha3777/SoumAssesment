import React, {useEffect} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from "react-native";
import Colors from "../theme/Colors";
import {WP} from "../theme/Dimensions";
import WatchesCategory from "../assets/WatchesCategory.png"
import FontStyles from "../theme/FontStyles";

interface GribSkuTableProps  {
    title ? : string,
    description ? : string,
    onPress ?: ({id}) => void,
    id ? : number,
    image ? : number,
    style ? : ViewStyle
}

const GridComponent: React.FC<GribSkuTableProps> = ({id,title,
                                                       description,onPress,
                                                       image,style
                                                   }) => {



    return (
        <TouchableOpacity
            style={[styles.container,{
                borderColor :Colors.Greyscale100

            },style]}
            activeOpacity={0.7}
            onPress={() => onPress && onPress({id})}
        >

            <Image
                source={image}
                style={styles.image} />
            <Text
                style={[
                    FontStyles.global_text_large_regular(Colors.black),
                    { alignSelf: "flex-start", marginTop: WP(2) }
                ]}
            >{title}</Text>
            <Text
                style={[
                    FontStyles.global_text_small_regular(Colors.black),
                    {  alignSelf: "flex-start", marginTop:WP(0.5)}
                ]}
            >{description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "48%",
        borderRadius: WP(2),
        borderWidth: 1,
        borderColor: Colors.Greyscale100,
        padding: WP(3),
        justifyContent: "center",
        alignItems: "center",
        marginEnd: WP(2)
    },
    image: {
        width: WP(35),
        height: WP(35),
        resizeMode:"contain"
    }
})

export default GridComponent;

