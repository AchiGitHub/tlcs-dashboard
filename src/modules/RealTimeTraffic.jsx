import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';
import Dropdown from '../components/Dropdown';
import DatePicker from '../components/DatePicker';
import Video from '../components/VideoPlayer';
import Chart from '../components/Chart';

const { Text } = Typography

export class RealTimeTraffic extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Row className='dropdown-row'>
                    <Col span={3} style={{ top: "5px" }}>
                        <Text code>Filter By Period</Text>
                    </Col>
                    <Col span={8}>
                        <DatePicker />
                    </Col>
                </Row>
                <Row className='video-row'>
                    <Col span={6}>
                        <Video from={this.props.from} />
                    </Col>
                    <Col span={6}>
                        <Video from={this.props.from} />
                    </Col>
                    <Col span={6}>
                        <Video from={this.props.from} />
                    </Col>
                    <Col span={6}>
                        <Video from={this.props.from} />
                    </Col>
                </Row>
                <Row>
                    <Chart from={this.props.from} />
                </Row>
            </React.Fragment>
        )
    }
}

export default RealTimeTraffic
