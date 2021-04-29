function solution(N, M, arr) {
  let answer = [];
  let temp = Array.from({ length: M }, () => 0);
  let tempChk = Array.from({ length: N }, () => 0);
  function DFS(L) {
    if (L === M) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < N; i++) {
        if (tempChk[i] === 0) {
          tempChk[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          tempChk[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let N = 3;
let M = 2;
let arr = [3, 6, 9];
console.log(solution(N, M, arr));
