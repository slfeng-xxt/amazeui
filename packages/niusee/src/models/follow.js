export default {
  namespace: 'follow',
  state: {
    curpath: 'myfollow',
    which: 'school',
  },
  reducers: {
    changeTab(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    }
  },
}
