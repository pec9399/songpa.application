import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './addrequest.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

const initialDialogState = {
  name: '',
  year: '',
};

const AddRequest = ({ closeHandler, open, id }) => {
  const { register, getValues, handleSubmit, reset } = useForm();
  
  useEffect(() => {
    if (open == true) {
      reset(initialDialogState);
    }
  }, [open]);



  useEffect(() => {
    console.log(id);
  },[open])

  const onSubmit = (data, e) => {
    if (e) {
      e.preventDefault();
    }
    alert(id);

    closeHandler();
  };

  return (
    <Dialog id="AddRequestDialog" onClose={closeHandler} open={open}>
      <IconButton
        aria-label="close"
        onClick={closeHandler}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>
        생각하는 신앙 신청
      </DialogTitle>
      <DialogContent>
        <Container className="container" component="main">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate className="box"
              onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <label>이름</label>
                  <input className="buttonStyle"
                    {...register('name', { required: true })}
                    placeholder="이름을 입력하세요"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>기수</label>
                  <input className="buttonStyle"
                    {...register('year')}
                    placeholder="기수를 입력하세요"
                  />
                </Grid>
              </Grid>
              <Button
                className="submitButton"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                신청하기
              </Button>
            </Box>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};


export default AddRequest;
