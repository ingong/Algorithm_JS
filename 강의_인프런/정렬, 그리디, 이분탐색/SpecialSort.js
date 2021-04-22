function solution(arr) {
  let answer = [...arr];
  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - i - 1; j++) {
      if (answer[j] > 0 && answer[j + 1] < 0) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }

  return answer;
}

const arr = [-3, -2, -6, 1, 2, 3, 5, 6];
console.log(solution(arr));
