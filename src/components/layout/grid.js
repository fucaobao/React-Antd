/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/10
 * Time: 16:59
 */
import React from 'react'
import { Row, Col } from 'antd';
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

export default class myGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="grid">
                <div className="grid-basic">
                    <h3>基础栅格</h3>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                </div>
                <div className="grid-flex-align">
                    <p>Align Top</p>
                    <Row type="flex" justify="center" align="top">
                        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                    </Row>

                    <p>Align Center</p>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                    </Row>

                    <p>Align Bottom</p>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                        <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
                    </Row>
                </div>
            </div>
        )
    }
}