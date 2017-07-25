import {parse} from 'qs';
import pathToRegexp from 'path-to-regexp';
import {fetchCoach, fetchTrainList} from '../services/coachService';


export default {
  namespace: 'coaches',
  state: {
    coachesInfoDataSource: [],
    trainListDataSource: [],
    loading: false,
    hadMore: true,
    pageNo: 1,
    pageSize: 20,
    total: 0,
    totalPage: 0,
    totalCount: 0
  },
  subscriptions: {
    // 教练信息
    coachesInfo({dispatch, history}) {
      return history.listen(({pathname}) => {
        const match = pathToRegexp('/coach/:swimPoolId').exec(pathname);
        if (match) {
          const poolId = 'f2eb76bebd1b11e6bfe20242ac11001c';
          dispatch({
            type: 'fetchCoach',
            payload: poolId
          });
        }
      });
    },
    // 培训列表
    trainList({dispatch, history}) {
      return history.listen(({pathname}) => {
        const match = pathToRegexp('/coach/:swimPoolId').exec(pathname);
        if (match) {
          const poolId = 'f2eb76bebd1b11e6bfe20242ac11001c';
          dispatch({
            type: 'fetchTrainList',
            payload: poolId
          });
        }
      });
    }
  },
  effects: {
    * queryCoaches({payload: id}, {call, put}) {
      yield put({type: 'showLoading'});
      const {data} = yield call(fetchCoach, id);
      if (data.data) {
        yield put({
          type: 'showCoaches',
          payload: {
            data: data.data,
          },
        });
      }
    },
    * queryTrains({payload: id}, {call, put}) {
      const {data} = yield call(fetchTrainList, id);
      if (data.data) {
        yield put({
          type: 'showTrains',
          payload: {
            data: data.data.dataList,
            totalCount: data.data.totalCount,
            pageNo: data.data.pageNo,
          },
        });
      }
    }
  },
  reducers: {
    showTrains(state, action) {
      const dataSource = state.trainListDataSource.concat(action.payload.data);
      const pageNo = action.payload.pageNo;
      return {...state, dataSource, pageNo, loading: false};
    },
    showCoaches(state, action) {
      const dataSource = action.payload.data;
      return {...state, dataSource};
    },
  }
}
