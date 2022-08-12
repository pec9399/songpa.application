import React, {useState} from 'react';
import Card from '../../components/Card'
import Header from '../../components/Header'
import {useUser} from '../../hooks/user';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddCard from '../../components/Card/AddCard';
import './main.css';

function Intro() {
  const {userState} = useUser();

  const [openDialog, setOpenDialog] = useState(false);
  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Header/>
      <div id="MainContainer">
      { 
        userState.session && userState.session.uid ?
        <div className="adminSection">
          <Fab color="primary" variant="extended" onClick={()=>setOpenDialog(true)}>
            <AddIcon sx={{ mr: 1 }} />
            추가
          </Fab>
        </div>
        : <></>
          
      }
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <AddCard
        open={openDialog}
        closeHandler={() => setOpenDialog(false)}
      />
    </>
  );
}


export default Intro;
