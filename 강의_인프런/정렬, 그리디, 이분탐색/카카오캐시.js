// function solution(n, arr) {
//   var answer = [];
//   let i, j;
//   for (i = 0; i < arr.length; i++) {
//     if (answer.includes(arr[i]) === false) {
//       if (answer.length > n - 1) {
//         answer.pop();
//       }
//       answer.unshift(arr[i]);
//     } else {
//       var tempIndex = answer.indexOf(arr[i]);
//       var temp = answer[tempIndex];
//       for (j = tempIndex - 1; j >= 0; j--) {
//         answer[j + 1] = answer[j];
//       }
//       answer[j + 1] = temp;
//     }
//   }
//   return answer;
// }

// function solution(size, arr) {
//   //answer 라는 array 의 크기와 해당 요소 값을 0 으로 초기화
//   let answer = Array.from({ length: size }, () => 0);
//   arr.map((data) => {
//     // position 을 -1 로 초기화
//     // miss 난 경우에는 position 에 해당 i 값을 저장
//     let position = -1;
//     for (let i = 0; i < size; i++) if (data === answer[i]) position = i;
//     if (position === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = position; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//       // 반복을 방지하기 위해 맨 밑으로
//     answer[0] = data;
//   });
//   return answer;
// }
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.map((data) => {
    let position = -1;
    for (let i = 0; i < arr.length; i++) if (answer[i] === data) position = i;
    if (position === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = position; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = data;
  });
  return answer;
}

const n = 5;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(n, arr));
