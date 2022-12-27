import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './addcard.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {SubmitHandler, useForm} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import {useAdmin} from '../../../hooks/admin';
import {ko} from 'date-fns/esm/locale';
const initialDialogState = {
  title: '',
  description: '',
  startDate: new Date(),
  openDate: new Date(),
};

const getSecondSaturday = () => {
  const date = new Date();
  let cnt = 0;
  date.setDate(1);
  date.setHours(17);
  date.setMinutes(0);
  date.setSeconds(0);
  for(let i = 0; i < 30; i++){
    if(date.getDay() == 6){
      cnt++;
    }
    date.setDate(date.getDate()+1);
    
    if(cnt == 2){
      break;
    }
  }
  return date;
}

const AddCard = ({closeHandler, open}) => {

  const {addCard, adminState} = useAdmin();

  const {register, getValues, handleSubmit, reset} = useForm();
  const [startDate, setStartDate] = useState(getSecondSaturday());
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  const [openDate, setOpenDate] = useState(today);

  const [fileImage, setFileImage] = useState("");
  const saveFileImage = (event) =>{
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };

  const deleteFileImage = () =>{
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };


  useEffect(() => {
    if (open == true) {
      reset(initialDialogState);
    }
  }, [open]);

  useEffect(()=>{
    if(adminState.message === 'addCardSuccess'){
      window.location.reload(false);
    } else if (adminState.message != ''){
      alert(adminState.message);
    }
  },[adminState.message])

  const onSubmit = (data, e) => {
    if (e) {
      e.preventDefault();
    }

    console.log(data);
    console.log(e);
    
    addCard({
      title: data.title,
      description: data.description,
      maxNum: Number(data.maxNum),
      startTime: startDate,
      openTime: openDate,
      file: data.file
    });
    
    closeHandler();
  };

  return (
    <Dialog id="AddCardDialog" onClose={closeHandler} open={open}>
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
        새로운 생각하는 신앙 정보 추가
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
              onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <label>영화/책 제목</label>
                  <input className="buttonStyle"
                    {...register('title', {required: true})}
                    placeholder="영화/책 제목을 입력하세요"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>설명</label>
                  <input className="buttonStyle"
                    {...register('description')}
                    placeholder="(optional) 설명을 입력하세요"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>포스터 이미지</label><br/><br/>
               
                      <input
                        className="buttonStyle"
                        name="imggeUpload"
                        type="file"
                        {...register('file')}
                        style={{
                          border: 'none',
                          backgroundColor: 'transparent',
                        }}
                        accept="image/*"
                        onChange={saveFileImage} />
                     <div style={{
                    display: 'flex',
                    background: 'none'
                  }}>
                  
                    <div style={{
                      width:"260px"
                    }}>
                      {fileImage && ( <img alt="sample" src={fileImage}
                                          style={{ margin: "auto", width: "300px" }} /> 
                                          
                                          ) }
                    </div>
                    <div>
                    {fileImage && (<button style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        cursor: "pointer", }}
                        onClick={() => deleteFileImage()}>X</button>)}
                    </div>
                  </div>
     
                
                </Grid>
                <Grid item xs={12}>
                  <label>최대 신청 가능 인원 수</label>
                  <input className="buttonStyle"
                    {...register('maxNum')}
                    placeholder="최대 신청 인원 수"
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                    label="모임 날짜 / 시간"
                    value={startDate}
                    {...register('startDate')}
                    onChange={(newValue) => {
                        setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  
                </Grid>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                    label="신청 시작 시간"
                    value={openDate}
                    {...register('openDate')}
                    locale={ko}
                    onChange={(newValue) => {
                        setOpenDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Button
                className="submitButton"
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                  추가하기
              </Button>
            </Box>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};


export default AddCard;
