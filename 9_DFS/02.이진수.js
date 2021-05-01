// parseInt 로 소수점 이하를 버린 값을 계산
// 답을 다 더해주기 위해 answer 에 계속 더해주고, 나머지값을 string화 시켜서 더해준다
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
