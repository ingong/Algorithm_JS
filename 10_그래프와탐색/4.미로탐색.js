function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));

// 최소 거리가 아니라 완전탐색이다
// dx, dy 를 지정해서 왼쪽, 위, 오른쪽, 아래방향을 탐색하게 설정한다
// 그래프의 종착지점일 경우 answer++;
// 종착점을 찍고, 돌아오면서도 탐색을 한다는걸 새로 알았다
// nx 랑 ny 를 x + dx[k], ny = y + dy[k] 로 설정해서 한다
// nx, ny 0 보다 크거나 같고, 6보다 작거나 같을 때, board[nx][ny] === 0 일 때, 그래프랑 동일하게 탐색
