function solution(n, arr) {
  var answer = [];
  let i, j;
  for (i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i]) === false) {
      if (answer.length > n - 1) {
        answer.pop();
      }
      answer.unshift(arr[i]);
    } else {
      var tempIndex = answer.indexOf(arr[i]);
      var temp = answer[tempIndex];
      for (j = tempIndex - 1; j >= 0; j--) {
        answer[j + 1] = answer[j];
      }
      answer[j + 1] = temp;
    }
  }
  return answer;
}

const n = 5;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(n, arr));
