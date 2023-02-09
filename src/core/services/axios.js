import axios from 'axios';
import Toast from 'react-native-toast-message';

import { JWT_TOKEN_KEY } from '../constants/constants';
import { getAsyncStorageString } from '../storage';

export function useInitAxios() {
    axios.interceptors.request.use(async (config) => {
        const accessToken = await getAsyncStorageString(JWT_TOKEN_KEY);
        
        if(!config.url?.includes('/api/auth/')) {
            config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
    });

    axios.interceptors.response.use(
        response => {
            return response;
        }, 
        error => {
            console.log('error: ', JSON.stringify(error));
            // if(error?.response?.status > 299) {
                // console.log(error.response);
                // Toast.show({
                //     type: 'error',
                //     text1: 'Error',
                //     text2: error?.response?.data?.message 
                //     ? error.response.data.message : error?.response?.data,
                // });
            // }
            return Promise.reject(error);
        },
    );
}