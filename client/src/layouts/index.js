import React, { Component } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
            </div>
        );
    }
}

export default Layout;
