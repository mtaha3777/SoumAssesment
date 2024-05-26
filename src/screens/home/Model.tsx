import React, {useEffect, useState} from 'react';
import { FlatList, Text, View, ImageSourcePropType } from 'react-native';
import Colors from '../../theme/Colors';
import { getLanguage } from "../../i18n/i18n";
import { TextTitle } from "../../i18n/TextTitle";
import Header from "../../components/Header";
import { WP } from "../../theme/Dimensions";
import ArrowBack from "../../assets/ArrowBack.png";
import GridComponent from "../../components/GridComponent";
import FontStyles from "../../theme/FontStyles";
import WatchesCategory from "../../assets/WatchesCategory.png";
import MobileCategory from "../../assets/MobileCategory.png";
import HeadPhonesCategory from "../../assets/HeadPhonesCategory.png";
import {getCategoriesData, getModelsData} from "../../utils/helper";


const Model: React.FC = ({ navigation }): React.JSX.Element => {
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

                <FlatList
                    data={modelData}
                    renderItem={({ item, index }) => (
                        <GridComponent title={item?.name} description={item?.description}
                                       onPress={()=>{
                                           navigation.navigate("Variants",{
                                               data : modelData,
                                               initRoute : item?.name
                                           })
                                       }}
                                       image={item?.image}
                                       id={item.id}
                                       style={{
                                           backgroundColor:Colors.lightGray
                                       }}
                        />
                    )}
                    style={{ marginTop: WP(5),paddingHorizontal: WP(4),marginBottom:WP(2) }}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{ width: WP(2), height: WP(2) }} />}
                />

        </View>
    );
};


export default Model;
