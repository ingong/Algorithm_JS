function solution(n, arr) {
  let answer = 0;
  let path = [];
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let graphchk = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      answer += 1;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && graphchk[i] === 0) {
          graphchk[i] = 1;
          path.push(i);
          DFS(i);
          graphchk[i] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  graphchk[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));

// graph 는 0번째 index 를 제외하고 2차원 배열의 크기로 만든다
// 기존에 들어갔던 그래프는 탐색하면 안되므로, grpahchk 라는 배열을 만들어서 확인해준다
// DFS 로 그래프의 노드를 순환할 때, 다시 돌아나올 때 체크를 풀어줘야한다. 동일하게 path 에서도 push 후에는 pop 을 통해서 빼줘야한다
// path 를 정의해서, 결과창일 때만 path 를 출력할 수 있다.
// 처음시작할 때, graphchk[1] = 1 로 만들어준다
