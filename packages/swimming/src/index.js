import dva from 'dva';
import createLoading from 'dva-loading';
import { useRouterHistory } from 'dva/router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import pools from './models/pools';
import global from './models/global';
import infos from './models/infos';
import coaches from './models/coaches';
import router from './router';
import '../public/index.html';
import './index.css';

import { BASENAME } from './constants'
const history = useRouterHistory(createBrowserHistory)({
  basename: BASENAME,
})
// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history,
  onError(error) {
    console.log('app onError -- ', error)
  }
})
// 2. Plugins
 
//const app = dva();
//app.use(createLoading());

// 3. Model
app.model(global);
app.model(pools);
app.model(infos);
app.model(coaches);
// 4. Router
app.router(router);

// 5. Start
app.start('#root');
