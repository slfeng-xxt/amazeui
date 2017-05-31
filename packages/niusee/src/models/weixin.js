import * as servs from '../services/weixin'
import { parse } from 'qs'

export default {
  namespace: 'weixin',
  state: {
    curpath: 'weixin',
    cate: 'recommend',
    list: [],
    cards: [],
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        dispatch({
          type: 'gallery',
          payload: location.query,
        })

        dispatch({
          type: 'query',
          payload: location.query,
        })
      })
    },
  },
  effects: {
    *query ({ payload }, { call, put }) {
      const { data, headers } = yield call(servs.query, parse(payload))
      //console.log(data)
      yield put({
        type: 'querySuccess',
        payload: {
          list: data,
        },
      });
    },
    *gallery ({ payload }, { call, put }) {
      const { data, headers } = yield call(servs.gallery, parse(payload))
      //console.log(data)
      yield put({
        type: 'gallerySuccess',
        payload: {
          cards: data,
        },
      });
    },
  },
  reducers: {
    changeCate(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
    gallerySuccess(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
    querySuccess(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    }
  },
}
