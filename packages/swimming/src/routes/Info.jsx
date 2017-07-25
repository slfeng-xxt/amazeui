/* eslint import/extensions: 0 */
import React, { PropTypes } from 'react';
import { connect } from 'dva';
import InfoItem from '../components/Info/InfoItem';

const Info = ({ location, dispatch, infos }) => {
  const handleClick = (state) => {
    const { uid } = state;
    dispatch({
      type: 'infos/fetchInfo',
      payload: uid
    });
  }

  const values = { data:infos.data , uid: infos.uid};
  console.info(infos.uid);
  return (
    <div style={{paddingTop: '0.8rem'}}>
      <InfoItem {...values} handleClick={handleClick} />
    </div>
  )
};

Info.propTypes = {

};

const mapStateToProps = ({ infos }) => ({ infos });
export default connect(mapStateToProps)(Info);
