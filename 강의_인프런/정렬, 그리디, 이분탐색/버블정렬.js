//todo 버블정렬
//기본적으로 이중반복문
//i : 실행 횟수 마지막은 안해도 된
//j : 맨마지막부분은 정렬되니깐 끝범위가 i 만큼 준다는거!

//! length 실수하지 맙시다!
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

var arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
