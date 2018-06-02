import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MikrotikLogo from 'icons/mikrotik_logo.png';

import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="wrapper-logo">
                    <img className="logo" src={MikrotikLogo} alt=''/>
                </div>
                <Link to="/" className="menu-elem">Главная</Link>
                <Link to="/devices" className="menu-elem">Подключенные устройства</Link>
                <Link to="/interface" className="menu-elem">Интерфесы</Link>
                <Link to="/traffic" className="menu-elem">Трафик</Link>
            </div>
        );
    }
}

export default Menu;
