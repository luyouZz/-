"use strict";

/*
 * @Author: luyou
 * @Date: 2022-01-18 21:29:48
 * @LastEditTime: 2022-01-18 22:22:26
 * @LastEditors: luyou
 * @Description: 轮转数组
 * @FilePath: \LearnToleetcode\数据结构与算法刷图\leetcode\189.js
 */
var rotate = function rotate(nums, k) {
  var reverse = function reverse(arr, x, y) {
    while (x <= y) {
      var temp = arr[x];
      arr[x] = arr[y];
      arr[y] = temp;
      x++;
      y--;
    }
  }; // 要考虑当路只有3个，要走4步时，应该会走完然后回到起点，所以就是反转1步


  k %= nums.length;
  var len = nums.length - 1;
  reverse(nums, 0, len);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len);
};

var a = [1, 2, 3, 4, 5, 6, 7];
rotate(a, 3);