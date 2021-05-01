var citations = [3, 0, 6, 1, 5];
function solution(citations) {
  var answer = citations.sort((a, b) => b - a).filter((value, cIndex) => cIndex + 1 <= value);
  return answer.pop();
}

// 정렬을 하고,
// 나의 인덱스 + 1 <= 나의 value

console.log(solution(citations));
