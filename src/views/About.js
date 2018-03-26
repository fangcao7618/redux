import React, {Component} from 'react';
import axios from 'axios';
import '../mock/mock';
import logo from '../img/logo.svg';
import '../App.css';
import '../style/your-theme-file.less';
import { DatePicker,DatePickerView,Button,Icon } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';

const ContactCard = ({contact}) => {
    return(
       <div>
            <div className="col-xs-4 col-sm-3">
                <img src={contact.photo} alt={contact.name + ' ' + contact.surname} className="img-responsive img-circle" />
            </div>
            <div className="col-xs-8 col-sm-9">
                <span>{contact.name + ' ' + contact.surname}</span><br/>
                
                <span title={contact.address}></span>
                <span>{contact.address}</span><br/>
                
                <span title={contact.phone}></span>
                <span>{contact.phone}</span><br/>
                
                <span title={contact.email}></span>
                <span>{contact.email}</span><br/>
            </div>
            <div className="clearfix"></div>
       </div>
        
    )
  }
class About extends Component {
    constructor(props){
        super(props);
        this.state={
            blogList:[],
        };
    }
    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }
    json(response) {
        return response.json()
    }
    componentWillMount() {
        // let gpApi = '/api';
        // let pingdingshanApi = '/pingdingshan';
        let waiApi = process.env.NODE_ENV === 'development'
        ? '/contacts'
        : 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
        if (process.env.NODE_ENV === 'production') {
            // gpApi = 'https://test-toa-web-h5-stg1.pingan.com.cn:34943/yizhangtong/api/gp'; //https://m.pingan.com/yizhangtong/api/gp
            // pingdingshanApi = 'https://test1-pdsb-fbtoamc.pingan.com.cn:35017';
        }
        // fetch(gpApi, {
        //     mode: 'cors',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         operationType: 'annualAccount',
        //         requestData: '[{"osType":"1","deviceId":"D14742643800241211","appVersion":"4.9.9.1","appClient' +
        //                 'Id":"C14742643800331884","osVersion":"8.1","sessionId":"S24e6cc30-a693-48cd-8fee' +
        //                 '-b3f813fac27b","longitude":"-122.406417","latitude":"37.785834","reqTracer":"D14' +
        //                 '7426438002412111B611853-73DD-44A0-B1D0-EB82937408C5","dpi":"750x1334"},{"shareNo' +
        //                 '":"4DAE1F55BDE1B1E30989B9C3E8B231BBAE3E8D798082BED97D5102BAF35818A8"}]'
        //     })
        // }).then(response => {
        //     return response.json();
        // }).then((values) => {
        //     console.log(values);
        // })
        // .catch(function (err) {
        //     console.log("Fetch错误:" + err);
        // });

        // fetch(`${pingdingshanApi}/btoa/portal/marketing/operation?operation=activecenter`, {mode: 'cors'}).then(response => {
        //     return response.json();
        // }).then((values) => {
        //     console.log(values);
        //     this.setState(prevState => ({
        //         blogList: [...values.data.attributes.online]
        //     }));
        //     console.log(this.state.blogList);
        // })
        // .catch(function (err) {
        //     console.log("Fetch错误:" + err);
        // });
        // fetch(waiApi, {mode: 'cors',credentials:'*'})// include
        // .then(this.status)
        // .then(this.json)
        // .then(function (data) {
        //     this.setState(prevState => ({
        //         blogList: [...data.contacts]
        //     }));
        //     console.log("请求成功，JSON解析后的响应数据为:",data);
        // })
        // .catch(function (error) {
        //     console.log(`请求url:${waiApi}出错！Fetch错误:${error}`);
        // });

        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: '*',
            cache: 'default',
            dataType: 'json'
        };

        axios(waiApi, init)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          this.setState(prevState => ({
            blogList: [...data.contacts]
          }))
        }).catch(err => {
            console.log(err);
          });

        // fetch(waiApi,init)
        // .then(response => response)
        // .then(data => this.setState(prevState => ({
        //     blogList: [...data.contacts]
        // })))
    };
    render() {
        const {blogList} = this.state;
        return (
            <div className="about">About {process.env.NODE_ENV}{process.env.REACT_APP_SECRET_CODE}{process.env.REACT_APP_FOO}
            <DatePicker
            mode="date"
            title="选择器标题"
            extra="Optional"
            value={this.state.date}
            onChange={date => this.setState({ date })}
          >
          <input type="text" />
          </DatePicker>
          {/*
      支持内置的 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading' 这些 icon 类型*/}
      <Icon key="0" type="check" />
      <Icon key="1" type="step-forward" />
      <Icon key="2" type="search" style={{ marginRight: '0.32rem' }} />,
      <Icon key="3" type="ellipsis" />
      <Icon key="4" type="check-circle" size="md" color="red" />
      <Icon key="5" type={'\ue601'} size={55} />
      <Icon key="6" type={logo} size={55} />
      <Icon key="7" type="loading" size={55} />
      <Icon key="8" type="close" size={55} />
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Button type="primary">Button</Button>
          <div className="sub-title">Start datetime</div>
          <DatePickerView
            value={this.state.value}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
          <div className="sub-title">End datetime</div>
          <DatePickerView
            locale={enUs}
            value={this.state.value}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
          />
            <div>
                <span>我要先渲染</span>
                {
                    blogList && blogList.map(
                        (contact) => 
                        <div key={contact.email}>
                            <ContactCard contact={contact} />
                        </div>
                    )
                }
            </div>
            </div>
        )
    }
}

export default About;