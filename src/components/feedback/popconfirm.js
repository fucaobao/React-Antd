/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/12
 * Time: 16:24
 */

import React from 'react'
import { Popconfirm, Message, Button } from 'antd'

export default class myPopconfirm extends React.Component {
    constructor(props){
        super(props)
    }
    text = 'Are you sure delete this task?';

    confirm = ()=> {
        Message.info('Click on Yes.');
    }
    render(){
        return (
            <div className="popconfirm">
                <div className="popconfirm-placement">
                    <h3>位置有十二个方向。如需箭头指向目标元素中心，可以设置 arrowPointAtCenter</h3>
                    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                        <Popconfirm placement="topLeft" title={this.text} onConfirm={this.confirm} okText="确定" cancelText="取消" arrowPointAtCenter>
                            <Button>TL</Button>
                        </Popconfirm>
                        <Popconfirm placement="top" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No" arrowPointAtCenter>
                            <Button>Top</Button>
                        </Popconfirm>
                        <Popconfirm placement="topRight" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>TR</Button>
                        </Popconfirm>
                    </div>
                    <div style={{ width: 70, float: 'left' }}>
                        <Popconfirm placement="leftTop" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>LT</Button>
                        </Popconfirm>
                        <Popconfirm placement="left" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>Left</Button>
                        </Popconfirm>
                        <Popconfirm placement="leftBottom" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>LB</Button>
                        </Popconfirm>
                    </div>
                    <div style={{ width: 70, marginLeft: 304 }}>
                        <Popconfirm placement="rightTop" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>RT</Button>
                        </Popconfirm>
                        <Popconfirm placement="right" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>Right</Button>
                        </Popconfirm>
                        <Popconfirm placement="rightBottom" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>RB</Button>
                        </Popconfirm>
                    </div>
                    <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                        <Popconfirm placement="bottomLeft" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>BL</Button>
                        </Popconfirm>
                        <Popconfirm placement="bottom" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>Bottom</Button>
                        </Popconfirm>
                        <Popconfirm placement="bottomRight" title={this.text} onConfirm={this.confirm} okText="Yes" cancelText="No">
                            <Button>BR</Button>
                        </Popconfirm>
                    </div>
                </div>
            </div>
        )
    }
}