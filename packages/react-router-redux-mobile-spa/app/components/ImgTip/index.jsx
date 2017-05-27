/*
 * @file 首页图片提示组件 ImgTip
 */
import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'

import './index.less'

// 组装 ImgTip 组件
class ImgTip extends Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
            {
                <div className = { classNames("tip-wrap", this.props.type) }>
                    <div className = "tip-img"></div>
                    {
                        this.props.type === 'novipcard' ?
                        <div className = "tip-msg">
                            <p>您的全免配送费权益尚未过期</p>
                            <p>暂时无法购买新的卡片</p>
                        </div>
                        : this.props.type === 'nousercard' ?
                        <div className = "tip-msg">
                            <p>还没有购卡哦</p>
                            <p>请从下方购买</p>
                        </div>
                        : this.props.type === 'nocitycard' ?
                        <div className = "tip-msg">
                            <p>{this.props.cityName ? this.props.cityName + '的' : ''}商品正在紧锣密鼓的筹备中</p>
                            <p>敬请期待...</p>
                        </div> 
                        : ''
                    }
                    
                </div>
            }
            </div>
        )
    }
}

export default ImgTip
