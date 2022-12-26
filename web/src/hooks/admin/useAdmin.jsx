import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCardAsync
} from '../../modules/Admin/actions';

function useAdmin() {
    const adminState = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const addCard = useCallback((data) => {
        dispatch(addCardAsync.request(data));
    }, [dispatch]);

    return {
        adminState,
        addCard
    };
}

export default useAdmin;