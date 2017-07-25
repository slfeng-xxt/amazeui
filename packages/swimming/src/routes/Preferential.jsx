import {
  TabBar,
  NavBar,
  Tabs,
  WhiteSpace,
  Toast,
  RefreshControl,
  ListView
} from 'antd-mobile';
import React, {PropTypes} from 'react';
import {connect} from 'dva';
import PoolList from '../components/pools/PoolList';
import styles from './Preferential.less';
import LayoutWithTabBar from '../components/layout/LayoutWithTabBar';

const data = [
  {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒'
  }, {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒'
  }, {
    img: 'http://oiu42aq9j.bkt.clouddn.com/sea.png',
    venueName: '宾利特健身会所(金仕堡)',
    ticketState: '不是所有的兼职汪都需要风吹日晒'
  }
];

const TabPane = Tabs.TabPane;

function callback(key) {
  Toast.loading('加载中...', 1, () => {
    console.log('key', key);
  });
}
const Preferential = ({location, dispatch, pools, loading}) => {

  const {dataSource, pageNo, pageSize, hadMore, total} = pools;

  return (
    <div className={styles.prefer_container}  style={{paddingTop:'.9rem',paddingBottom:'1.1rem'}}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="婴儿池" key="1">
          <div className={styles.preferitem}>
            <div className={styles.preferitem_cell}>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                  <img src={'http://img.release.1yd.me/Fj5TGHDtBa9-JyTNx3-m9nsJCD3X'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>兴荣温德姆酒店游泳馆</div>
                  <div >票数充足</div>
                </div>
              </div>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}><img src={'http://img.release.1yd.me/FuNwwei42SlXZvLoraO86LdxeiG5'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>仁恒怡庭游泳馆</div>
                  <div >票数充足</div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="室内游泳馆" key="2">
          <div className={styles.preferitem}>
            <div className={styles.preferitem_cell}>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                  <img src={'http://img.release.1yd.me/FrMCwHCN2ndqBs1MUW89CPC3wg0m'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div >沈坚强俱乐部</div>
                  <div >票数充足</div>
                </div>
              </div>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                <img src={'http://img.release.1yd.me/FmDu14Qg5GmEY8wOjU-mscN109TH'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>WILLS健身会所</div>
                  <div >票数充足</div>
                </div>
              </div>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                <img src={'http://img.release.1yd.me/Fk1M91iHA2VVq3nvYX3lUlvx1BiU'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>上海达康游泳馆</div>
                  <div >票数充足</div>
                </div>
              </div>
               <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                <img src={'http://img.release.1yd.me/FldlqeYQz7fKSdz6ma3VZ1LF7oes'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>四方俱乐部</div>
                  <div >票数充足</div>
                </div>
              </div>

            </div>
          </div>
        </TabPane>
        <TabPane tab="室外游泳池" key="3">
          <div className={styles.preferitem}>
            <div className={styles.preferitem_cell}>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                  <img src={'http://oiu42aq9j.bkt.clouddn.com/pool3.png'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>嘉年别墅游泳池</div>
                  <div >票数充足</div>
                </div>
              </div>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}><img src={'http://oiu42aq9j.bkt.clouddn.com/pool1.png'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>梅陇城世纪苑游泳池</div>
                  <div >票数充足</div>
                </div>
              </div>
             <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                <img src={'http://img.release.1yd.me/FomVE-ZIAOp47FGK20kdLAInNrk8'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>MOB迈博健身健身会所</div>
                  <div >票数充足</div>
                </div>
              </div>

            </div>
          </div>
        </TabPane>
        <TabPane tab="水上世界" key="4">
          <div className={styles.preferitem}>
            <div className={styles.preferitem_cell}>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}>
                  <img src={'http://img.release.1yd.me/FgarIrVBZKmhGMmDKvpPBK57syFn'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>上海浦东游泳馆</div>
                  <div >票数充足</div>
                </div>
              </div>
              <div className={styles.preferitem_box}>
                <div className={styles.preferitem_photo}><img src={'http://img.release.1yd.me/FrEu-cyNmiK4cNaY3Ec1716gXKY9'}/>
                </div>
                <div className={styles.preferitem_box_votes}>
                  <div>江东游泳馆</div>
                  <div >票数充足</div>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>

  );
};
Preferential.propTypes = {
  dispatch: React.PropTypes.func,
  pools: React.PropTypes.object,
  location: React.PropTypes.object
};

const mapStateToProps = state => ({pools: state.pools, loading: state.loading.global});
export default connect(mapStateToProps)(Preferential);
