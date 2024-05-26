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
import {getCategoriesData} from "../../utils/helper";


const Home: React.FC = ({ navigation }): React.JSX.Element => {
    const [categoryData,setCategoryData] = useState([])

    useEffect(()=>{
        getCategories()
    })
    const getCategories = () =>{
        setTimeout(()=>{
            let data = getCategoriesData()
            setCategoryData(data)
        },100)
    }
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Header heading={getLanguage(TextTitle.Home)} />
            <View style={{
                flex: 1,
                paddingHorizontal: WP(4)
            }}>
                <Text
                    style={[FontStyles.global_text_large_regular(),{
                        marginTop:WP(3)
                    }]}>{getLanguage(TextTitle.SelectCategory)}</Text>
                <Text style={[FontStyles.global_text_small_regular(), {
                    marginTop:WP(1)
                }]}>{getLanguage(TextTitle.SelectCategoryDesc)}</Text>
                <FlatList
                    data={categoryData}
                    renderItem={({ item, index }) => (
                        <GridComponent title={item?.name} description={item?.description}
                                       onPress={()=>{
                                           navigation.navigate("Category",{
                                               data : categoryData,
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
                    style={{ marginTop: WP(5) }}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{ width: WP(2), height: WP(2) }} />}
                />
            </View>
        </View>
    );
};

export default Home;
