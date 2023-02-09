import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAsyncStorageData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
        console.log(error);
    }
}

export const saveAsyncStorageData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.log(error);
    }
}

export const saveAsyncStorageString = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch(error) {
        console.log(error);
    }
}

export const getAsyncStorageString = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch(error) {
        console.log(error);
    }
}

export const removeAsyncStorageItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch(error) {
        console.log(error);
    }
}