/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/12
 * Time: 15:32
 */

import React from 'react'
import { Progress, Button, Icon } from 'antd'
const ButtonGroup = Button.Group

export default class myProgress extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            percent: 0
        }
    }
    decline = () => {
        let percent = this.state.percent - 10;
        if(percent < 0) {
            percent = 0;
        }
        this.setState({
            percent:percent
        })
    }
    increase = () => {
        let percent = this.state.percent + 10;
        if(percent > 100) {
            percent = 100;
        }
        this.setState({
            percent:percent
        })
    }
    render() {
        return (
            <div className="progress">
                <div className="progress-circle-dynamic">
                    <h3>会动的进度条才是好进度条</h3>
                    <Progress type="circle" percent={this.state.percent} />
                    <ButtonGroup>
                        <Button onClick={this.decline} icon="minus" />
                        <Button onClick={this.increase} icon="plus" />
                    </ButtonGroup>
                </div>
                <div className="progress-circle-mini">
                    <h3>小一号的圈形进度</h3>
                    <Progress type="circle" percent={30} width={80} status="active" />
                    <Progress type="circle" percent={70} width={80} status="exception" />
                    <Progress type="circle" percent={100} width={80} status="success" />
                </div>
                <div className="progress-circle">
                    <h3>圈形的进度</h3>
                    <Progress type="circle" percent={75} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                </div>
                <div className="progress-dashboard">
                    <h3>仪表盘样式的进度条</h3>
                    <Progress type="dashboard" percent={75} />
                </div>
                <div className="progress-format">
                    <h3>format 属性指定格式</h3>
                    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                    <Progress type="circle" percent={100} format={() => 'Done'} />
                </div>
                <div className="progress-line-mini">
                    <h3>适合放在较狭窄的区域内</h3>
                    <div style={{ width: 170 }}>
                        <Progress percent={30} strokeWidth={5} />
                        <Progress percent={50} strokeWidth={5} status="active" />
                        <Progress percent={70} strokeWidth={5} status="exception" />
                        <Progress percent={100} strokeWidth={5} showInfo={false}/>
                    </div>
                </div>
            </div>
        )
    }
}