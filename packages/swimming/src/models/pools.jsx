import { parse } from 'qs';
import pathToRegexp from 'path-to-regexp';
import { fetchPoolList, fetchPool } from '../services/poolService';

export default {
  namespace: 'pools',
  state: {
    dataSource: [],
    currentItem: {
      address: '',
      spName: '',
      idle: '',
      latitude: '',
      fixedNumber: 0,
      spAvatar: '',
      arrivedNumber: 0,
      score: '',
      phone: '',
      temperature: '',
      waterQuality: '',
      serviceTypes: [],
      id: '',
      longitude: ''

    },
    hadMore: true,
    pageNo: 0,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0
  },

  subscriptions: {
    homePage({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/pools' || location.pathname === '/home') {
          dispatch({
            type: 'query',
            payload: {
              pageSize: 20
            }
          });
        }
      });
    },

    poolPage({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const match = pathToRegexp('/pools/:poolId').exec(pathname);
        if (match) {
          const poolId = match[1];
          dispatch({
            type: 'fetchPool',
            payload: poolId,
          });
        }
      });
    },
  },

  effects: {
    * query({ payload }, { call, put }) {
      const { data } = yield call(fetchPoolList, parse(payload));
      yield put({
        type: 'updateQueryKey',
        payload: { pageNo: 1, ...payload }
      });
      if (data.data.dataList && data.data.dataList.length > 0) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: data.data.dataList,
            totalCount: data.data.totalCount,
            pageNo: data.data.pageNo,
          },
        });
      }
    },
    * fetchPool({ payload: id }, { call, put }) {
      const { data } = yield call(fetchPool, id);
      if (data.data) {
        yield put({
          type: 'showPool',
          payload: {
            currentItem: data.data,
          },
        });
      }
    },
  },
  reducers: {
    querySuccess(state, action) {
      if (action.payload.data.length > 0 && state.hadMore){
        //console.info('action.payload.data.length', action.payload.data.length);
        const dataSource = state.dataSource.concat(action.payload.data);
        //console.info(dataSource.length, action.payload.totalCount);
        const hadMore = ! (dataSource.length >= action.payload.totalCount);
        const pageNo = action.payload.pageNo;
        //console.info('hadMore', hadMore);
        return { ...state, dataSource, pageNo, hadMore };
      }
      else{
        const hadMore = false;
        return { ...state, hadMore };
      }
    },
    updateQueryKey(state, action) {
      return { ...state, ...action.payload };
    },
    showPool(state, action) {
      return { ...state, ...action.payload };
    }
  }
}
