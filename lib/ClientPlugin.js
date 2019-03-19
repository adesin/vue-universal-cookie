/**
 * Universal Cookie for Vue.js
 *
 * @author Anton Desin anton.desin@gmail.com
 * @copyright (c) Anton Desin | Интернет-агентство IT People
 * @link https://itpeople.ru
 */

import Cookies from 'universal-cookie';

export const ClientPlugin = {
  install (Vue, options) {
    Vue.prototype.$cookie = new Cookies();
  }
};