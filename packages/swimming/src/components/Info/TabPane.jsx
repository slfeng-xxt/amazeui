import React, { PropTypes } from 'react';
import styles from './TabPane.less';

const TabPane = ({ handleClick, data , uid}) => {
  const activeIndex = data && data.dataList && data.dataList[0].id;
  console.log('uid',uid);
  const liStyle = uid === 1 ? styles.active : '';
  const liStyle1 = uid === 2 ? styles.active : '';
  const liStyle2 = uid === 3 ? styles.active : '';
  const liStyle3 = uid === 4 ? styles.active : '';
  console.log(liStyle,liStyle1,liStyle2,liStyle3);
  return (
    <nav className={styles.item}>
      <ul>
        <li className={liStyle} onClick={handleClick.bind(this, { uid: 1 })}>全部</li>
        <li className={liStyle1} onClick={handleClick.bind(this, { uid: 2 })}>通知</li>
        <li className={liStyle2} onClick={handleClick.bind(this, { uid: 3 })}>新闻</li>
        <li className={liStyle3} onClick={handleClick.bind(this, { uid: 4 })}>告示</li>
      </ul>
    </nav>
  )
};

export default TabPane;
