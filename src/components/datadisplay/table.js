import React from 'react'
import {Table,Menu,Badge,Dropdown,Icon} from 'antd'

export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []

        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `汪同学${i+1}`,
                age: `${18+i}`,
                address: `深南大道平安科技大厦${1099+i}号`,
                remark: 'https://fucaobao.github.io/',
                operate: '详情'
            })
        }

        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    onExpand = (expanded, record) => {
        console.log(expanded);
        console.log(record);
    }

    expandedRowRender = () => {
        const menu = (
            <Menu>
                <Menu.Item>
                    操作 1
                </Menu.Item>
                <Menu.Item>
                    操作 2
                </Menu.Item>
            </Menu>
        );
        const columns = [{
                title: '日期',
                dataIndex: 'date',
                key: 'date'
            }, {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '状态',
                key: 'state',
                render: () => <span><Badge status="success"/>完成</span>
            }, {
                title: '版本号',
                dataIndex: 'upgradeNum',
                key: 'upgradeNum'
            }, {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <span className={'table-operation'}>
                        <a href="javascript:void(0);">暂停  </a>
                        <a href="javascript:void(0);">停止  </a>
                        <Dropdown overlay={menu}>
                          <a href="javascript:void(0);">
                            更多 <Icon type="down" />
                          </a>
                        </Dropdown>
                    </span>
                )
            }];

        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
              key: i,
              date: '2014-12-24 23:12:00',
              name: '京享街',
              upgradeNum: '当前版本号: 56',
          });
        }
        return (
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        );
    }
    render() {
        const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">github</a>
            }
        }, {
            title: '操作',
            width: '20%',
            dataIndex: 'operate',
            render(text) {
                return <a href="javascript:void(0);" target="_blank">{text}</a>
            },
            onCellClick : (record, event) => {
                console.log(record);
                console.log(event);
            }
        }]

        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} onExpand={this.onExpand} expandedRowRender={this.expandedRowRender}/>
        )
    }
}
