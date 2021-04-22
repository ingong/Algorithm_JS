// 내 풀이
// function solution(n, arr) {
//   var answer = [...arr];
//   for (var i = 0; i < n; i++) {
//     var idx = i;
//     for (var j = i + 1; j < n; j++) {
//       var temp = answer[i];
//       if (answer[idx] > answer[j]) {
//         idx = j;
//       }
//       answer[i] = answer[idx];
//       answer[idx] = temp;
//     }
//   }
//   return answer;
// }

// var arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(6, arr));

// todo 개선된 풀이
// 1. for 문 밖에서 값을 바꿔줌으로써 한 번만 수정하는 것이 가능해졌다
// 2. 배열간의 요소간의 치환 [arr[i], arr[idx]] = [arr[idx], arr[i]];
function solution(n, arr) {
  var answer = [...arr];
  for (var i = 0; i < n; i++) {
    let idx = i;
    for (var j = i + 1; j < n; j++) {
      if (answer[idx] > answer[j]) idx = j;
    }
    [answer[i], answer[idx]] = [answer[idx], answer[i]];
  }
  return answer;
}

var arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));
