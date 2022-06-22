import { CommonActions } from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import moment from 'moment';

import { 
    getAsyncStorageString, 
    removeAsyncStorageItem, 
} from '../storage';
import { JWT_TOKEN_KEY } from '../contants/constants';

export const useAuthorization = (navigation) => {
    const checkIfJWTExpired = async () => {
        const accessToken = await getAsyncStorageString(JWT_TOKEN_KEY);
    
        if(accessToken) {
            const decodedToken = jwt_decode(accessToken);

            const expirationDate = moment(new Date(decodedToken.exp * 1000));
            const now = moment(Date.now());

            if(now.isAfter(expirationDate)) {
                console.log("jwt is expired");
                logOut();
            }
        }
    }

    const logOut = async () => {
        await removeAsyncStorageItem(JWT_TOKEN_KEY);
        navigation?.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            })
        );
    }

    return {
        checkIfJWTExpired, 
        logOut,
    };
}

