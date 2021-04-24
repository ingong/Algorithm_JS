function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
// 내장함수를 잘 활용해야한다 JS 에서는
// return 에서 삼항연산자를 잘 활용해야한다!
