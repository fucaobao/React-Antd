/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/12
 * Time: 13:39
 */

import React from 'react'
import { Button, Notification, Icon, Select } from 'antd'

export default class myNotification extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            placement: 'topRight'
        }
    }

    openNotification(){
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
    }
    openNotificationIcon(){
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
    }
    openNotificationStyle(){
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            style: {
                width: 600,
                marginLeft: 335 - 600,//Notification默认宽度335px，在右上角
            }
        })
    }
    openNotificationDuration(){
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 0,//默认4.5秒
        })
    }
    onChange = (val) => {
        this.setState({
            placement: val
        })
    }
    openNotificationPlacement = ()=> {
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: this.state.placement
        })
    }

    openNotificationWithBtn = ()=> {
        const key = `open${Date.now()}`;
        const btnClick = ()=> {
            Notification.close(key);
        }
        Notification.open({
            message: 'Notification Title',
            description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn: (<Button type="primary" size="small" onClick={btnClick}>
                Confirm
            </Button>),
            key: key,
            onClose: () => {
                console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
            },
        });
    }
    openNotificationWithIcon = (type) => {
        Notification[type]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }
    render(){
        const { Option } = Select;
        const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        return (
            <div className="notification">
                <div className="notification-basic">
                    <h3>最简单的用法，4.5 秒后自动关闭</h3>
                    <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
                </div>
                <div className="notification-custom-icon">
                    <h3>图标可以被自定义</h3>
                    <Button type="primary" onClick={this.openNotificationIcon}>Open the notification box</Button>
                </div>
                <div className="notification-custom-style">
                    <h3>使用 style 和 className 来定义样式</h3>
                    <Button type="primary" onClick={this.openNotificationStyle}>Open the notification box</Button>
                </div>
                <div className="notification-duration">
                    <h3>自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可</h3>
                    <Button type="primary" onClick={this.openNotificationDuration}>Open the notification box</Button>
                </div>
                <div className="notification-placement">
                    <h3>可以设置通知从右上角、右下角、左下角、左上角弹出</h3>
                    <Select defaultValue="topRight" onChange={this.onChange} style={{width: 120, marginRight: 10}}>
                        {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                    </Select>
                    <Button type="primary" onClick={this.openNotificationPlacement}>Open the notification box</Button>
                </div>
                <div className="notification-with-btn">
                    <h3>自定义关闭按钮的样式和文字</h3>
                    <Button type="primary" onClick={this.openNotificationWithBtn}>Open the notification box</Button>
                </div>
                <div className="notification-with-icon">
                    <h3>通知提醒框左侧有图标</h3>
                    <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
                    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
                    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
                </div>
            </div>
        )
    }
}