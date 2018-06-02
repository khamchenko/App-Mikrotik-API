import React, { Component } from 'react';
import { connect } from 'react-redux';

import { renderRoutes } from 'react-router-config';

import Layout from '../../layouts';

class RootLayout extends Component {
    render() {
        const { route: { routes } } = this.props;
        return (
            <div>
                <Layout />
                <div className="root-content" id="content">{renderRoutes(routes)}</div>
            </div>
        );
    }
}

export default RootLayout;
