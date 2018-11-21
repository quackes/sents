// @flow

import Vue from 'vue';

Vue.filter('percent', function(value) {
  return value + ' %';
});
