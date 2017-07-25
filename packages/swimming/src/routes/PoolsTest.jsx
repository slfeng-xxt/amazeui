/* eslint import/extensions: 0 */
import { SearchBar ,Toast } from 'antd-mobile';
import React, { PropTypes } from 'react';
import PoolList from '../components/pools/PoolList';
import styles from './Pools.less';
const showToast = () => {
  Toast.info('暂时没有哦:)');
}

const Pools = ({ dispatch, pools, loading }) => {
  const { dataSource, pageNo, pageSize, hadMore } = pools;
  const onEndReached = (event) => {
    if (!loading && hadMore) {
      dispatch({
        type: 'pools/query',
        payload: { pageNo: pageNo + 1, pageSize }
      });
    }
  };
  const poolListProps = { dataSource, onEndReached, loading };
  return (
    <div className={styles.normal}>
      <SearchBar placeholder="搜索"/>
      <div className={styles.head}>
        <div><span>室内游泳馆</span></div>
        <div className={styles.active}><span>室外游泳馆</span></div>
        <div><span>水上世界</span></div>
      </div>
      <div className={styles.sort}>
        <div onClick = {showToast}>水质<div className={styles.triangle}></div></div>
        <div onClick = {showToast}>距离<div className={styles.triangle}></div></div>
        <div onClick = {showToast} className={styles.active}>人气<div className={styles.triangle}></div></div>
      </div>
      <PoolList {...poolListProps} />
    </div>
  );
};

Pools.propTypes = {
  dispatch: React.PropTypes.func,
  pools: React.PropTypes.object,
  location: React.PropTypes.object
};

export default Pools;
