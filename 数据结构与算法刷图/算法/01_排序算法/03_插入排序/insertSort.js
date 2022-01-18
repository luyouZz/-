/*
 * @Author: luyou
 * @Date: 2022-01-18 23:35:50
 * @LastEditTime: 2022-01-19 00:00:52
 * @LastEditors: luyou
 * @Description: 插入排序
 * @FilePath: \LearnToleetcode\数据结构与算法刷图\算法\01_排序算法\03_插入排序\insertSort.js
 */

let insertSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let count = i - 1
    let current = nums[i]
    while(nums[count] > current && count>=0) {
      nums[count + 1] = nums[count]
      count--
    }
    console.log(nums, count, "count")
    nums[count+1] = current
  }
}

insertSort([1,2,4,5,2,8])