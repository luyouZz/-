/*
 * @Author: luyou
 * @Date: 2022-01-18 20:56:54
 * @LastEditTime: 2022-01-18 22:22:00
 * @LastEditors: luyou
 * @Description:  有序数组的平方
 * @FilePath: \LearnToleetcode\数据结构与算法刷图\leetcode\977.js
 */
var sortedSquares = function(nums) {
  let rs = []
  let left = 0;
  let right = nums.length - 1
  let pos = nums.length - 1
  while(left <= right) {
      if(nums[left]*nums[left] > nums[right]*nums[right]) {
          rs[pos] = nums[left]*nums[left]
          left++
      } else {
          rs[pos] = nums[right]*nums[right]
          right--
      }
      pos--
  }
  return rs
};

console.log(sortedSquares([-4,-1,0,3,10]))