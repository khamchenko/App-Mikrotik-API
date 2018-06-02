import React, { Component } from 'react';
import { map } from 'lodash';

import './ListDevices.scss';

class ListDevices extends Component {
    render() {
        const { devices } = this.props;
        return (
            <div className="root-list-devices">
                <div className="header-table">
                    <div className="th-table">Интерфейс</div>
                    <div className="th-table">MAC - адрес</div>
                    <div className="th-table">IP - адрес</div>
                    <div className="th-table th-dns">DNS</div>
                    <div className="th-table">Тип подключения</div>
                    <div className="th-table">Имя хоста</div>
                    <div className="th-table">Статус</div>
                </div>
                <div>
                    {
                        _.map(devices, (elem) => {
                            return (
                                <div className="tr-table" key={`${elem.ip}${elem.mac}`}>
                                    <div className="td-table">{elem.interface || '-'}</div>
                                    <div className="td-table">{elem.mac || '-'}</div>
                                    <div className="td-table">{elem.ip}</div>
                                    <div className="td-table td-dns">{elem.dns || '-'}</div>
                                    <div className="td-table">{elem.type || '-'}</div>
                                    <div className="td-table">{elem.host_name || '-'}</div>
                                    <div className="td-table">{elem.status}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListDevices;
