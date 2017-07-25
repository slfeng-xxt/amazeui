import React, {
  Component,
  PropTypes,
} from 'react';
import styles from './CoachTop.less';

const aar1 = ['http://img.release.1yd.me/FqJ-OlXAF3CJMrWBrvJd-wabkvFa', 'http://img.release.1yd.me/Fl6-gNrvLxp95x7ve__vNh3DtiZX', 'http://img.release.1yd.me/FtkElbazWUQC_XKztNWiCpKwj-0b', 'http://img.release.1yd.me/FjXO_3CtDhkZH85ZJy_slYnONfYa', 'http://img.release.1yd.me/FiHJffr7xl-GS0TQz4UHR31lRFs5'];
const aar2 = ['http://img.release.1yd.me/FkuBgmfL0EiOGxBrF9-W8E4zXiBN', 'http://img.release.1yd.me/FoxjPafTiajKpCxqz5YtVa2OwaF2', 'http://img.release.1yd.me/FvhRfnr_7yayFPBT4dij-x7Fxfn3', 'http://img.release.1yd.me/Fl6-gNrvLxp95x7ve__vNh3DtiZX', 'http://img.release.1yd.me/FlSo5CeNQO6tQGTLRY7qax8IdtMC'];

const renderContent = (index, isLifeSaver) => (
  <div className={styles.describe_container}>
    <div>{isLifeSaver ? '救生员' : '教练'} {++index}</div>
    <p className={styles.describe_p}>lick 女， 出生年月 - 1990.09，本科学历，高级救生员、教练。对于有用急救工作经验丰富，可培训游泳自我救护和如何正确救护他人等措施。</p>
    <p className={styles.describe_p}>{isLifeSaver ? '工作理念：因材施教，扬长避短，压力之下毫不逊色。' : ''}</p>
    <p className={styles.describe_p}> {isLifeSaver ? '带训格言：求质量，讲实效，激流勇进。' : ''}</p>
    <div className={styles.describe_img}>
      <figure>
        <img
          src={aar1[index]}/>
      </figure>
      <figure>
        <img
          src={aar2[index]}/>
      </figure>
    </div>
  </div>
);

class CoachTop extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      index: props.isLifeSaver ? 2 : 1
    };
  }

  handleChange(e) {
    let index = e.target.id;
    if (this.state.index != index)
      this.setState({
        index: index
      });
  }

  render() {
    return (
      <div className={styles.top_container}>
        <div className={styles.top_img_container}>
          <img className={this.state.index == 0 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="0"
               src={this.props.isLifeSaver ? 'http://img.release.1yd.me/FjlriBt0IVp-4USWvw-MbM0VRxGL' : 'http://img.release.1yd.me/FtA8csgEv9cLRGTAdgPp2b5mGu2m'}/>
          <img className={this.state.index == 1 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="1"
               src={this.props.isLifeSaver ? 'http://img.release.1yd.me/FlGXxDBs0XxdPUQaJGKwWiMBSF68' : 'http://img.release.1yd.me/FsHC98_EJoBIKUNozjKnhIHa1MSN'}/>
          <img className={this.state.index == 2 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="2"
               src={this.props.isLifeSaver ? 'http://img.release.1yd.me/Fn9fe4E5k2iuYZN5DOLnYEQNgeM_' : 'http://img.release.1yd.me/Fm2zKMleRvvHbX28nRpNHPeQs5VZ'}/>
          <img className={this.state.index == 3 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}
               id="3"
               src={this.props.isLifeSaver ? 'http://img.release.1yd.me/Fhla9GQG6XUH-LQ7I2i9u4xmCPRK' : 'http://img.release.1yd.me/FkSVZfrVnt_8-gsWhDotS4umBUrN'}/>
          {/*<img className={this.state.index == 4 ? styles.top_img_big : styles.top_img} onClick={this.handleChange}*/}
          {/*id="4"*/}
          {/*src={this.props.isLifeSaver ? 'http://img.release.1yd.me/FsChRI2oOZaDanBQ35XIV1M4Iqmv' : 'http://img.release.1yd.me/FjwokQWUcGxAE_vd9mnxwjC9ACCG'}/>*/}
        </div>

        <div style={{border: "#ddd dashed", borderWidth: 1}}></div>

        {renderContent(this.state.index, this.props.isLifeSaver)}
      </div>
    );
  }
}

CoachTop.propTypes = {
  isLifeSaver: PropTypes.bool //是否是救生员页面
};
CoachTop.defaultProps = {
  isLifeSaver: false
};

export default CoachTop;
