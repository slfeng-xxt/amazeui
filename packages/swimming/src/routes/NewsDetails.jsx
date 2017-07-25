import React from 'react';
import styles from './NewsDetails.less';
import { WhiteSpace, WingBlank, Button, List, Icon, Flex, Tag, NavBar } from 'antd-mobile';
import { hashHistory } from 'dva/router';

const NewsDetails = ()=>
  <div className={styles.page_contral}>
    <NavBar
      iconName="left"
      leftContent="返回"
      style={{backgroundColor: '#108ee9', position: 'fixed', width: '100%', top: '0px', zIndex: 10 }}
      mode="dark"
      onLeftClick={() => { hashHistory.goBack(); }}
    >
      资讯详情
    </NavBar>
    <div className={styles.secondDiv} style={{paddingTop:'.9rem'}}>
      <p className={styles.markText}>58家游泳场所进行水质的抽样检查</p>
      <p className={styles.timeText}>2010-10-06  16:00</p>
      <div className={styles.picDiv}><img className={styles.pic} src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" alt="" /></div>
      <p className={styles.bigOne}>
        记者徐婕摄影报道为进一步强化游泳池卫生场所卫生监管管理工作，确保游泳池场所安全，
        防止介水疾病和危害健康事故的发生。错昨日开始，上海市卫生局卫生执法监督开始2015年
        对全市主城区游泳场所水质的抽查检查。每月抽检一次，连续抽检7个月。据市卫监相关负责
        人介绍，本次上海市卫监局将对全市58家游泳池场所进行水质的抽样检查。水质抽检全面执
        行国家标准进行检测，所抽样的水质只要达到国家标准就可放心在游泳池游泳锻炼。目前，
        上海市主城区游泳场所的卫生水平都已得到全面提高水循环都可以进行正常运转。此次水质抽
        样检查最终结果将于本月底在上海市卫生监管网进行公示，涉及不合格的游泳池。
      </p>
    </div>

  </div>

export default NewsDetails;



