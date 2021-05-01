function solution(N, M) {
  let answer = [];
  let temp = Array.from({ length: M }, () => 0);
  function DFS(L, s) {
    if (L === M) {
      answer.push(temp.slice());
    } else {
      for (let i = s; i <= N; i++) {
        temp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
