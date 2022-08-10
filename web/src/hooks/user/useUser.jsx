import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    loginAsync,
    logoutAsync
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
      
    return {
        userState,
        login,
        logout
    };
}

export default useUser;