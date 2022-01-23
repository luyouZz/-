"use strict";

/*
 * @Author: luyou
 * @Date: 2022-01-20 00:25:50
 * @LastEditTime: 2022-01-23 15:53:42
 * @LastEditors: luyou
 * @Description: 
 *  插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率, 
 * 所以诞生了希尔排序，将数据先进行整理，使得部分有序。在进行插入排序
 * @FilePath: \LearnToleetcode\数据结构与算法刷图\算法\01_排序算法\04_希尔排序\shellSort.js
 */
var shellSort = function shellSort(nums) {
  var len = nums.length,
      temp; // 步长

  for (var gap = len / 2; gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < len; i++) {
      var j = i;

      while (j - gap >= 0 && nums[j] < nums[j - gap]) {
        temp = nums[j];
        nums[j] = nums[j - gap];
        nums[j - gap] = temp;
        j -= gap;
      }
    }
  }

  console.log(nums);
};

var nums = [3, 2, 4, 8, 10, 8];
shellSort(nums);