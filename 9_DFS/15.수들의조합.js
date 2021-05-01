function solution(K, M, arr) {
  let answer = 0;
  let result;
  let N = arr.length;
  let temp = Array.from({ length: K }, () => 0);
  function DFS(L, s, sum) {
    if (L === K && sum % M === 0) answer += 1;
    //   result = temp.reduce((a, b) => a + b, 0);
    //   if (result % M === 0)
    else {
      for (let i = s; i < N; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let K = 3;
let M = 6;
let arr = [2, 4, 5, 8, 12];
console.log(solution(K, M, arr));
