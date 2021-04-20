function solution(n) {
  let answer = 0;
  let arr = [];

  let startTime = new Date();

  // 빈 배열에 값 초기화
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0)
      // 이미 체크된 수의 배수는 확인하지 않는다
      continue;

    for (let j = i + i; j <= n; j += i) {
      // i를 제외한 i의 배수들은 0으로 체크
      arr[j] = 0;
    }
  }

  // 0이 아닌 수들은 모두 소수이므로, answer을 증가한다.
  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) answer++;
  }

  let endTime = new Date();
  let gapTime = endTime.getTime() - startTime.getTime();
  console.log("gapTime: ", gapTime + "ms");

  return answer;
}
