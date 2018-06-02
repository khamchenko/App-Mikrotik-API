import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, forEach } from 'lodash';

import { getDevices } from 'socket-io/data_mikrotik';

import './Devices.scss';

import ListDevices from './components/ListDevices';

class DevicesContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.handlerGetDevices();
    }
    render() {
        const { devices } = this.props;
        return (
            <div className="root-devices">
                <ListDevices devices={devices}/>
            </div>
        );
    }
}

const mapStateToProps = ({ devices }) => {
    return {
        devices: devices.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handlerGetDevices: () => {
            dispatch(getDevices());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesContainer);
