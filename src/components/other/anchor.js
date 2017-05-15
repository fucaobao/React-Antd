/**
 * Created by 466368084@qq.com
 * Author: fucaobao
 * Date: 2017/5/15
 * Time: 13:44
 */

import React from 'react'
import { Anchor } from 'antd'

const Link = Anchor.Link;

export default class myAnchor extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="anchor">
                <div className="anchor-basic">
                    <h3>最简单的用法</h3>
                    <Anchor>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
                <div className="anchor-fixed">
                    <h3>不浮动，状态不随页面滚动变化</h3>
                    <Anchor affix={false}>
                        <Link href="#components-anchor-demo-basic" title="Basic demo" />
                        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
                        <Link href="#API" title="API">
                            <Link href="#Anchor-Props" title="Anchor Props" />
                            <Link href="#Link-Props" title="Link Props" />
                        </Link>
                    </Anchor>
                </div>
            </div>
        )
    }
}