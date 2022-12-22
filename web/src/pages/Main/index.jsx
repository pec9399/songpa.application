import React, { useState, useEffect } from 'react';
import Card from '../../components/Card'
import Header from '../../components/Header'
import { useUser } from '../../hooks/user';
import { useMain } from '../../hooks/main';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddCard from '../../components/Card/AddCard';
import './main.css';

function Main() {
  const { userState, getSession } = useUser();
  const { getApps, mainState } = useMain();

  const [openDialog, setOpenDialog] = useState(false);
  const closeDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    getSession();
    getApps();
  }, [])

  useEffect(() => {
    console.log(mainState);
  }, [mainState])

  return (
    <>
      <Header />
      <div id="MainContainer">
        {
          userState.session && userState.session.uid ?
            <div className="adminSection">
              <div className="addButton">
                <Fab color="primary" variant="extended" onClick={() => setOpenDialog(true)}>
                  <AddIcon sx={{ mr: 1 }} />
                  추가
                </Fab>
              </div>
            </div>
            : <></>

        }

        <Card />

      </div>
      <AddCard
        open={openDialog}
        closeHandler={() => setOpenDialog(false)}
      />
    </>
  );
}


export default Main;
