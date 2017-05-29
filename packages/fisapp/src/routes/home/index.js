import React from 'react';
import { connect } from '../../dva'
function Home(props) {
  return (
    <div>
      Route Component: Home
    </div>
  );
}

export default Home

export default connect(
  ({ home }) => ({ home })
)(Home)
