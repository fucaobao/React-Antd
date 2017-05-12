/**
 *
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

/*import './css/main.css'
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'*/

// 引入单个页面（包括嵌套的子页面）
//sub1 --- BEGIN
import myButton from './components/general/button'
//sub1 --- END

//sub2 --- BEGIN
import myGrid from './components/layout/grid'
import myLayout from './components/layout/layout.js'
//sub2 --- END

//sub3 --- BEGIN
//sub3 --- END

//sub4 --- BEGIN
import myForm from './components/dataentry/form.js'
//sub4 --- END

//sub5 --- BEGIN
import myCard from './components/datadisplay/card.js'
import myTable from './components/datadisplay/table.js'
import myCalendar from './components/datadisplay/calendar.js'
import myChart from './components/datadisplay/chart.js'
//sub5 --- END

//sub6 --- BEGIN
import myAlert from  './components/feedback/alert'
import myModal from  './components/feedback/modal'
import MyMessage from  './components/feedback/message'
import myNotification from './components/feedback/notification'
import myProgress from './components/feedback/progress'
import myPopconfirm from './components/feedback/popconfirm'
import mySpin from './components/feedback/spin'
//sub6 --- END

//sub7 --- BEGIN
import myFocus from './components/other/foucs.js'
//sub7 --- END

const ACTIVE = { color: 'red' }

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'wangjp'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='./src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline">
                        <SubMenu key="sub1" title={<span><Icon type="folder" /><span>General</span></span>}>
                            <Menu.Item key="101"><Link to="/myButton">Button 按钮</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="folder" /><span>Layout</span></span>}>
                            <Menu.Item key="201"><Link to="/myGrid">Grid 栅格</Link></Menu.Item>
                            <Menu.Item key="202"><Link to="/myLayout">Layout 布局</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="folder" /><span>Navigation</span></span>}>
                            <Menu.Item key="301"><Link to="/myAffix">Affix 固钉</Link></Menu.Item>
                            <Menu.Item key="302"><Link to="/myBreadcrumb">Breadcrumb 面包屑</Link></Menu.Item>
                            <Menu.Item key="303"><Link to="/myBackTop">BackTop 回到顶部</Link></Menu.Item>
                            <Menu.Item key="304"><Link to="/myDropdown">Dropdown 下拉菜单</Link></Menu.Item>
                            <Menu.Item key="305"><Link to="/myMenu">Menu 导航菜单</Link></Menu.Item>
                            <Menu.Item key="306"><Link to="/myPagination">Pagination 分页</Link></Menu.Item>
                            <Menu.Item key="307"><Link to="/mySteps">Steps 步骤条</Link></Menu.Item>
                            <Menu.Item key="308"><Link to="/myTabs">Tabs 标签</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="folder" /><span>Data Entry</span></span>}>
                            <Menu.Item key="401"><Link to="/myAutoComplete">AutoComplete 自动完成</Link></Menu.Item>
                            <Menu.Item key="402"><Link to="/myCascader">Cascader 级联选择</Link></Menu.Item>
                            <Menu.Item key="403"><Link to="/myCheckbox">Checkbox 多选框</Link></Menu.Item>
                            <Menu.Item key="404"><Link to="/myDatePicker">DatePicker 日期选择框</Link></Menu.Item>
                            <Menu.Item key="405"><Link to="/myForm">Form 表单</Link></Menu.Item>
                            <Menu.Item key="406"><Link to="/myInput">Input 输入框</Link></Menu.Item>
                            <Menu.Item key="407"><Link to="/myInputNumber">InputNumber 数字输入框</Link></Menu.Item>
                            <Menu.Item key="408"><Link to="/myMention">Mention 提及</Link></Menu.Item>
                            <Menu.Item key="409"><Link to="/myRadio">Radio 单选框</Link></Menu.Item>
                            <Menu.Item key="410"><Link to="/myRate">Rate 评分</Link></Menu.Item>
                            <Menu.Item key="411"><Link to="/mySelect">Select 选择器</Link></Menu.Item>
                            <Menu.Item key="412"><Link to="/mySlider">Slider 滑动输入条</Link></Menu.Item>
                            <Menu.Item key="413"><Link to="/mySwitch">Switch 开关</Link></Menu.Item>
                            <Menu.Item key="414"><Link to="/myTransfer">Transfer 穿梭框</Link></Menu.Item>
                            <Menu.Item key="415"><Link to="/myTimePicker">TimePicker 时间选择框</Link></Menu.Item>
                            <Menu.Item key="416"><Link to="/myTreeSelect">TreeSelect 树选择</Link></Menu.Item>
                            <Menu.Item key="417"><Link to="/myUpload">Upload 上传</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="folder" /><span>Data Display</span></span>}>
                            <Menu.Item key="501"><Link to="/myBadge">Badge 徽标数</Link></Menu.Item>
                            <Menu.Item key="502"><Link to="/myCalendar">Calendar 日历</Link></Menu.Item>
                            <Menu.Item key="503"><Link to="/myCard">Card 卡片</Link></Menu.Item>
                            <Menu.Item key="504"><Link to="/myCarousel">Carousel 走马灯</Link></Menu.Item>
                            <Menu.Item key="505"><Link to="/myCollapse">Collapse 折叠面板</Link></Menu.Item>
                            <Menu.Item key="506"><Link to="/myPopover">Popover 气泡卡片</Link></Menu.Item>
                            <Menu.Item key="507"><Link to="/myTooltip">Tooltip 文字提示</Link></Menu.Item>
                            <Menu.Item key="508"><Link to="/myTable">Table 表格</Link></Menu.Item>
                            <Menu.Item key="509"><Link to="/myTag">Tag 标签</Link></Menu.Item>
                            <Menu.Item key="510"><Link to="/myTimeline">Timeline 时间轴</Link></Menu.Item>
                            <Menu.Item key="511"><Link to="/myTree">Tree 树形控件</Link></Menu.Item>
                            <Menu.Item key="512"><Link to="/myChart">Charts 图表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="folder" /><span>Feedback</span></span>}>
                            <Menu.Item key="601"><Link to="/myAlert">Alert 警告提示</Link></Menu.Item>
                            <Menu.Item key="602"><Link to="/myModal">Modal 对话框</Link></Menu.Item>
                            <Menu.Item key="603"><Link to="/myMessage">Message 全局提示</Link></Menu.Item>
                            <Menu.Item key="604"><Link to="/myNotification">Notification 通知提醒框</Link></Menu.Item>
                            <Menu.Item key="605"><Link to="/myProgress">Progress 进度条</Link></Menu.Item>
                            <Menu.Item key="606"><Link to="/myPopconfirm">Popconfirm 气泡确认框</Link></Menu.Item>
                            <Menu.Item key="607"><Link to="/mySpin">Spin 加载中</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" title={<span><Icon type="folder" /><span>Other</span></span>}>
                            <Menu.Item key="701"><Link to="/myAnchor">Anchor 锚点</Link></Menu.Item>
                            <Menu.Item key="702"><Link to="/myLocaleProvider">LocaleProvider 国际化</Link></Menu.Item>
                            <Menu.Item key="703"><Link to="/myFocus">Focus 关注</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute component={myButton} />
{/*            <Route path="myButton" component={myButton} />
            <Route path="myGrid" component={myGrid} />
            <Route path="myLayout" component={myLayout} />
            <Route path="myChart" component={myChart} />
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myFocus" component={myFocus} />
            <Route path="myCard" component={myCard} />*/}
            {/*sub1*/}
            <Route path="myButton" component={myButton} />
            {/*sub2*/}
            <Route path="myGrid" component={myGrid} />
            <Route path="myLayout" component={myLayout} />
            {/*sub3*/}
            <Route path="myAffix" component={myFocus} />
            <Route path="myBreadcrumb" component={myFocus} />
            <Route path="myBackTop" component={myFocus} />
            <Route path="myDropdown" component={myFocus} />
            <Route path="myMenu" component={myFocus} />
            <Route path="myPagination" component={myFocus} />
            <Route path="mySteps" component={myFocus} />
            <Route path="myTabs" component={myFocus} />
            {/*sub4*/}
            <Route path="myAutoComplete" component={myFocus} />
            <Route path="myCascader" component={myFocus} />
            <Route path="myCheckbox" component={myFocus} />
            <Route path="myDatePicker" component={myFocus} />
            <Route path="myForm" component={myForm} />
            <Route path="myInput" component={myFocus} />
            <Route path="myInputNumber" component={myFocus} />
            <Route path="myMention" component={myFocus} />
            <Route path="myRadio" component={myFocus} />
            <Route path="myRate" component={myFocus} />
            <Route path="mySelect" component={myFocus} />
            <Route path="mySlider" component={myFocus} />
            <Route path="mySwitch" component={myFocus} />
            <Route path="myTransfer" component={myFocus} />
            <Route path="myTimePicker" component={myFocus} />
            <Route path="myTreeSelect" component={myFocus} />
            <Route path="myUpload" component={myFocus} />
            {/*sub5*/}
            <Route path="myBadge" component={myFocus} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myCard" component={myCard} />
            <Route path="myCarousel" component={myFocus} />
            <Route path="myCollapse" component={myFocus} />
            <Route path="myPopover" component={myFocus} />
            <Route path="myTooltip" component={myFocus} />
            <Route path="myTable" component={myTable} />
            <Route path="myTag" component={myFocus} />
            <Route path="myTimeline" component={myFocus} />
            <Route path="myTree" component={myFocus} />
            <Route path="myChart" component={myChart} />
            {/*sub6*/}
            <Route path="myAlert" component={myAlert} />
            <Route path="myModal" component={myModal} />
            <Route path="myMessage" component={MyMessage} />
            <Route path="myNotification" component={myNotification} />
            <Route path="myProgress" component={myProgress} />
            <Route path="myPopconfirm" component={myPopconfirm} />
            <Route path="mySpin" component={mySpin} />
            {/*sub7*/}
            <Route path="myAnchor" component={myFocus} />
            <Route path="myLocaleProvider" component={myFocus} />
            <Route path="myFocus" component={myFocus} />
        </Route>
    </Router>
), document.getElementById('app'));


