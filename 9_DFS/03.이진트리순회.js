// 3. 이진트리 순회
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(2 * v);
      console.log(v);
      DFS(2 * v + 1);
    }
  }
  DFS(v);
  return answer;
}

solution(1);
// 규칙 : 왼쪽 = 부모 * 2 / 오른쪽 = 부모 * 2 + 1
// 전위순회 출력 : 부모 왼쪽 오른쪽
// 중위순회 출력 : 왼쪽 부모 오른쪽
// 후위순회 출력 : 왼쪽 오른쪽 부모
