/**
 * Created by ryan on 2017/1/9.
 */
import React from 'react';
import {connect} from 'dva';
import {CoachTop, CoachTrain} from '../components/Coach'
import {NavBar} from 'antd-mobile';
import {hashHistory} from 'dva/router';

const data = [
  {
    interest_count: 10,
    train_name: '游泳吧普通班',
    description: '4-6人班',
    train_price: 10
  },
  {
    interest_count: 1,
    train_name: '游泳吧普通班',
    description: '4-6人班',
    train_price: 20
  },
  {
    interest_count: 1,
    train_name: '游泳吧普通班',
    description: '4-6人班',
    train_price: 200
  },
  {
    interest_count: 1,
    train_name: '游泳吧普通班',
    description: '4-6人班',
    train_price: 20
  }
];

const CoachPage = ({location, dispatch, coaches, loading}) => {
  // const {dataSource, pageNo, pageSize, hadMore, total} = coaches;

  return (
    <div>
      {/*导航栏*/}
      <NavBar
        iconName="left"
        leftContent='返回'
        style={{backgroundColor: '#108ee9', position: 'fixed', width: '100%', top: '0px', zIndex: 9}}
        mode="dark"
        onLeftClick={() => {
          hashHistory.goBack();
        }}
      >教练</NavBar>

      {/* content */}
      <div style={{paddingTop: '.8rem'}}>
        <CoachTop/>
        <CoachTrain dataSource={data}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({pools: state.pools, loading: state.loading.global});
// export default connect(mapStateToProps)(CoachPage);
export default CoachPage;
