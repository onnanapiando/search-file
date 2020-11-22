import React, { Component } from 'react'
import Search from './Search'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2),
      },
    title: {
        margin: '10px 0px 10px 0px',
    }
});

class Main extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography color="primary" variant="h3" className={classes.title}>
                    Enter Github username: 
                </Typography>
                <Search />
            </div>
        )
    }
}

export default withStyles(useStyles)(Main)