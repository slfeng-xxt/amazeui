import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import StarIcons from '../common/StarIcons';
import styles from './PoolItem.less';

const PoolItem = ({ rowData, sectionId, rowId }) => (
  <div className={styles.item} key={rowId}>
    <Link to={`/pools/${rowData.id}`}>
      <div className={styles.image}>
        <img src={rowData.spAvatar !== '' ? rowData.spAvatar : 'http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'} alt={rowData.spAvatar} />
      </div>
      <div className={styles.infomation}>
        <div className={styles.content}>
          <div className={styles.firstRow}>{rowData.spName}</div>
          <div className={styles.forthRow}><span>优</span></div>
        </div>
        <div className={styles.content}>
          <div className={styles.secondRow}>{rowData.address}</div>
          <div className={styles.fifthRow}>1.6km</div>
        </div>
        <div className={styles.content}>
          <div className={styles.thirdRow}><StarIcons currentStarNumber="4" maxStarNumber="5" /></div>
          <div className={styles.sixthRow}>空闲</div>
        </div>
      </div>
    </Link>
  </div>
);

PoolItem.propTypes = {
  rowData: PropTypes.object.isRequired,
  sectionId: PropTypes.string.isRequired,
  rowId: PropTypes.string.isRequired
};

export default PoolItem;
