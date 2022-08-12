import React, {useState, useEffect} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useSelector, useDispatch} from 'react-redux';
import {useUser} from '../../hooks/user';
import './header.css';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const {userState, logout} = useUser();
  const open = Boolean(anchorEl);

  useEffect(()=>{
    if(userState.message === 'logout')
      window.location.href = '/';
  }, [userState.message]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginLogoutButton = () => {
    if (userState.session && userState.session.uid){
      return  <MenuItem onClick={()=>{logout()}}>로그아웃</MenuItem>
    } else{
      return <MenuItem onClick={()=>{navigate('/login')}}>로그인 (관리자)</MenuItem>
    }
  }

  return (
    <header>
        <div className="bannerContainer">
            <a onClick={()=>{navigate('/')}}>
              <img alt="banner" className="banner" src="images/banner.jpg"/>
            </a>
        </div>
        <div className="navigation">
          <RouterLink className={'board enabled'}
            to='/' onClick={()=>{}}>생각하는 신앙</RouterLink>
          <RouterLink className={'disabled'}
            to='/' onClick={()=>{}}>여름사역</RouterLink>
        </div>
        <div className="buttons">
          
          <IconButton onClick={handleClick}>
            <PersonIcon />
          </IconButton>
          {
            userState.session && userState.session.uid ?
            <div className="welcomeMessage">{userState.session.name}님, 환영합니다! </div> :
            <></>
          }
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {loginLogoutButton()}
          </Menu>
        </div>
    </header>
  );
}


export default Header;
