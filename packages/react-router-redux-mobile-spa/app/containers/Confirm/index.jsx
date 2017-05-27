/*
 * @file Confirm 组件, 提交订单页
 */
import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'

import Utils from '../../util/util.js'
import localStorage from '../../util/localStorage.js'

import { post } from '../../fetch/request'

import './index.less'

import TitleBar from '../../components/TitleBar'
import Access from '../../components/Access'
import RadioList from '../../components/RadioList'
import Agree from '../../components/Agree'
import DialogModal from '../../components/DialogModal'

import * as globalActions from '../../actions/globalVal'
import * as cardActions from '../../actions/card'

const mapStateToProps = state => {
    return {
        confirm: state.confirm,
        globalVal: state.globalVal,
        baseInfo: state.baseInfo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        globalActions: bindActionCreators(globalActions, dispatch),
        cardActions: bindActionCreators(cardActions, dispatch)
    }
}
// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class Confirm extends Component {
    static propTypes = {
        globalActions: PropTypes.object.isRequired,
        cardActions: PropTypes.object.isRequired
    }
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.changePeriod = this.changePeriod.bind(this)
        this.changeAgree = this.changeAgree.bind(this)
        this.buyCard = this.buyCard.bind(this)
        this.toChangeCity = this.toChangeCity.bind(this)
        this.sureToPay = this.sureToPay.bind(this)
        
        this.state = {
            selectCityId: 0,
            selectCityName: '',
            lastCityId: 0,
            laseCityName: '',
            accessTitle: '本卡权益',
            period: 0,
            price: 0,
            isAgree: true,
            show: false
        }
    }
    componentWillMount() {
        let {confirm, cardActions} = this.props
        // 获取权益id
        if (this.props.params.id) {
            // 获取提单页信息
            cardActions.getConfirmInfo({
                privilege_no: this.props.params.id,
                city_id: localStorage.getItem('city_id')
            })
        }
        // 点击返回回到上一页
        Utils.setBack()
    }

    componentDidMount () {
        // 添加页面访问次数统计
    }

    componentDidUpdate () {
        let {confirm} = this.props
        if (!confirm.loading) {
            Utils.loading(0)
            // 以下代码只会执行一次
            if (this.state.period === 0 && confirm.radioList.length) {
                let firstCard = confirm.radioList[0]
                this.setState({
                    period: firstCard.period,
                    price: (confirm.isNew && (firstCard.newuser_price !== firstCard.price)) ? firstCard.newuser_price : firstCard.price,
                    selectCityId: Number(confirm.data.city_id),
                    selectCityName: confirm.data.city_name,
                    lastCityId: Number(confirm.data.last_city_id),
                    laseCityName: confirm.data.last_city_name,
                    accessTitle: `本卡权益（${confirm.data.city_name || ''}）`
                })
                // 设置title
                Utils.setTitleBar({
                    titleText: `开通${confirm.data.privilege_name}`
                })
            }
        }
    }

    changePeriod(period, price) {
        this.setState({
            period: period,
            price: price
        })
    }

    changeAgree(isAgree) {
        this.setState({
            isAgree: isAgree
        })
    }

    buyCard() {
        // 添加去支付按钮点击统计
        // 1. 检查信息完整度 2. 判断购卡城市与当前城市是否一致
        let result = this.validInfo()
        // 3. 拼装数据 4. 生成订单 5. 判断网络环境 6. 进行聚合收银台支付
        result && this.confirmOrder()
    }

    confirmOrder() {
        // 3. 拼装数据
        let {globalVal} = this.props
        let params = {
            ...globalVal,
            privilege_no: this.props.params.id,
            period: this.state.period,
            pay_type: 6 // 独立收银台
        }
        // 4. 生成订单
        post('/wmall/privilege/buy?display=json', params).then(res => {
            return res.json()
        }).then(json => {
            let errno = json.error_no,
                errmsg = json.error_msg,
                result = json.result
            if (Number(errno) === 0) {
                // 5. 判断网络环境
                let params = {
                    payType: result.pay_type,// 1表示钱包，2表示聚合收银台
                    payParams: result.pay_params   // 聚合收银台服务端下发的是json串，不需要encode
                }
                WMApp.network.getNetwork((data) => {
                    if (data.status && data.result.network === 'unreachable') {
                        Utils.showToast({text: '网络不可用'});
                    } else {
                        // 6. 进行聚合收银台支付
                        this.doPay(params)
                    }
                })
            } else {
                Utils.showToast(errmsg)
            }
        })
    }

    doPay(params) {
        WMApp.pay.doPay(params, data => {
            if (data.status) {
                let {globalActions} = this.props
                globalActions.savePayResult({
                    payResult: 'success'
                })
                hashHistory.push('/home')
            } else {
                console.log('支付失败')
            }
        })
    }

    validInfo() {
        // 1. 检查信息完整度
        if (!this.state.period) {
            Utils.showToast('请选择卡片规格')
            return false
        }
        if (!this.state.isAgree) {
            Utils.showToast('请确认《外卖购卡协议》')
            return false
        }
        // 2. 判断购卡城市与当前城市是否一致
        if (this.state.selectCityId !== this.state.lastCityId) {
            this.setState({
                show: true
            })
            return false
        }
        return true
    }

    toChangeCity () {
        WMApp.page.changePage({
            pageName: 'home'
        })
    }

    sureToPay() {
        this.confirmOrder()
    }

    render() {
        let {confirm} = this.props
        let animateLinkTime = window._animateLinkTime || 0
        let animate = (Date.now() - animateLinkTime) < 1000
        return (
            <ReactCSSTransitionGroup  transitionName="animate-slide-left" transitionAppear={animate} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <div>
                    {
                    this.state.period === 0 ? '' :
                    <div className = "confirm-page">
                        <TitleBar type = "access-title" title = {this.state.accessTitle}/>
                        <Access accessList = {confirm.accessList} type = "privilege-detail"/>
                        <TitleBar type = "period-title" title = "有效期" />
                        <RadioList radioList = {confirm.radioList} selected = {this.state.period} isNew = {confirm.isNew} onSelectedValueChanged = {this.changePeriod}/>
                        <Agree isAgree = {this.state.isAgree} onSelectedValueChanged = {this.changeAgree}/>
                        <div className = "buy-card" onClick = {this.buyCard} >去支付 ￥{this.state.price}</div>
                        <DialogModal show = {this.state.show} el = 'city-tip-dialog' title = '温馨提示' closeOnOuterClick = {false}>
                            <div className="tipmsg-wrap">
                                <p>您当前开通享有权益的城市是<span>{this.state.selectCityName}</span>，</p>
                                <p>如需更换请到首页更改定位</p>
                            </div>
                            <footer>
                                <a href="javascript:;" onClick = {this.toChangeCity}>更改城市</a>
                                <a href="javascript:;" onClick = {this.sureToPay}>确认</a>
                            </footer>
                        </DialogModal>
                    </div>
                    }
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

