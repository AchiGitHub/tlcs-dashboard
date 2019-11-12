import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './modules/Home';
import { Row, Col } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Row>
        <Col span={3}>
          <SideBar />
        </Col>
        <Col span={21}>
          <Switch>
            <Route path='/'>
              <Home from='vehicle' />
            </Route>
            <Route path='/pedestrian'>
              <Home from='pedestrian' />
            </Route>
            <Route path='/crowdsource'>
              <Home />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
