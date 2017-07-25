/* eslint import/extensions: 0 */
import { WhiteSpace, WingBlank, Button, List, Icon, Flex, Tag, NavBar } from 'antd-mobile';
import { connect } from 'dva';
import { Link } from 'dva/router';
import React, { PropTypes } from 'react';
import { hashHistory } from 'dva/router';
import StarIcons from '../components/common/StarIcons';
import LayoutWithTabBar from './home/HomeTabBar';
import styles from './PoolPage.less';

const Item = List.Item;

const PoolPage = ({ location, pools, loading }) => {
  const { currentItem } = pools;
  return (
    <div className={styles.normal}>
      <NavBar
        style={{backgroundColor: '#108ee9', position: 'fixed', width: '100%', top: '0px', zIndex: 9 }}
        mode="dark"
        onLeftClick={ () => {
          hashHistory.goBack();
        }}
      >
        泳池详情
      </NavBar>
      <List className={styles.list}  style={{paddingTop: '.8rem'}}>
        <img className={styles.photo} src={currentItem.spAvatar} alt="游泳池照片" />
        <div className={styles.address_line}>
          <div className={styles.address_item}>
            <div ><strong>{currentItem.spName}</strong></div>
            <div className={styles.address_phone}>电话：<span>{currentItem.phone}</span></div>
          </div>
          <div className={styles.number_item}>
            <div className={styles.current_number}>  定员 : {currentItem.fixedNumber}人</div>
            <div className={styles.entered_number}>已入场 : {currentItem.arrivedNumber}人</div>
          </div>
        </div>
        <Item style={{ borderBottom: '1px solid #ddd' }}>
          <Flex direction="row" justify="between" className={styles.mark}>
            <Flex.Item>评分 : <StarIcons currentStarNumber="4" maxStarNumber="5" /></Flex.Item>
            <Icon type="phone" className={styles.phone_style} />
          </Flex>
        </Item>
        <Flex className={styles.mark}>
          <span className={styles.service_line}>
            服务 :
          </span>
          <Flex.Item flex="5">
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/wifi.png" alt="" />
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/shampoo.png" alt="" />
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/sauna.png" alt="" />
            <img className={styles.icon_line} src="https://oiu4ewuqq.qnssl.com/baby_pool.png" alt="" />
          </Flex.Item>
        </Flex>
        <div className={styles.tag_container}>
          <Tag selected>
            <Link to={'photoAlbum'}>
            相册
            </Link>
          </Tag>
          <Tag selected>
            <Link to={`LifeSaver`}>
              救生员
            </Link>
          </Tag>
          <Tag selected>活动邀请</Tag>
          <Tag selected>
            <Link to={`coach`}>
              明星教练
            </Link>
          </Tag>
        </div>
        <div style={{ height: '0.3rem', background: '#f5f5f9', borderBottom: '1px solid #ddd' }} />
        <Item>
          <Flex style={{ color: '#666' }}>
            <Flex.Item>水质 : <span className={styles.water_quality}>{currentItem.waterQuality}</span></Flex.Item>
            <Flex.Item>水温 : <span className={styles.water_temp}>{currentItem.temperature} &#8451;</span></Flex.Item>
          </Flex>
        </Item>
      </List>
      <div className={styles.button_container}>
        <WhiteSpace size="xs" />
        <WingBlank size="md">
          <Link to={`ticket`}>
            <Button className="btn" type="primary" size="large">选择票券</Button>
          </Link>
        </WingBlank>
      </div>
    </div>
  )
};

PoolPage.propTypes = {

};

const mapStateToProps = state => ({ pools: state.pools, loading: state.loading.global });
export default connect(mapStateToProps)(PoolPage);
