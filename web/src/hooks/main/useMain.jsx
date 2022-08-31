import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAppsAsync
} from '../../modules/Main/actions';

function useMain() {
    const mainState = useSelector((state) => state.main);
    const dispatch = useDispatch();

    const getApps = useCallback(() => {
        dispatch(getAppsAsync.request());
    }, [dispatch]);

    return {
        mainState,
        getApps
    };
}

export default useMain;