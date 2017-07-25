import React from 'react';
import { connect } from 'dva';
import LayoutWithTabBar from './home/HomeTabBar';
import styles from './Playground.less';

const Playground = ({ location }) => (
<div className={styles.normal}> </div>
);

function mapStateToProps({ pools }) {
  return { pools };
}

export default connect(mapStateToProps)(Playground);
