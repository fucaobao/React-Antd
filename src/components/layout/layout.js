/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/10
 * Time: 18:05
 */
import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout

export default class myLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="layout">
                <div className="layout-basic">
                    <h3>基础布局</h3>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout>
                        <Header>Header</Header>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Content>Content</Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout>
                        <Header>Header</Header>
                        <Layout>
                            <Content>Content</Content>
                            <Sider>Sider</Sider>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout>
                        <Sider>Sider</Sider>
                        <Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>
                </div>
            </div>
        )
    }
}