/*
 * @file 首页热卖商品卡片组件
 */
import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import classNames from 'classnames';
import Utils from '../../../util/util.js'
import './index.less'

// 组装 SellCard 组件
class SellCard extends Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.unfoldRule = this.unfoldRule.bind(this)
        this.state = {
            rulefold: true, // 使用规则折叠true 展开false
            btnstatus: 'buy',
            conflictreason: ''
        }
    }

    unfoldRule() {
        // 展开使用规则
        this.setState({
            rulefold: !this.state.rulefold
        })
        // 添加使用规则点击次数统计
    }
    
    componentDidUpdate() {
    }

    getBtnStatus(card) {
        let btnstatus = 'buy', conflictreason = ''
        if (card.stock > 0) {
            let btn_state = Number(card.btn_state)
            if (btn_state === 1) {
                btnstatus = 'buy'
            } else if (btn_state === 2) {
                btnstatus = 'renew'
            } else if (btn_state === 3) {
                btnstatus = 'conflict'
                conflictreason = card.conflict_msg
            } else if (btn_state === 4) {
                btnstatus = 'notrenew'
                conflictreason = card.conflict_msg
            }
        } else {
            btnstatus = 'nostock'
            conflictreason = '已经抢光啦，下次早点来哟~'
        }
        this.state.btnstatus = btnstatus
        this.state.conflictreason = conflictreason
    }
    render() {
        let card = this.props.card
        this.getBtnStatus(card)
        return (
            <div className="sellcard-item">
                <div className="section1">
                    <div className="base-info">
                        <div className="name">
                            {card.discount_rate}折{card.privilege_name}
                            {
                                (card.stock <= 300 && card.stock > 0) && <span className="stock">(库存{card.stock})</span>
                            }
                        </div>
                        <div className="desc">仅支持专送</div>
                    </div>
                    <div className="other-info">
                        {
                            (this.props.isNew && (card.price !== card.newuser_price)) ?
                            <div className="price-wrap">
                                <div className="price">{card.newuser_price}</div>
                                <div className="origin-price">{card.price}</div>
                            </div>
                            : <div className="price-wrap">
                                <div className="price">{card.price}</div>
                            </div>
                        }
                        <div className="btn-wrap" onClick = {this.props.clickBtn.bind(null, this.state.btnstatus, card.privilege_no, this.state.conflictreason)}>
                        {
                            this.state.btnstatus === 'buy'
                            ? <div className="btn buy">开通</div>
                            : this.state.btnstatus === 'renew'
                            ? <div className="btn renew">续费</div>
                            : this.state.btnstatus === 'notrenew'
                            ? <div className="btn notrenew">续费</div>
                            : this.state.btnstatus === 'conflict'
                            ? <div className="btn conflict">开通</div>
                            : this.state.btnstatus === 'nostock'
                            ? <div className="btn nostock">抢完了</div>
                            : ''
                        }
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className={ classNames('to-use-rule', { unfold: !this.state.rulefold }) } onClick={this.unfoldRule}>使用规则</div>
                    {this.props.isNew && (card.price !== card.newuser_price) ? <div className="new-tip">新用户首次购卡专享</div> : ''}
                </div>
                {
                    !this.state.rulefold && <div className="section3 rule-wrap">
                        <p>权益只在{card.city_name}有效</p>
                        <p>每单最高减免{card.privilege_rule && card.privilege_rule.max_discount}元配送费</p>
                        <p>每天最多可减免{card.privilege_rule && card.privilege_rule.day_limit}单</p>
                        {
                            card.privilege_rule && card.privilege_rule.month_limit ? 
                            <p>每月最多可减免{card.privilege_rule.month_limit}单</p>
                            : ''
                        }
                    </div>
                }
            </div>
        )
    }
}
export default SellCard

