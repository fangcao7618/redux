import React, {Component} from 'react';
import axios from 'axios';

class About extends Component {
    componentWillMount() {
        let gpApi = '/api';
        let pingdingshanApi = '/pingdingshan';
        if (process.env.NODE_ENV === 'production') {
            gpApi = 'https://test-toa-web-h5-stg1.pingan.com.cn:34943/yizhangtong/api/gp'; //https://m.pingan.com/yizhangtong/api/gp
            pingdingshanApi = 'https://test1-pdsb-fbtoamc.pingan.com.cn:35017';
        }
        // axios({
        //     method: 'post',
        //     url: gpApi,
        //     data: {
        //         operationType: 'annualAccount',
        //         requestData: '[{"osType":"1","deviceId":"D14742643800241211","appVersion":"4.9.9.1","appClient' +
        //                 'Id":"C14742643800331884","osVersion":"8.1","sessionId":"S24e6cc30-a693-48cd-8fee' +
        //                 '-b3f813fac27b","longitude":"-122.406417","latitude":"37.785834","reqTracer":"D14' +
        //                 '7426438002412111B611853-73DD-44A0-B1D0-EB82937408C5","dpi":"750x1334"},{"shareNo' +
        //                 '":"4DAE1F55BDE1B1E30989B9C3E8B231BBAE3E8D798082BED97D5102BAF35818A8"}]'
        //     }
        // }).then((res) => {
        //     console.log('axios annualAccount');
        //     console.log(res);
        // });
        fetch(gpApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({operationType: 'annualAccount', requestData: '[{"osType":"1","deviceId":"D14742643800241211","appVersion":"4.9.9.1","appClient' +
            'Id":"C14742643800331884","osVersion":"8.1","sessionId":"S24e6cc30-a693-48cd-8fee' +
            '-b3f813fac27b","longitude":"-122.406417","latitude":"37.785834","reqTracer":"D14' +
            '7426438002412111B611853-73DD-44A0-B1D0-EB82937408C5","dpi":"750x1334"},{"shareNo' +
            '":"4DAE1F55BDE1B1E30989B9C3E8B231BBAE3E8D798082BED97D5102BAF35818A8"}]'})
        }).then(response => {
            return response.json();
        }).then((values) => {
            console.log(values);
        });

        axios({method: 'post', url: `${pingdingshanApi}/btoa/portal/marketing/operation?operation=activecenter`}).then((res) => {
            console.log('axios activecenter');
            // console.log(res);
            return res;
        }).then((values) => {
            console.log('axios activecenter values');
            console.log(values);
        });

        fetch(`${pingdingshanApi}/btoa/portal/marketing/operation?operation=activecenter`).then(response => {
            console.log('fetch activecenter');
            // console.log(response);
            return response.json();
        }).then((values) => {
            console.log('fetch activecenter values');
            console.log(values);
            // this.setState({     proposals: values.toString() });
        });
    };
    render() {
        return (
            <div className="about">About {process.env.NODE_ENV}{process.env.REACT_APP_SECRET_CODE}{process.env.REACT_APP_FOO}
            </div>
        )
    }
}

export default About;