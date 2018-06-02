import React, { Component } from 'react';
import { map } from 'lodash';

import './ListInterface.scss';

class ListInterface extends Component {
    render() {
        const { Interface } = this.props;
        return (
            <div className="root-list-devices">
                <div className="header-table">
                    <div className="th-table">Интерфейс</div>
                    <div className="th-table">MAC - адрес</div>
                    <div className="th-table">RX</div>
                    <div className="th-table">TX</div>
                    <div className="th-table">Всего RX</div>
                    <div className="th-table">Всего TX</div>
                    <div className="th-table">Статус</div>
                </div>
                <div>
                    {
                        _.map(Interface, (elem) => {
                            return (
                                <div className="tr-table" key={`${elem.name}`}>
                                    <div className="td-table">{elem.name || '-'}</div>
                                    <div className="td-table">{elem.mac || '-'}</div>
                                    <div className="td-table">{elem.rx || '-'}</div>
                                    <div className="td-table">{elem.tx || '-'}</div>
                                    <div className="td-table">{elem.sum_rx || '-'}</div>
                                    <div className="td-table">{elem.sum_tx || '-'}</div>
                                    <div className="td-table">{elem.status || '-'}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListInterface;
