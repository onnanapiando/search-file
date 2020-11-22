import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function NavBar() {
  return (
    <div className="navbar-root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">
            <Link href="/" color="inherit" variant="body2" >GITHUB REPOSITORY SEARCH</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
