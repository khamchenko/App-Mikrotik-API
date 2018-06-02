import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Interface.scss';

import ListInterface from './components/ListInterface';

class InterfaceContainer extends Component {
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

export default connect(mapStateToProps, null)(InterfaceContainer);
