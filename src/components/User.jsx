import React, { Component } from 'react'
import RepositoryList from './RepositoryList';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2),
      },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    textFldWidth: {
        width: '50%',       
    },
    title: {
        margin: '10px 0px 10px 0px',
    }
});

export class User extends Component {
    constructor() {
        super();
        this.state = {
            filter: "",
            data: [],
        };
    }

    handleSearch = event => {
        this.setState({ filter: event.target.value });
    };

    handleResponse = response => {
        return response.json()
            .then(json => {
                if (response.ok) {
                    return json
                }
                else {
                    return Promise.reject(Object.assign({}, json, {
                        status: response.status,
                        statusText: response.statusText
                    }))
                }
            })
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.username}/repos`)
            .then(this.handleResponse)
            .then(
                data => {
                    this.setState({
                        data: data
                    });
                }
            )
            .catch(error => console.log(error));
    }

    render() {
        const { filter, data } = this.state;
        const loweredCasedFilter = filter.toLowerCase();
        const { classes } = this.props;
        const inputProps = {
            width: "100%",
        };

        const filteredData =
            data.filter(item => item["name"]
                .toLowerCase()
                .includes(loweredCasedFilter))

        return (
            <div className={classes.root}>
                <div>
                    <Typography color="primary" variant="h3" className={classes.title}>
                        Enter any keyword to search for files:
                    </Typography>
                    <TextField
                        inputProps={inputProps} 
                        className={classes.textFldWidth}
                        value={filter}
                        placeholder="Enter keyword"
                        variant="outlined"
                        onChange={this.handleSearch}
                    />
                </div>
                <div>
                    <Typography color="primary" variant="h3" className={classes.title}>Results:</Typography>
                    <Grid container spacing={3}>
                        {(filteredData.length > 0) ? filteredData.map((repo, i) => {
                            return (
                                <Grid item xs={12} sm={6} key={repo.id}>
                                    <Paper className={classes.paper}>
                                        <RepositoryList data={repo} />
                                    </Paper>         
                                </Grid>
                            )
                        }) : (
                                <Grid item xs={12} sm={6} key="dne1">
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography color="secondary" variant="h5">
                                            Repositories does not exist
                                        </Typography>
                                    </Paper>
                                </Grid>
                            )}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(User)
