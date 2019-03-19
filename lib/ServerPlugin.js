/**
 * Universal Cookie for Vue.js
 *
 * @author Anton Desin anton.desin@gmail.com
 * @copyright (c) Anton Desin | Интернет-агентство IT People
 * @link https://itpeople.ru
 */

export const ServerPlugin = {
  install (Vue, options) {
    Vue.prototype.$cookie = options.cookieApi;
  }
};