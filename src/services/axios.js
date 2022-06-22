import axios from 'axios';
import Toast from 'react-native-toast-message';

export function useInitAxios() {
    axios.interceptors.response.use(
        response => {
            return response;
        }, 
        error => {
            if(error?.response?.status > 299) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: error?.response?.data?.message 
                    ? error.response.data.message : error.response.data,
                });
            }
            return Promise.reject(error);
        },
    );
}