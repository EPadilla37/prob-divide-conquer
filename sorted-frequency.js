function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    let lastIdx = findLast(arr, num);
  
    if (firstIdx === -1) {
      return -1;
    }
  
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIdx = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        firstIdx = mid;
        right = mid - 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return firstIdx;
  }
  
  function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIdx = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        lastIdx = mid;
        left = mid + 1;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return lastIdx;
  }
  
  module.exports = sortedFrequency;
  