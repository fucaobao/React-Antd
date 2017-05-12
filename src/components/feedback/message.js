/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/12
 * Time: 10:34
 */

import React from 'react'
import { Message,Button } from 'antd'

export  default class myMessage extends React.Component {
    constructor(props){
        super(props)
    }
    success() {
        Message.success('这是一条成功的消息，并且将在3秒后自动消失', 3);
    }
    info() {
        Message.info('这是一条普通的消息');
    }
    loading() {
        const hide = Message.loading('loading');
        setTimeout(hide, 2500);
    }

    successOther() {
        Message.success('这是一条成功的消息，并且将在3秒后自动消失', 3);
    }
    errorOther() {
        Message.error('这是一条失败的消息，并且将在3秒后自动消失', 3);
    }
    waringOther() {
        Message.warning('这是一条警告的消息，并且将在3秒后自动消失', 3);
    }
    render() {
        return (
            <div className="message">
                <div className="message-duration">
                    <h3>自定义时长 3s，默认时长为 1.5s。</h3>
                    <Button onClick={this.success}>Customized display duration</Button>
                </div>
                <div className="message-info">
                    <h3>信息提醒反馈</h3>
                    <Button type="primary" onClick={this.info}>Display normal message</Button>
                </div>
                <div className="message-loading">
                    <h3>进行全局 loading，异步自行移除</h3>
                    <Button type="dashed" onClick={this.loading}>Display a loading indicator</Button>
                </div>
                <div className="message-other">
                    <h3>包括成功、失败、警告</h3>
                    <Button type="primary" onClick={this.successOther}>成功</Button>
                    <Button type="danger" onClick={this.errorOther}>失败</Button>
                    <Button onClick={this.waringOther}>警告</Button>
                </div>
            </div>
        )
    }
}