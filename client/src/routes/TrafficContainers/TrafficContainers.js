import React, { Component } from 'react';
import { connect } from 'react-redux';

import Graphics from './components/Graphics';

import './Traffic.scss';

class TrafficsContainer extends Component {
    render() {
        const { Interface } = this.props;

        return (
            <div className="root-traffic">
                <Graphics Interface={Interface}/>
            </div>
        );
    }
}

const mapStateToProps = ({ Interface }) => {
    return {
        Interface: Interface.data
    };
}

export default connect(mapStateToProps, null)(TrafficsContainer);
