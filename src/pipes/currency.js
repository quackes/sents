// @flow

import Vue from 'vue';

Vue.filter('currency', function(value) {
  return value / 100 + ' €';
});
