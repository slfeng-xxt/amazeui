import React, {PropTypes} from 'react';
import {TabBar} from 'antd-mobile';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

import styles from './footer.less';

function Footer({dispatch, childrens, location}) {
  return (
    <div className={styles.normal}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          title="首页"
          key="生活"
          icon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-home.png' }}
          selectedIcon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-home-selected.png' }}
          selected={location.pathname === '/pools'}
          onPress={() => dispatch(routerRedux.push('/pools'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="优惠"
          key="discount"
          icon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-discount.png' }}
          selectedIcon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-discount-selected.png' }}
          selected={location.pathname === '/page01'}
          onPress={() => dispatch(routerRedux.push('/page01'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="咨讯"
          key="info"
          icon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-info.png' }}
          selectedIcon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-info-selected.png' }}
          selected={location.pathname === '/page02'}
          onPress={() => dispatch(routerRedux.push('/page02'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="mine"
          icon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-mine.png' }}
          selectedIcon={{ uri: 'http://oiu42aq9j.bkt.clouddn.com/tabbar-mine-selected.png' }}
          selected={location.pathname === '/page03'}
          onPress={() => dispatch(routerRedux.push('/page03'))}
        >
          {childrens}
        </TabBar.Item>
      </TabBar>
    </div>
  );
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // childrens: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Footer);
