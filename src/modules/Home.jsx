import React, { Component } from 'react'
import RealTimeTraffic from './RealTimeTraffic';
import { withRouter } from 'react-router-dom';

export class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <RealTimeTraffic from={this.props.location && this.props.location.pathname}/>
            </React.Fragment>
        )
    }
}

export default withRouter(Home)
