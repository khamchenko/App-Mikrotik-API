import constants from '../../constants'
import _ from 'lodash';

const initialState = {
    data: {},
    isLoading: false,
    error: null,
};

const InterfaceReduser = (state = initialState, action) => {
    switch(action.type) {
        case constants.LOAD_TRAFFIC:
            let data = {}
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

            if (Object.keys(state.data).length == 0) {
                _.forEach(action.payload, (elem) => {
                    config.title.text = elem.name;
                    config.series[0].data = [[Number(elem.date), Number(elem.rx)]];
                    config.series[1].data = [[Number(elem.date), Number(elem.tx)]];
                    data[elem.name] = config;
                })
            } else {
                _.forEach(action.payload, (elem) => {
                    let value = state.data[elem.name].series;
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
                    config.title.text = elem.name;
                    if (value[0].data.length > 50) {
                        config.series[0].data = [...((value[0].data).slice(1)), [Number(elem.date), Number(elem.rx)]];
                        config.series[1].data = [...((value[1].data).slice(1)), [Number(elem.date), Number(elem.tx)]];
                    } else {
                        config.series[0].data = [...value[0].data, [Number(elem.date), Number(elem.rx)]];
                        config.series[1].data = [...value[1].data, [Number(elem.date), Number(elem.tx)]];
                    }
                    data[elem.name] = config;
                })
            }
            return {
              ...state,
              data: data,
            };
            break;
        default:
            return state
    }
};

export default InterfaceReduser;
