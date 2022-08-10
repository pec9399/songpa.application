import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './footer.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary"
      align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/pec9399/songpa.application">
        Songpa Dev
      </Link>{' '}
      {'.'}
      All rights reserved.
    </Typography>
  );
}


function Footer() {
  return (
    <footer>
      <Copyright className="footer" sx={{mt: 8, mb: 4}} />
    </footer>
  );
}


export default Footer;
