/*
 * @Author: luyou
 * @Date: 2022-01-18 23:09:46
 * @LastEditTime: 2022-01-19 21:12:31
 * @LastEditors: luyou
 * @Description: 
 * @FilePath: \LearnToleetcode\数据结构与算法刷图\算法\01_排序算法\02_选择排序\selectionSort.js
 */

var selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if(nums[j] < nums[i]) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
  }
  console.log(nums)
}


var selectionSort1 = (nums) => {
  let minIndex, temp
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      minIndex = i
      if(nums[j] < nums[i]) {
        minIndex = j
      }
      temp = nums[minIndex]
      nums[minIndex] = nums[i]
      nums[i] = temp
    }
  }
  console.log(nums)
}

console.log(selectionSort([1, 2, 7, 4, 5])) // 找小的然后进行交换，最后一定是最小的，但是会多次进行交换
console.log(selectionSort1([1, 2, 7, 4, 5])) // 存储最小的索引，循环完在进行交换