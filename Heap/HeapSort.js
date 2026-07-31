let arr = [5, 3, 8, 4, 2, 7, 1, 6];

function heapSort(arr) {
  let n = arr.length;

  // create a max heap
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // sort the array

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }

  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;

  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

const sortedArray = heapSort(arr);
console.log(sortedArray);
