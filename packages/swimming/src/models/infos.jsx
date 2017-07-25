import { parse } from 'qs';
import pathToRegexp from 'path-to-regexp';
import { fetchInfo } from '../services/infoService';

export default {
  namespace: 'infos',
  state: {
    data: {
    },
    uid: 1,
    loading: false,
    hadMore: true,
    pageNo: 1,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0
  },
  subscriptions: {
    infoPage({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/info').exec(pathname);
        if (match) {
          dispatch({
            type: 'fetchInfo',
            payload: 1
          });
        }
      });
    },

  },
  effects: {
    * fetchInfo({ payload: id }, { call, put }) {
      const showLoading = yield put({ type: 'showLoading' });
      console.info('fetchInfo');
      const { data } = yield call(fetchInfo, id);
      if (data) {
        yield put({
          type: 'showInfo',
          payload: {
            data,
            uid: id
          },
        });
      }
    }
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false, hadMore: false };
    },
    showMessage(state) {},
    querySuccess(state, action) {
      const dataSource = state.dataSource.concat(action.payload.data);
      const pageNo = action.payload.pageNo;
      return { ...state, dataSource, pageNo, loading: false };
    },
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
    showInfo(state, action) {
      return { ...state, ...action.payload.data , uid: action.payload.uid }
    }
  }
}
