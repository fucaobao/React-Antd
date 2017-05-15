/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/15
 * Time: 16:56
 */

import React from 'react'
import {BackTop} from 'antd'

export default class myBackTop extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="backtop">
                <div className="backtop-basic">
                    <h3>最简单的用法</h3>
                    <BackTop />
                    Scroll down to see the bottom-right
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                    button.
                </div>
                <div className="backtop-custom">
                    <h3>可以自定义回到顶部按钮的样式，限制宽高：40px * 40px</h3>
                    <BackTop>
                        <div className="ant-back-top-inner">UP</div>
                    </BackTop>
                    Scroll down to see the bottom-right
                    <strong style={{ color: '#1088e9' }}> blue </strong>
                    button.
                </div>
            </div>
        )
    }
}