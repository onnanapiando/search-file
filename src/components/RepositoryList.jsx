import React, { Component } from 'react'
import RepoTooltip from './RepoTooltip';
import Typography from '@material-ui/core/Typography';

class RepositoryList extends Component {
    render() {
        const data = this.props.data;

        return (
            <React.Fragment>
                <div className="container">
                    <Typography color="primary" variant="h6">
                        {data.name}
                        <RepoTooltip reponame={data.full_name} />
                    </Typography>

                    <div className="card-desc">
                        <Typography color="primary" variant="subtitle1" display="inline">DESCRIPTION: </Typography>
                        <Typography color="textSecondary" variant="body1" display="inline">
                            {data.description ? data.description : "N/A"}
                        </Typography>
                    </div>

                    <div className="card-details">
                        <div>
                            <Typography color="primary" variant="subtitle2" display="inline">NODE ID:</Typography>
                            <Typography color="textSecondary" variant="body2" display="inline">{data.node_id}</Typography>
                        </div>
                        <div>
                            <Typography color="primary" variant="subtitle2" display="inline">REPOSITORY FULLNAME: </Typography>
                            <Typography color="textSecondary" variant="body2" display="inline">{data.full_name}</Typography>
                        </div>
                        <div>
                            <Typography color="primary" variant="subtitle2" display="inline">HTML URL: </Typography>
                            <Typography color="textSecondary" variant="body2" display="inline">{data.html_url}</Typography>
                        </div>
                        <div>
                            <Typography color="primary" variant="subtitle2">API URL:</Typography>
                            <Typography color="textSecondary" variant="body2">{data.url}</Typography>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RepositoryList
