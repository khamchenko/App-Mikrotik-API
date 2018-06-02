import React, { Component } from 'react';
import _ from 'lodash';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';

import './Graphics.scss';

class Graphics extends Component {
    render() {
        const { traffic } = this.props;
        return (
            <div className="root-graphics">
                {
                    traffic['eth1-wan'] && <div className="wrapper-graphics-full">
                        <ReactHighstock  config={traffic['eth1-wan']}/>
                    </div>
                }
                {
                    traffic.bridge1 && <div className="wrapper-graphics-full">
                        <ReactHighstock  config={traffic.bridge1}/>
                    </div>
                }
                {
                    traffic.eth2 && <div className="wrapper-graphics">
                        <ReactHighstock  config={traffic.eth2}/>
                    </div>
                }
                {
                    traffic.eth3 && <div className="wrapper-graphics">
                        <ReactHighstock  config={traffic.eth3}/>
                    </div>
                }
                {
                    traffic.eth4 && <div className="wrapper-graphics">
                        <ReactHighstock  config={traffic.eth4}/>
                    </div>
                }
                {
                    traffic['eth5-master'] && <div className="wrapper-graphics">
                        <ReactHighstock  config={traffic['eth5-master']}/>
                    </div>
                }
            </div>
        )
    }
}

export default Graphics;
