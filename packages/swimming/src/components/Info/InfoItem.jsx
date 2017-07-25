import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { PropTypes } from 'react';
import InfoList from './InfoList';
import TabPane from './TabPane';
import styles from './InfoItem.less';


const InfoItem = ({ dispatch, handleClick, ...datas }) => {
  const { data,uid } = { ...datas };

  console.info('InfoItem',uid);
  return (
    <section>
      <TabPane data={data} uid = {uid} handleClick={handleClick} />
      <InfoList {...data} />
    </section>
  )
};

export default InfoItem;
