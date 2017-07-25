import React, {
  Component,
  PropTypes,
} from 'react';
import styles from './MemberCardList.less';
import ReactSwipe from 'react-swipes';

const renderContent = () => (
  <div></div>
);
class MemberCardList extends Component {
  render() {
    let opt = {
      distance: 140, // 每次移动的距离，卡片的真实宽度
      swTouchend: (ev) => {
        let data = {
          moved: ev.moved,
          originalPoint: ev.originalPoint,
          newPoint: ev.newPoint,
          cancelled: ev.cancelled
        }
      }
    }
    return (
      <section className={styles.MemberTop}>
        <div className={styles.viewport}>
          <ReactSwipe className={styles.top_img_container} options={opt}>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_card1.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_card2.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_card3.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_card2.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_card3.png'/>
          </ReactSwipe>
        </div>
        {renderContent(1)}
      </section>
    );
  }
}

MemberCardList.propTypes = {};
MemberCardList.defaultProps = {};

export default MemberCardList;
