function solution(N, result) {
  let answer,
    flag = 0;
  let combiArray = [];
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let temp = Array.from({ length: N }, () => 0);
  let tempChk = Array.from({ length: N }, () => 0);
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r) + combi(n - 1, r - 1));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === N && sum === result) {
      answer = temp.slice();
      flag = 1;
    } else {
      for (let i = 0; i < N; i++) {
        if (tempChk[i] === 0) {
          tempChk[i] = 1;
          temp[L] = i + 1;
          DFS(L + 1, sum + combiArray[L] * temp[L]);
          tempChk[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < N; i++) {
    combiArray.push(combi(N - 1, i));
  }
  DFS(0, 0);
  return answer;
  //   console.log(combiArray);
}

console.log(solution(4, 16));
