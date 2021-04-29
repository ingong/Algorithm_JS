function solution(arr, result) {
  let answer = Number.MAX_VALUE;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > result) return;
    // if (L > answer) return;
    if (sum === result) {
      //   console.log(L);
      answer = Math.min(L, answer);
      //   console.log(answer);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
let result = 15;
console.log(solution(arr, result));
