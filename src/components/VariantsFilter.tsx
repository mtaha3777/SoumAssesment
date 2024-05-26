import React, {useState} from "react";
import {
    BackHandler,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";

import Colors from "../theme/Colors";
import {HP, WP} from "../theme/Dimensions";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Variables} from "../utils/Enums";
import FontStyles from "../theme/FontStyles";
import Check from "../assets/Check.png"
import {hideModalWithView} from "./ModalHandler";
import Header from "./Header";
import ArrowBack from "../assets/ArrowBack.png";

interface VariantsFilterProps {
    style ? : ViewStyle,
    onPress ? : void
}

// we can move this comp to another file but for now as we have time short we will place it here
export const HorizontalTextSelection = ({text,onPress,id})=>{
    const [selected,setSelected] = useState(null)

    const onPressRow = (id)=>{
        setSelected(id)
        hideModalWithView()
    }

    return (<TouchableOpacity onPress={onPressRow} style={{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:WP(5),
        marginBottom:WP(3),
        borderBottomWidth:0.5,
        paddingBottom:WP(3),
        borderColor:Colors.Greyscale200
    }}>
        <Text style={FontStyles.global_text_medium_regular()}>{text}</Text>
        {
            selected ?
                <Image source={Check} style={{
                width : WP(5),
                height : WP(5),
                    marginStart:WP(4)
                }}/> :null
        }

    </TouchableOpacity>)
}

const VariantsFilter: React.FC<VariantsFilterProps> = ({
                                                 style,onPress
                                             }) => {

    let data = [{
        name : "Most Relevant",
        id : 1
    },{
        name : "Lowest Price",
        id : 2
    },{
        name : "Highest Price",
        id : 3
    }]


        return (
            <SafeAreaView style={[{backgroundColor:Colors.white,height:HP(100) + HP(90),
            borderTopLeftRadius:WP(8),
                borderTopRightRadius:WP(8),
                paddingTop:WP(4)

            },style]}>
                <Header mainNavigation={true} onPressLeftIcon={()=>{
                    hideModalWithView()
                }}
                        leftIcon={ArrowBack} heading={"Filter"} />

                <FlatList data={data} renderItem={({item,index})=>{
                    return (<HorizontalTextSelection text={item?.name} id={item?.id}
                    />)
                }}/>

            </SafeAreaView>
        );
    }
;



export default VariantsFilter;
