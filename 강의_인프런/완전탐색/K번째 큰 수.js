function solution(n, k, card) {
  let answer;
  let result = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        result.add(card[i] + card[j] + card[s]);
      }
    }
  }
  let resultArray = Array.from(result).sort((a, b) => b - a);
  answer = resultArray[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
