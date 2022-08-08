import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import './header.css';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
        <div class="bannerContainer">
            <a href="/">
              <img alt="banner" class="banner" src="images/banner.jpg"/>
            </a>
        </div>
        <div className="navigation">
          <RouterLink className={'board enabled'}
            to='/' onClick={()=>{}}>생각하는 신앙</RouterLink>
          <RouterLink className={''}
            to='/' onClick={()=>{}}>여름사역</RouterLink>
        </div>
        <div className="buttons">
          <IconButton className={''}
            onClick={()=>{}}>
            <Badge badgeContent={0} variant="dot">
              <SendIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleClick}>
            <PersonIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={()=>{}}>내 정보</MenuItem>
            <MenuItem onClick={()=>{}}>로그아웃</MenuItem>
          </Menu>
        </div>
    </header>
  );
}


export default Header;
