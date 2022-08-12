import axios from 'axios';
import {SERVER} from '../../constants';

export async function loginApi(data) {
  try {
    const user = await axios.post(`${SERVER}/login`, data,
        {withCredentials: true});
    return user.data;
  } catch (err) {
    console.log(err);
    return {
      login: false,
      message: err
    };
  }
}

export async function logoutApi() {
  try {
    const user = await axios.post(`${SERVER}/logout`,
        {withCredentials: true});
    return user.data;
  } catch (err) {
    console.log(err);
    return {
      message: err
    };
  }
}

export async function checkSessionApi(){
  try {
    const user = await axios.get(`${SERVER}/user/session`,
        {withCredentials: true});
    return user.data;
  } catch (err) {
    console.log(err);
    return {
      login: false,
      message: err
    };
  }
}