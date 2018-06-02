import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, forEach } from 'lodash';

import { getInterface } from 'socket-io/data_mikrotik';

import './Interface.scss';

import ListInterface from './components/ListInterface';

class InterfaceContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.handlerGetInterface();
    }
    render() {
        const { Interface } = this.props;
        return (
            <div className="root-interface">
                <ListInterface Interface={Interface}/>
            </div>
        );
    }
}

const mapStateToProps = ({ Interface }) => {
    return {
        Interface: Interface.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handlerGetInterface: () => {
            dispatch(getInterface());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer);
