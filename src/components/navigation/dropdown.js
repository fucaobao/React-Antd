/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/15
 * Time: 17:20
 */

import React from 'react'
import {Dropdown,Menu,Icon,Button} from 'antd'

export default class myDropdown extends React.Component {
    constructor(props){
        super(props)
    }

    menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
            </Menu.Item>
        </Menu>
    )
    submenu = (
        <Menu>
            <Menu.Item>1st menu item</Menu.Item>
            <Menu.Item>2nd menu item</Menu.Item>
            <Menu.SubMenu title="sub menu">
                <Menu.Item>3d menu item</Menu.Item>
                <Menu.Item>4th menu item</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-basic">
                    <h3>最简单的下拉菜单</h3>
                    <Dropdown overlay={this.menu}>
                        <a className="ant-dropdown-link" href="javascript:void(0)">
                            Hover me <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
                <div className="dropdown-sub-menu">
                    <h3>传入的菜单里有多个层级</h3>
                    <Dropdown overlay={this.submenu}>
                        <a className="ant-dropdown-link" href="javascript:void(0)">
                            Cascading menu <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
                <div className="dropdown-placement">
                    <h3>支持 6 个弹出位置</h3>
                    <Dropdown overlay={this.menu} placement="bottomLeft">
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={this.menu} placement="bottomCenter">
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={this.menu} placement="bottomRight">
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <br />
                    <Dropdown overlay={this.menu} placement="topLeft">
                        <Button>topLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={this.menu} placement="topCenter">
                        <Button>topCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={this.menu} placement="topRight">
                        <Button>topRight</Button>
                    </Dropdown>
                </div>
            </div>
        )
    }
}