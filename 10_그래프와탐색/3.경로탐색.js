function solution(n, arr) {
  let answer = 0;
  let path = [];
  let graph = Array.from(Array(n + 1), () => Array());
  let graphchk = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      answer += 1;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (graphchk[graph[v][i]] === 0) {
          graphchk[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          graphchk[graph[v][i]] = 0;
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

// 노드의 개수가 엄청나게 많을 때는, 인접행렬이아닌 인접리스트로 만든다.
// 해당 노드를 열에 집어넣고, 해당 노드에서 방문할 수 있는 노드의 번호를 넣어준다.
// 탐색하는 경우도 해당 열이 갖고 있는 개수를 의미한다.
// 탐색하는 대상도 i 가 아니라, grpah[v][i] 를 탐색한다.
