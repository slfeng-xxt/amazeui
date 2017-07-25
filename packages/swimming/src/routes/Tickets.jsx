/* eslint import/extensions: 0 */
import { SearchBar } from 'antd-mobile';
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import TicketList from '../components/Ticket/TicketList';
import MemberCardList from '../components/Ticket/MemberCardList';
import CommentList from '../components/Ticket/CommentList';
import styles from './Tickets.less';
import LayoutWithTabBar from '../components/layout/LayoutWithTabBar';

const Tickets = ({location}) => (
  <div>
    <LayoutWithTabBar title="票券预定" style={{display: 'flex', flexDirection: 'column'}} location={location} hiddenTabBar="true">
      <TicketList/>
      <div className={styles.card}>
        <img className={styles.card_img} src='http://oiu42aq9j.bkt.clouddn.com/my_advice.png'/>
        <span className={styles.card_word}>会员卡</span>
      </div>
      <MemberCardList/>
      <CommentList/>
    </ LayoutWithTabBar >
  </div>
);

Tickets.propTypes = {
  pageType: Number
};
Tickets.defaultProps = {
  pageType: 0
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Tickets);
