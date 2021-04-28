// 수형도를 열심히 그리자. index 로 접근한다
// Level 1 일 때, 해당 index 가 0이다!
function solution(proScore, proTime, limit) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = proScore.length;
  function DFS(L, score, time) {
    if (time > limit) return;
    if (L === n) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + proScore[L], time + proTime[L]);
      DFS(L + 1, score, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let proScore = [10, 25, 15, 6, 7];
let proTime = [5, 12, 8, 3, 4];
let limit = 20;
console.log(solution(proScore, proTime, limit));
