/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/10
 * Time: 13:46
 */
import React from 'react'
import {  Button, Menu, Dropdown, Icon, Radio  } from 'antd';
const ButtonGroup = Button.Group;

export default class myButton extends React.Component {
    menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    )
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            iconLoading: false,
            size: 'default'
        }
    }
    handleMenuClick = (e) => {
        console.log('click', e);
    }
    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        return (
            <div className="btn">
                <div className="btn-basic">
                    <h3>按钮类型</h3>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
                <div className="btn-group">
                    <h3>按钮组合</h3>
                    <h4>Basic</h4>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button type="primary">OK</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>L</Button>
                        <Button disabled>M</Button>
                        <Button disabled>R</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary">L</Button>
                        <Button>M</Button>
                        <Button>M</Button>
                        <Button type="dashed">R</Button>
                    </ButtonGroup>
                    <h4>With Icon</h4>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup size="large">
                        <Button type="primary" icon="cloud" />
                        <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>
                </div>
                <div className="btn-disabled">
                    <h3>不可用状态</h3>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>Primary(disabled)</Button>
                    <br />
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                    <br />
                    <Button>Ghost</Button>
                    <Button disabled>Ghost(disabled)</Button>
                    <br />
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>Dashed(disabled)</Button>
                </div>
                <div className="btn-ghost" style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                    <h3>幽灵按钮</h3>
                    <Button type="primary" ghost>Primary</Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>Dashed</Button>
                    <Button type="danger" ghost>danger</Button>
                </div>
                <div className="btn-icon">
                    <h3>图标按钮</h3>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">Search</Button>
                </div>
                <div className="btn-loading">
                    <h3>加载中状态</h3>
                    <Button type="primary" loading>
                      Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                      Loading
                    </Button>
                    <br />
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                      Click me!
                    </Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                      Click me!
                    </Button>
                    <br />
                    <Button shape="circle" loading />
                    <Button type="primary" shape="circle" loading />
                  </div>
                <div className="btn-menu">
                    <h3>按钮组合</h3>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown overlay={this.menu}>
                        <Button>
                            more <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                <div className="btn-size">
                    <h3>按钮大小</h3>
                    <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br /><br />
                    <Button type="primary" shape="circle" icon="download" size={this.state.size} />
                    <Button type="primary" icon="download" size={this.state.size}>Download</Button>
                    <Button type="primary" size={this.state.size}>Normal</Button>
                    <br />
                    <Button.Group size={this.state.size}>
                        <Button type="primary">
                            <Icon type="left" />Backward
                        </Button>
                        <Button type="primary">
                            Forward<Icon type="right" />
                        </Button>
                    </Button.Group>
                </div>
            </div>
        )
    }
}

