import AsyncStorage from "@react-native-async-storage/async-storage";

const setItem = async(key:string,value:unknown)=>{
    try {
       await AsyncStorage.setItem(key,JSON.stringify(value));
    } catch (error) {
        console.log(error)
    }
}

const getItem = async(key:string)=>{
    try {
        const value = await AsyncStorage.getItem(key);
        if(value) return JSON.parse(value);
    } catch (error) {
        console.log(error)
    }
}

const removeItem = async(key:string)=>{
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error)
    }
}

export default {
    setItem,
    getItem,
    removeItem,
}


