export default {
  namespace: 'weixin',
  state: {
    curpath: 'weixin',
    cate: 'recommend',
    card: [
      'aaaa', 'bbb', 'cccc',
    ],
  },
  effects: {},
  reducers: {
    changeCate(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
