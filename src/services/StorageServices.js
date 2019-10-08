export default {
  exists(key) {
    return window.localStorage.getItem(key) != null;
  },
  getFrom(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  setIn(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};
