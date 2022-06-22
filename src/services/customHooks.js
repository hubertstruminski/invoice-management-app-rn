import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

export function useInitData(fetchData) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchData && dispatch(fetchData());
    }, []);
}