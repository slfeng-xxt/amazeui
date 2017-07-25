import { List, TextareaItem, NavBar, Icon, Button, WhiteSpace, Flex } from 'antd-mobile';
import React  from 'react';
import styles from './WaterQuality.less';

const WaterQuality = () => {
  return (
    <div className={styles.normal}>
      {/*导航栏*/}
      <NavBar
        style={{ backgroundColor: '#108ee9' }}
        leftContent=""
        mode="dark"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[<Icon type="export" />]}
      >
        水质详情
      </NavBar>

      {/*场馆信息*/}
      <div className={styles.stadium}>
        <img src="http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr" alt="游泳池照片"/>

        <div className={styles.sta_text}>

          <div className={styles.sta_name}>
            <span>金外滩游泳馆</span>
          </div>

          <div className={styles.sta_other_info}>
            <span>地址：</span>
            <span>黄埔区中山南路200弄</span>
          </div>

          <div className={styles.sta_text_wq}>
            <div>水质</div>
            {/*<img className={styles.sta_text_img} src='http://img.release.1yd.me/Fnq3JmmOan-yAHtJHk-n9-o3Qqbr'/>*/}
            <div className={styles.sta_text_img}>优</div>
          </div>
        </div>

      </div>


      <WhiteSpace size="lg" />

      {/*水质信息*/}
      <ul className={styles.water_quality}>
        <strong className={styles.wq_title}>数据详情</strong>

        <div className={styles.line1} />

        <li className={styles.wq_text}>浑浊度：
          <span>0.6</span> NTU
        </li>

        <li className={styles.wq_text}>PH值：
          <span>7.6</span>
        </li>

        <li className={styles.wq_text}>尿素：
          <span>3.2</span> mg/L
        </li>

        <li className={styles.wq_text}>菌落总数：
          <span>111</span>
        </li>

        <li className={styles.wq_text}>总大肠菌群：
          <span>111</span>
        </li>

        <li className={styles.wq_text}>游离性余氯：
          <span>0.6</span> mg/L
        </li>

        <li className={styles.wq_text}>化合性余氯：
          <span>0.2</span> mg/L
        </li>

        <li className={styles.wq_text}>臭氧：
          <span>111</span>
        </li>

        <li className={styles.wq_text}>水温：
          <span>111</span>℃
        </li>
      </ul>

    </div>
  )
};

WaterQuality.propTypes = {

};

export default WaterQuality;

