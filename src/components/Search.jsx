import React from 'react'
import "../css/index.css";
import { browserHistory as history } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    textFldWidth: {
        width: '50%',       
    },
});

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
    }

    handleClick = () => {
        let userInput = this.textRef.current.value;   
        if (this.isEmptyOrSpaces(userInput)){
            alert("username is required");
        }
        else {
            let formatUserName = userInput.replace(/\s+/g, '');
            history.push(`/user/${formatUserName}`);
        } 
    };

    isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    render() {
        const { classes } = this.props;
        const inputProps = { width: "100%"};

        return (
            <div className={classes.root}>
                <form>
                    <TextField
                        inputRef={this.textRef}
                        label="Enter Username"
                        placeholder="username"
                        variant="outlined"
                        className={classes.textFldWidth}
                        inputProps={inputProps} 
                    />
                    <button
                        className="search-user-btn"
                        onClick={this.handleClick}>
                        Search
                    </button> 
                </form>
            </div>
        );
    }
}

export default withStyles(useStyles)(Search)
