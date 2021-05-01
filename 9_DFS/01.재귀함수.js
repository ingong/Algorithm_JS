// 재귀함수와 스택프레임
// 스택의 형태로 쌓이며, 매개변수, 지역변수, 복귀주소를 갖는다
function solution(n) {
  function DFS(n) {
    if (n === 0) return;
    DFS(n - 1);
    console.log(n);
  }
  DFS(n);
}

solution(3);
