const bubbleSort = (arrayToSort) => {

  const arr = arrayToSort.slice();
  let swap = true;

  while (swap) {
    swap = false;
    for (let i=0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swap = true;
      }
    } // end for
  } // end while

  return arr;
}

console.log(bubbleSort([6, 5, 4, 7]));