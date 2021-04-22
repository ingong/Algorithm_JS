function solution(arr) {
  let answer = [...arr];
  for (let i = 0; i < answer.length; i++) {
    var temp = answer[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > temp) {
        answer[j + 1] = answer[j];
      } else break;
    }
    answer[j + 1] = temp;
  }
  return answer;
}

const arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
