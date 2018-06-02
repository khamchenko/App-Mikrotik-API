import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header from './components/Header';
import Menu from './components/Menu';

import { getInterface } from 'socket-io/data_mikrotik';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.handlerGetInterface();
    }
    render() {
        return (
            <div>
                <Header />
                <Menu />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handlerGetInterface: () => {
            dispatch(getInterface());
        }
    }
};
export default connect(null, mapDispatchToProps)(Layout);
