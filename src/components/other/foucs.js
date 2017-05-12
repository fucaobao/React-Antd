import React from 'react'

// 结尾组件
export default class myFocus extends React.Component {
    constructor(props) {
        super(props)   
    }
    render() {
        return (
            <div className="ani-box">
                <img src="./src/assets/images/face.jpg" width="100" className="animated fadeInUp lastPic" />
                {/*<span className="animated flipInX ege">我的头像</span>*/}
                <a href="https://www.github.com/fucaobao" target="_blank" className="animated flipInX ege">fucaobao</a>
            </div>
        )
    }       
}