import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    loginAsync,
    logoutAsync,
    checkSessionAsync,
} from '../../modules/User/actions';

function useUser(){
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const login = useCallback((data) => {
      dispatch(loginAsync.request(data));
    }, [dispatch]);
    
    const logout = useCallback((data) => {
      dispatch(logoutAsync.request());
    }, [dispatch]);

    const getSession = useCallback((data) => {
      dispatch(checkSessionAsync.request());
    }, [dispatch])
      
    return {
        userState,
        login,
        logout,
        getSession,
    };
}

export default useUser;