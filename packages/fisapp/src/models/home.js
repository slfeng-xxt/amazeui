export default {
  namespace: 'home',
  state: 0,
  reducers: {
    add(count) { return count + 1; },
    minus(count) { return count - 1; },
  },
}
