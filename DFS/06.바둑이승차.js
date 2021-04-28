function solution(maxWeight, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > maxWeight) return;
    //   n 까지 다 도는 것은 맞다, 종료조건을 잊지말자!
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  // 함수 실행을 안했다
  DFS(0, 0);
  return answer;
}

let maxWeight = 259;
let arr = [81, 58, 42, 33, 61];
console.log(solution(maxWeight, arr));
