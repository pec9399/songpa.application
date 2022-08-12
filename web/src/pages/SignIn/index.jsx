import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useUser} from '../../hooks/user';
import './signin.css';



export default function SignIn() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();
  const {userState, login} = useUser();

  const onSubmit = (data, e) => {
    if (e) {
      e.preventDefault();
    }
    login(data);
  };

  useEffect(()=>{
    if (userState.session && userState.session.uid) {
      navigate('/');
    } else if (userState.message) {
      alert(userState.message);
    }
  }, [userState]);


  return (
    <div id="SignInContainer">
      <div id="SignInWrap">
        <div className="logo">
          <img alt="logo" src="images/banner.jpg"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="block" placeholder="아이디"
            type="text"
            {...register('uid', {required: 'Username is Required'})} />
          <input className="block" placeholder="비밀번호"
            type="password"
            {...register('password', {required: 'Password is Required'})} />
          <button className="loginButton block" type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}
