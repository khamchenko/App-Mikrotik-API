import React, { Component } from 'react';
import _ from 'lodash';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';

import './Graphics.scss';

let config = {
    colors: ['#2f7ed8', '#910000'],
    rangeSelector: {
       buttons: [],
       inputEnabled: false,
       selected: 0
    },
    yAxis: {
        title: {
            text: 'Throughput, (Kbps)'
        }
    },
    navigator: {
        enabled: false
    },
    scrollbar: {
        enabled: false
    },
    chart: {
        height: 300
    },
    title: {
        text: ''
    },
    series: [
        {
            name: 'RX',
            data: [],
            type: 'spline',
            tooltip: {
                valueDecimals: 1,
                valueSuffix: 'Kbps'
            }
        },
        {
            name: 'TX',
            data: [],
            type: 'spline',
            tooltip: {
                valueDecimals: 1,
                valueSuffix: 'Kbps'
            }
        }
    ]
};

class Graphics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config: config,
            ['eth1-wan']: { rx: [], tx: []},
            ['eth2']: { rx: [], tx: []},
            ['eth3']: { rx: [], tx: []},
            ['eth4']: { rx: [], tx: []},
            ['eth5-master']: {rx: [], tx: []},
            ['bridge1']:{ rx: [], tx: []},
        }
    }
    componentWillReceiveProps() {
        _.forEach(this.props.Interface, (elem) => {
            if (this.state[elem.name].rx.length > 50) {
                this.setState({
                    [elem.name]: {
                        rx: [ ...this.state[elem.name].rx.slice(1), [Number(elem.date), Number(elem.rx)]],
                        tx:  [ ...this.state[elem.name].tx.slice(1), [Number(elem.date), Number(elem.tx)]],
                    }
                })
            } else {
                this.setState({
                    [elem.name]: {
                        rx: [ ...this.state[elem.name].rx, [Number(elem.date), Number(elem.rx)]],
                        tx:  [ ...this.state[elem.name].tx, [Number(elem.date), Number(elem.tx)]],
                    }
                })
            }
        })
    }
    render() {
        const { Interface } = this.props;
        return (
            <div className="root-graphics">
                {
                    <div className="wrapper-graphics-full">
                        <ReactHighstock
                            config={
                                {
                                    ...config,
                                    title: {
                                        text: 'eth1-wan'
                                    },
                                    series: [
                                        {
                                            ...config.series[0],
                                            data: this.state['eth1-wan'].rx
                                        },
                                        {
                                            ...config.series[1],
                                            data: this.state['eth1-wan'].tx
                                        },
                                    ]
                                }
                            }
                        />
                    </div>
                }
                {
                    <div className="wrapper-graphics-full">
                        <ReactHighstock
                            config={
                                {
                                    ...config,
                                    title: {
                                        text: 'bridge1'
                                    },
                                    series: [
                                        {
                                            ...config.series[0],
                                            data: this.state['bridge1'].rx
                                        },
                                        {
                                            ...config.series[1],
                                            data:  this.state['bridge1'].tx
                                        },
                                    ]
                                }
                            }
                        />
                    </div>
                }
                {
                    <div className="wrapper-graphics">
                        <ReactHighstock
                            config={
                                {
                                    ...config,
                                    title: {
                                        text: 'eth2'
                                    },
                                    series: [
                                        {
                                            ...config.series[0],
                                            data: this.state['eth2'].rx
                                        },
                                        {
                                            ...config.series[1],
                                            data: this.state['eth2'].tx
                                        },
                                    ]
                                }
                            }
                        />
                    </div>
                }
                {
                    <div className="wrapper-graphics">
                        <ReactHighstock
                            config={
                                {
                                    ...config,
                                    title: {
                                        text: 'eth3'
                                    },
                                    series: [
                                        {
                                            ...config.series[0],
                                            data:  this.state['eth3'].rx
                                        },
                                        {
                                            ...config.series[1],
                                            data:  this.state['eth3'].tx
                                        },
                                    ]
                                }
                            }
                        />
                    </div>
                }
                {
                    <div className="wrapper-graphics">
                        <ReactHighstock
                            config={
                                {
                                    ...config,
                                    title: {
                                        text: 'eth4'
                                    },
                                    series: [
                                        {
                                            ...config.series[0],
                                            data:  this.state['eth4'].rx
                                        },
                                        {
                                            ...config.series[1],
                                            data:  this.state['eth4'].tx
                                        },
                                    ]
                                }
                            }
                        />
                    </div>
                }
                {
                    <div className="wrapper-graphics">
                        <ReactHighstock
                            config={
                                {
                                    ...config,
                                    title: {
                                        text: 'eth5-master'
                                    },
                                    series: [
                                        {
                                            ...config.series[0],
                                            data:  this.state['eth5-master'].rx
                                        },
                                        {
                                            ...config.series[1],
                                            data: this.state['eth5-master'].tx
                                        },
                                    ]
                                }
                            }
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Graphics;
