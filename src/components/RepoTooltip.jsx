import React, { Component } from 'react'
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import * as moment from 'moment';

class RepoTooltip extends Component {
    constructor() {
        super();
        this.state = {
            commits: []
        };
    }
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
        const newDate = moment().format('YYYY-MM-DD');
        // GET request using fetch with set headers 
        const headers =  { 
                'Authorization': 'Token 5f7c6905247ce10949a19ce52d2089e4647f027a',
                'Accept': 'application/vnd.github.cloak-preview'
            }            
        fetch(`https://api.github.com/search/commits?q=repo:${this.props.reponame}+author-date:%3C${newDate}`, { headers })
            .then(this.handleResponse)
            .then(
                commits => {
                    this.setState({
                        commits: commits
                    });
                }
            )
            .catch(error => console.log(error));
    }


    render() {
        const commits = this.state.commits;
        const tooltipTitle = (commits.total_count) > 0 ? commits.items[0].commit.message : "commit message not found";
 
        return (
            <Tooltip title={tooltipTitle}>
                <IconButton aria-label="info">
                    <InfoIcon  />
                </IconButton >
            </Tooltip>
        )
    }
}

export default RepoTooltip
