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
import {HorizontalTextSelection} from "./SortingFilter";

interface VariantsFilterProps {
    style ? : ViewStyle,
    onPress ? : void
}

const LabelTextSelection = ({text,onPress,id})=>{
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


const VariantFilter: React.FC<VariantsFilterProps> = ({
                                                          style,onPress
                                                      }) => {

        let data = [{
            name: "Select Gb",
            id : 1,
            data: [{
                name: "128 gb",
                id: 1
            }, {
                name: "256",
                id: 2
            }],
        }, {
            name: "Select Color",
            id :2,
            data: [{
                name: "pink",
                id: 1
            }, {
                name: "green",
                id: 2
            }],
        }
        ]


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
                    return (<View>
                            <Text style={[FontStyles.global_text_small_bold(),{
                                marginStart:WP(3),
                                marginBottom:WP(3)
                            }]}>{item?.name}</Text>
                            <FlatList data={item?.data} renderItem={({item,index})=>{
                                return (<HorizontalTextSelection text={item?.name} id={item?.id}
                                                                 onPress={()=>null}
                                />)
                            }}/>

                        </View>
                            )
                }}/>
                <TouchableOpacity onPress={()=>hideModalWithView()} style={{
                    backgroundColor:Colors.primary,
                    paddingVertical:WP(3),
                    paddingHorizontal:WP(3),
                    width : WP(90),
                    alignItems:'center',
                    alignSelf:"center",
                    marginBottom:WP(5),
                    borderRadius:WP(5)
                }}>
                    <Text style={FontStyles.global_text_medium_regular(Colors.white)}>{"Confirm"}</Text>
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
;



export default VariantFilter;
