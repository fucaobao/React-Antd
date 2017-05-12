/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/11
 * Time: 17:22
 */
import React from 'react'
import { Modal, Button } from  'antd'
const confirm = Modal.confirm;

// 结尾组件
export default class myModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ModalText: 'Content of the modal dialog',
            visible: false,
            visibleFooter: false,
            loadingFooter: false,
            modal1Visible: false,
            modal2Visible: false
        };
    }
    showModal = () => {
        console.log('显示modal')
        this.setState({
             visible : true
        })
    }
    setModal1Visible = (modal1Visible) => {
        this.setState({ modal1Visible });
    }
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
    handleOk = () => {
        console.log('点击了确认')
        this.setState({
            ModalText: '对话框将在两秒后自动关闭',
            confirmLoading: true
        });
        setTimeout(()=>{
            this.setState({
                visible: false,
                confirmLoading: false
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('点击了关闭');
        this.setState({
            visible: false
        })
    }
    showConfirmPromise = () => {
        confirm({
            okText: 'OK了',
            cancelText: 'cancel了',
            title: '确定要删除吗?',
            content: '点击确定后，对话框将在1秒后自动关闭',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).then(() => console.log('操作成功')).catch(() => console.log('操作失败'));
            },
            onCancel() {
                console.log('onCancel');
            },
        });
    }
    showConfirm = () => {
        confirm({
            okText: 'OK了',
            cancelText: 'cancel了',
            title: '确定要删除吗?',
            content: '一些描述',
            onOk() {
                console.log('onOk');            },
            onCancel() {
                console.log('onCancel');
            },
        });
    }
    showModalFooter = () => {
        this.setState({
            visibleFooter:true
        })
    }
    handleOkFooter = () => {
        this.setState({
            loadingFooter:true
        })
        setTimeout(()=>{
            this.setState({
                visibleFooter:false,
                loadingFooter:false
            })
        }, 1000)
    }
    handleCancelFooter = () => {
        this.setState({
            visibleFooter:false,
            loadingFooter:false
        })
    }
    info = ()=> {
        Modal.info({
            title: '这是一条提示消息',
            content: (
               <div>
                   <p>一些信息...一些信息...</p>
                   <p>一些信息...一些信息...</p>
               </div>
            ),
            onOk() {},
        })
    }
    success = ()=> {
        const modal = Modal.success({
            title: '这是一条成功消息',
            content: '该对话框将在两秒后自动关闭',
            onOk() {},
        })
        setTimeout(()=>modal.destroy(), 2000);
    }
    error = ()=> {
        Modal.error({
            title: '这是一条错误消息',
            content: (
               <div>
                   <p>一些信息...一些信息...</p>
                   <p>一些信息...一些信息...</p>
               </div>
            ),
            onOk() {},
        })
    }
    warning = ()=> {
        Modal.warning({
            title: '这是一条警告消息',
            content: (
               <div>
                   <p>一些信息...一些信息...</p>
                   <p>一些信息...一些信息...</p>
               </div>
            ),
            onOk() {},
       })
    }
    render() {
        return (
            <div className="modal">
                <div className="modal-async">
                    <h3>Modal 点击确定后异步关闭对话框，例如提交表单</h3>
                    <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
                    <Modal title="Title of the modal dialog"
                           visible={this.state.visible}
                           onOk={this.handleOk}
                           confirmLoading={this.state.confirmLoading}
                           onCancel={this.handleCancel} >
                        <p>{this.state.ModalText}</p>
                    </Modal>
                </div>
                <div className="modal-confirm-promise">
                    <h3>Modal 使用 confirm() 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭</h3>
                    <Button onClick={this.showConfirmPromise}>
                        confirm-promise modal dialog
                    </Button>
                </div>
                <div className="modal-confirm">
                    <h3>Modal 使用 confirm() 可以快捷地弹出确认框</h3>
                    <Button onClick={this.showConfirm}>
                        confirmation modal dialog
                    </Button>
                </div>
                <div className="modal-footer">
                    <h3>Modal 更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
                        不需要默认确定取消按钮时，你可以把 footer 设为 null。</h3>
                    <Button type="primary" onClick={this.showModalFooter}>
                        Open modal dialog
                    </Button>
                    <Modal
                        visible={this.state.visibleFooter}
                        title="Title"
                        onOk={this.handleOkFooter}
                        onCancel={this.handleCancelFooter}
                        footer={[
                            <Button key="back" size="large" onClick={this.handleCancelFooter}>Return</Button>,
                            <Button key="submit" type="primary" size="large" loading={this.state.loadingFooter} onClick={this.handleOkFooter}>
                                Submit
                            </Button>,
                        ]}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
                <div className="modal-info">
                    <h3>Modal 各种类型的信息提示，只提供一个按钮用于关闭</h3>
                    <Button onClick={this.info}>Info</Button>
                    <Button onClick={this.success}>Success</Button>
                    <Button onClick={this.error}>Error</Button>
                    <Button onClick={this.warning}>Warning</Button>
                </div>
                <div className="modal-position">
                    <h3>Modal Modal 的 align 属性被移除，您可以直接使用style.top 或配合其他样式来设置对话框位置</h3>
                    <Button type="primary" onClick={() => this.setModal1Visible(true)}>Display a modal dialog at 20px to Top</Button>
                    <Modal
                        title="20px to Top"
                        style={{ top: 20 }}
                        visible={this.state.modal1Visible}
                        onOk={() => this.setModal1Visible(false)}
                        onCancel={() => this.setModal1Visible(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>
                    <br /><br />
                    <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
                    <Modal
                        title="Vertically centered modal dialog"
                        wrapClassName="vertical-center-modal"
                        visible={this.state.modal2Visible}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>
                </div>
            </div>
        )
    }
}