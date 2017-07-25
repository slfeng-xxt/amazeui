import React, {PropTypes} from 'react';
import {NavBar, Icon, Tabs, WhiteSpace} from 'antd-mobile';
import styles from './LifeSaver.less';
import {CoachTop} from '../components/Coach'
import  LayoutWithTabBar from '../components/layout/LayoutWithTabBar';

const LifeSaver = () => (
  <div className={styles.page_container}>
    <LayoutWithTabBar location={location} title="救生员" hiddenTabBar="true">
      <CoachTop isLifeSaver={true}/>
    </LayoutWithTabBar>

  </div>
);

export default LifeSaver;
