import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, ImageSourcePropType, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Colors from '../../theme/Colors';
import { getLanguage } from "../../i18n/i18n";
import { TextTitle } from "../../i18n/TextTitle";
import Header from "../../components/Header";
import {HP, WP} from "../../theme/Dimensions";
import ArrowBack from "../../assets/ArrowBack.png";
import GridComponent from "../../components/GridComponent";
import FontStyles from "../../theme/FontStyles";
import Filter from "../../assets/Filter.png";
import MobileCategory from "../../assets/MobileCategory.png";
import HeadPhonesCategory from "../../assets/HeadPhonesCategory.png";
import {getCategoriesData, getModelsData} from "../../utils/helper";
import SearchBar from "../../components/SearchBar";
import {hideModalWithView, showModalWithView} from "../../components/ModalHandler";
import SortingFilter, {HorizontalTextSelection} from "../../components/SortingFilter";
import {useSelector} from "react-redux";
import VariantFilter from "../../components/VariantFilter";

const Variants: React.FC = ({ navigation }): React.JSX.Element => {


    const filters = useSelector((state) => state.ApplicationSlice.filters);

    console.log("filters",filters)

    const [modelData,setModelData] = useState([])

    useEffect(()=>{
        getModel()
    })
    const getModel = () =>{
        //    We Will assume here that we got this data from api controller
        setTimeout(()=>{
            let data = getModelsData()
            setModelData(data)
        },100)
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.white, }}>

            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:WP(4),
            }}>
            <SearchBar
                onPress={()=>{
                    showModalWithView(()=>{
                        return ( <SafeAreaView style={[{backgroundColor:Colors.white,height:HP(100) + HP(90),
                            borderTopLeftRadius:WP(8),
                            borderTopRightRadius:WP(8),
                            paddingTop:WP(4)

                        }]}>

                            <Header mainNavigation={true} onPressLeftIcon={()=>{
                                hideModalWithView()
                            }}
                                    leftIcon={ArrowBack} heading={"Search Products"} />


                        </SafeAreaView>)
                    })
                }}
                style={{
                marginHorizontal:WP(4.5),
                    width : WP(74)
            }}/>
            <TouchableOpacity onPress={()=>{
                showModalWithView(()=>{
                    return (<SortingFilter/>)
                })
            }} style={{
                backgroundColor:Colors.ColdGray30,
                borderRadius:WP(6),
                width : WP(12),
                height : WP(12),
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Image source={Filter} style={{
                    width : WP(6),
                    height : WP(6)
                }} />
            </TouchableOpacity>
            </View>

            <FlatList
                style={{
                    marginHorizontal:WP(5),
                    marginTop:WP(5)
                }}
                horizontal={true} data={filters} renderItem={({item,index})=>{
                return (<TouchableOpacity onPress={()=>{
                    return (
                        showModalWithView(()=>{
                            return (<VariantFilter/>)
                        })
                    )
                }} style={{
                    backgroundColor:Colors.Greyscale200,
                    borderRadius:WP(5),
                    paddingHorizontal:WP(3),
                }}>
                        <Text style={[FontStyles.global_text_medium_regular(),{
                            paddingVertical:WP(1),
                            marginBottom:5
                        }]}>{item?.name}</Text>
                </TouchableOpacity>)
            }}
            />
            <FlatList
                data={modelData}
                renderItem={({ item, index }) => (
                    <GridComponent title={item?.name} description={item?.description}
                                   onPress={()=>{
                                   }}
                                   image={item?.image}
                                   id={item.id}
                                   style={{
                                       backgroundColor:Colors.lightGray
                                   }}
                    />
                )}
                style={{ marginTop: WP(5),paddingHorizontal: WP(4),marginBottom:WP(2)  }}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ width: WP(2), height: WP(2) }} />}
            />

        </View>
    );
};

export default Variants;
