import React from 'react';
import { Table, List, InputItem, Switch, Stepper, Slider, Button } from 'antd-mobile';
import FilletImage from '../../components/common/FilletImage';
import styles from './PersonalInfo.less';

const Item = List.Item;
const Brief = Item.Brief;

const PersonalInfo = () => {
  {/* get请求数据 */}
  const personalObj = {
  	name:"游啊游",
  	phone:"18765776566",
  	//imageUrl: "http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr"
  	imageUrl: "http://oiu42aq9j.bkt.clouddn.com/my_digital.png"
  };

  return (
	<div className={styles.div_body}>
      <List className="my-list">
        <Item extra={<div className={styles.div_top}><FilletImage width="100px" height="100px" imageUrl={personalObj.imageUrl} /></div>}>头像</Item>
        <Item extra={<div>{personalObj.name}</div>}>昵称</Item>
        <Item extra={<div>{personalObj.phone}</div>}>手机号</Item>
        <Item extra={<div>修改</div>}>登录密码</Item>
      </List>
   	</div>
)};

export default PersonalInfo;
