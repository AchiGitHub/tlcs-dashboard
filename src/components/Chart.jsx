import React, { Component } from 'react'
import moment from 'moment';
import ChartView from './ChartView';
import { Row, Col } from 'antd';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch(proxyurl + 'https://traffictrackerback.herokuapp.com/api/vehicle/get-all-vehicle-count')
            .then(res => res.json())
            .then(data => this.setState({ data: data.Result }))
    }

    componentDidUpdate(){
        // if(true){
        //     setTimeout(fetch(proxyurl + 'https://traffictrackerback.herokuapp.com/api/vehicle/get-all-vehicle-count')
        //     .then(res => res.json())
        //     .then(data => this.setState({ data: data.Result })), 20000) 
        // }
    }

    render() {
        const { data } = this.state;
        let dataArrayLane1 = [];
        let dataArrayLane2 = [];
        let dataArrayLane3 = [];
        let dataArrayLane4 = [];
        data && data.map((item, index) => {
            let obj = {
                name: moment(item.createdAt).format('hh:mm:ss'),
                Count: item.upCount
            }
            if (item.laneId == 1) {
                dataArrayLane1.push(obj)
            } else if (item.laneId == 2) {
                dataArrayLane2.push(obj)
            } else if (item.laneId == 3) {
                dataArrayLane3.push(obj)
            } else if (item.laneId == 4) {
                dataArrayLane4.push(obj)
            }
        })
        return (
            <React.Fragment>
                <Col style={{ paddingTop: "20px" }} span={12}>
                    <Row style={{ textAlign: "center" }}>
                        <Col span={20}>
                            <h5>Traffic Variation - Lane 1</h5>
                        </Col>
                    </Row>
                    <ChartView data={dataArrayLane1} />
                </Col>
                <Col style={{ paddingTop: "20px" }} span={12}>
                    <Row style={{ textAlign: "center" }}>
                        <Col span={20}>
                            <h5>Traffic Variation - Lane 2</h5>
                        </Col>
                    </Row>
                    <ChartView data={dataArrayLane2} />
                </Col>
                <Col style={{ paddingTop: "20px" }} span={12}>
                    <Row style={{ textAlign: "center" }}>
                        <Col span={20}>
                            <h5>Traffic Variation - Lane 3</h5>
                        </Col>
                    </Row>
                    <ChartView data={dataArrayLane3} />
                </Col>
                <Col style={{ paddingTop: "20px" }} span={12}>
                    <Row style={{ textAlign: "center" }}>
                        <Col span={20}>
                            <h5>Traffic Variation - Lane 4</h5>
                        </Col>
                    </Row>
                    <ChartView data={dataArrayLane4} />
                </Col>
            </React.Fragment>
        )
    }
}

export default Chart
