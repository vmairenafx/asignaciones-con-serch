let input = [3, 6, 12, 5, 100, 1];

document.getElementById("initial-array").innerHTML=`${input}`;
document.getElementById("result").innerHTML=`${bubbleSort(input)}`;

function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  

  
  
  