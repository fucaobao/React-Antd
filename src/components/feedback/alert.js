/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/11
 * Time: 16:36
 */
import React from 'react'
import { Alert } from 'antd';

// 结尾组件
export default class myAlert extends React.Component {
    constructor(props) {
        super(props)
    }
    onClose = (e) => {
        console.log(e, '我关闭了')
    }
    render() {
        return (
            <div className="alert">
                <div className="alert-banner">
                    <h3>Alert 顶部公告</h3>
                    <Alert message="Warning text" banner />
                    <br />
                    <Alert message="Very long warning text warning text text text text text text text" banner closable />
                    <br />
                    <Alert showIcon={false} message="Warning text without icon" banner />
                    <br />
                    <Alert type="error" message="Error text" banner />
                </div>
                <div className="alert-basic">
                    <h3>Alert 基本用法</h3>
                    <Alert message="Success Text" type="success" />
                </div>
                <div className="alert-close">
                    <h3>Alert 显示关闭按钮，点击可关闭警告提示</h3>
                    <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                       type="warning"
                       closable
                       onClose={this.onClose} />
                    <Alert message="Error Text"
                       description="Error Description Error Description Error Description Error Description Error Description Error Description"
                       type="error"
                       closable
                       onClose={this.onClose} />
                </div>
                <div className="alert-close-text">
                    <h3>Alert 可以自定义关闭，自定义的文字会替换原先的关闭 Icon</h3>
                    <Alert message="Info Text" type="info" closeText="Close Now" />
                </div>
                <div className="alert-description">
                    <h3>Alert 含有辅助性文字介绍的警告提示</h3>
                    <Alert
                        message="Success Text"
                        description="Success Description Success Description Success Description"
                        type="success" />
                    <Alert
                        message="Info Text"
                        description="Info Description Info Description Info Description Info Description"
                        type="info" />
                    <Alert
                        message="Warning Text"
                        description="Warning Description Warning Description Warning Description Warning Description"
                        type="warning" />
                    <Alert
                        message="Error Text"
                        description="Error Description Error Description Error Description Error Description"
                        type="error"  />
                </div>
                <div className="alert-icon">
                    <h3>Alert 可口的图标让信息类型更加醒目</h3>
                    <Alert message="Success Tips" type="success" showIcon />
                    <Alert message="Informational Notes" type="info" showIcon />
                    <Alert message="Warning" type="warning" showIcon />
                    <Alert message="Error" type="error" showIcon />
                    <Alert
                        message="success tips"
                        description="Detailed description and advices about successful copywriting."
                        type="success"
                        showIcon />
                    <Alert
                        message="Informational Notes"
                        description="Additional description and informations about copywriting."
                        type="info"
                        showIcon />
                    <Alert
                        message="Warning"
                        description="This is a warning notice about copywriting."
                        type="warning"
                        showIcon />
                    <Alert
                        message="Error"
                        description="This is an error message about copywriting."
                        type="error"
                        showIcon />
                </div>
                <div className="alert-style">
                    <h3>Alert 共有四种样式 success、info、warning、error</h3>
                    <Alert message="Success Text" type="success" />
                    <Alert message="Info Text" type="info" />
                    <Alert message="Warning Text" type="warning" />
                    <Alert message="Error Text" type="error" />
                </div>
            </div>
        )
    }
}