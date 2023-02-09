import { 
    useEffect, 
    useState, 
} from 'react';

import { CommonActions } from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import moment from 'moment';

import { 
    getAsyncStorageString, 
    removeAsyncStorageItem, 
} from '../storage';
import { JWT_TOKEN_KEY } from '../constants/constants';
import { Screens } from '../constants/navigator';

export const logOut = async (navigation) => {
    await removeAsyncStorageItem(JWT_TOKEN_KEY);
    if(navigation?.getCurrentRoute?.()?.name != Screens.LOGIN) {
        navigation?.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: Screens.LOGIN }],
            })
        );
    }
} 

export const useAuthorization = (navigation) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { 
        if(isMounted) {
            checkIfTokenIsActive()
            .then(isActive => {
                if(isActive) {
                    navigation?.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: Screens.DASHBOARD }],
                        })
                    );
                } else {
                    logOut(navigation);
                }
            });
        }
    }, [isMounted]);

    const onStateChange = async () => {
        const isActive = await checkIfTokenIsActive();
        isActive === false && logOut(navigation);
    }
    
    const setNavigationReady = () => {
        setIsMounted(true);
    }
    
    const checkIfTokenIsActive = async () => {
        const accessToken = await getAsyncStorageString(JWT_TOKEN_KEY);
    
        if(accessToken) {
            const decodedToken = jwt_decode(accessToken);

            const expirationDate = moment(new Date(decodedToken.exp * 1000));
            const now = moment(Date.now());

            return !now.isAfter(expirationDate);
        }
        return;
    }

    return { 
        setNavigationReady,
        onStateChange,
    };
}

