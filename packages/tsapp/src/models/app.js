export default {
  namespace: 'app',
  state: {
    isVisible: false,
  },
  reducers: {
    showModal(state) {
      return {
        ...state,
        isVisible: true,
      }
    },
    hideModal(state) {
      return {
        ...state,
        isVisible: false,
      }
    },
  },
}
