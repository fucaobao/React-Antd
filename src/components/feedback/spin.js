/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/12
 * Time: 16:45
 */

import React from 'react'
import { Spin, Alert } from 'antd'

export default class mySpin extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="spin">
                <div className="spin-basic">
                    <h3>一个简单的 loading 状态</h3>
                    <Spin />
                </div>
                <div className="spin-inside">
                    <h3>放入一个容器中</h3>
                    <div className="example">
                        <Spin />
                    </div>
                </div>
                <div className="spin-size">
                    <h3>小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载</h3>
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                </div>
                <div className="spin-tip">
                    <h3>自定义描述文案</h3>
                    <Spin tip="Loading...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info" />
                    </Spin>
                </div>
            </div>
        )
    }
}