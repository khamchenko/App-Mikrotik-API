import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, forEach } from 'lodash';

import Graphics from './components/Graphics';

import { getInterface } from 'socket-io/data_mikrotik';

import './Traffic.scss';

class TrafficsContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.handlerGetInterface();
    }
    render() {
        const { traffic } = this.props;
        
        return (
            <div className="root-traffic">
                <Graphics traffic={traffic}/>
            </div>
        );
    }
}

const mapStateToProps = ({ trafficInterface }) => {
    return {
        traffic: trafficInterface.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handlerGetInterface: () => {
            dispatch(getInterface());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficsContainer);
