function solution(N, M) {
  let answer = [];
  let temp = Array.from({ length: M }, () => 0);
  function DFS(L) {
    if (L === M) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= N; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

let N = 3;
let M = 2;
console.log(solution(N, M));
