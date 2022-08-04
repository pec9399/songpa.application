import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Footer from '../components/Footer';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import './App.css';

import {
  SIGNIN_PATH,
  ROOT_PATH,
} from '../constants';

function App() {
  return (
    <>
    <Routes>
      <Route exact path={SIGNIN_PATH} element={<SignIn/>} />
      <Route path={ROOT_PATH} element={<Main/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;