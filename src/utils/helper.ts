import {Variables} from "./Enums";
import queueInstance from "./Queue";
import WatchesCategory from "../assets/WatchesCategory.png";
import MobileCategory from "../assets/MobileCategory.png";
import HeadPhonesCategory from "../assets/HeadPhonesCategory.png";

export  const showModalViaQueue = (modal) => {
    if (queueInstance.isEmpty()) {
        queueInstance.enqueue(modal);
        modal?.modalRef?.isVisible(modal?.data, modal?.props);
    } else {
        queueInstance.enqueue(modal);
    }
}

export const hideModalViaQueue = async () => {
    let peak = queueInstance.peek();
    if (peak) {
        peak?.modalRef?.isClose();
        queueInstance.dequeue();
        if (!queueInstance.isEmpty()) {
            peak = queueInstance.peek();
            peak?.modalRef.isVisible(peak?.data, peak?.props);
        }
    }
}

export const getBrands = (id) =>{
    //It will comes from api
    let data
    switch (id){
        case Variables.brands.watches :
            data = [{
                name : "Rolex",
            },{
                name : "Seiko",
            },{
                name : "Casio",
            }, {
                    name : "Cartier",
                }]
            break;
        case Variables.brands.mobiles :
            data = [{
                name : "Apple",
            },{
                name : "Samsung",
            },{
                name : "Vivo",
            }, {
                name : "Oppo",
            }, {
                name : "Xiaomi",
            }]
            break;
        case Variables.brands.headphones :
            data = [{
                name : "Rolex",
            },{
                name : "Seiko",
            },{
                name : "Casio",
            }, {
                name : "Cartier",
            }]
            break;
        default :
            data = [{name : "All"}]
    }
    return data
}

export const getCategoriesData = () =>{
    return [{
        id:1,
        name : "Watches",
        description:"Rolex,Seiko,Casio,Tag Heuer,Cartier",
        image : WatchesCategory
    },{
        id:2,
        name : "Mobiles",
        description:"Apple,Samsung,Vivo,Oppo,Xiaomi",
        image : MobileCategory
    },{
        id:3,
        name : "Seiko",
        description:"SJDJKA",
        image : HeadPhonesCategory
    }]
}
export const getModelsData = () =>{
    return [{
        id:1,
        name : "iPhone (Original)",
        description:"Revolutionary touchscreen smartphone that redefined mobile communication.",
        image : WatchesCategory
    },{
        id:2,
        name : "iPhone 3G",
        description:"Introduced 3G network support and the App Store, expanding iPhone capabilities.",
        image : MobileCategory
    },{
        id:3,
        name : "iPhone 3GS",
        description:"Enhanced performance and introduced video recording and voice control.",
        image : HeadPhonesCategory
    },{
        id:3,
        name : "iPhone XS Max",
        description:" Sleek design with Retina display, FaceTime video calling, and improved camera.",
        image : HeadPhonesCategory
    },
        {
            id:2,
            name : "iPhone 5",
            description:"Slimmer design, taller display, and faster performance.",
            image : MobileCategory
        },]
}
