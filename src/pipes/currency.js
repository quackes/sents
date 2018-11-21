// @flow

import Vue from 'vue';

Vue.filter('currency', function (value: number): string {
  return value + '€';
})