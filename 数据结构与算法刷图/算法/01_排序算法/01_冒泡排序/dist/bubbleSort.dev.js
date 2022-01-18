"use strict";

/*
 * @Author: luyou
 * @Date: 2022-01-17 21:29:10
 * @LastEditTime: 2022-01-17 22:04:47
 * @LastEditors: luyou
 * @Description: 
 * @FilePath: \数据结构与算法刷图\算法\01_排序算法\01_冒泡\bubbleSort.js
 */
var bubbleSort = function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}; // 优化冒泡排序


var optimizeBubbleSort = function optimizeBubbleSort(arr) {
  var copyArr = JSON.parse(JSON.stringify(arr));
  var isReverse = false;

  for (var i = 0; i < arr.length - 1; i++) {
    var isEnterSort = 0;

    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        i === 0 && isEnterSort++;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (i === 0 && (isEnterSort === 0 || isEnterSort === arr.length - 1)) {
      if (isEnterSort === arr.length - 1) {
        isReverse = true;
      }

      break;
    }
  }

  return isReverse ? copyArr.reverse() : arr;
};

console.log(bubbleSort([10, 2, 12, 32])); // 优化冒泡 特殊情况
// 最好情况

console.log(optimizeBubbleSort([1, 2, 3, 4, 5])); // 最坏情况

console.log(optimizeBubbleSort([5, 4, 3, 2, 1]));