/*
 * @Author: luyou
 * @Date: 2022-01-17 21:29:10
 * @LastEditTime: 2022-01-17 22:04:47
 * @LastEditors: luyou
 * @Description: 
 * @FilePath: \数据结构与算法刷图\算法\01_排序算法\01_冒泡\bubbleSort.js
 */

var bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// 优化冒泡排序
var optimizeBubbleSort = (arr) => {
  let copyArr = JSON.parse(JSON.stringify(arr))
  let isReverse = false
  for (let i = 0; i < arr.length - 1; i++) {
    let isEnterSort = 0
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        i === 0 && isEnterSort++
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if (i === 0 && (isEnterSort === 0 || isEnterSort === arr.length - 1)) {
      if (isEnterSort === arr.length - 1) {
        isReverse = true
      }
      break
    }
  }
  return isReverse ? copyArr.reverse() : arr
}



console.log(bubbleSort([10, 2, 12, 32]))

// 优化冒泡 特殊情况

// 最好情况
console.log(optimizeBubbleSort([1, 2, 3, 4, 5]))
// 最坏情况
console.log(optimizeBubbleSort([5, 4, 3, 2, 1]))