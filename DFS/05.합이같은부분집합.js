function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
// 풀이 : D(L, sum)
// function solution(arr) {
//   let answer = "NO",
//     flag = 0;
//   let n = arr.length;
//   console.log(arr);
//   let total = arr.reduce((a, b) => a + b, 0);
//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n) {
//       if (total - sum === sum) {
//         answer = "YES";
//         flag = 1;
//       }
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// let arr = [1, 3, 5, 6, 7, 10];
// console.log(solution(arr));
// 문제 이해를 잘못한 풀이
// function solution(n, arr) {
//   let answer = [];
//   let check = Array.from({ length: n + 1 }, () => 0);
//   function DFS(v) {
//     if (v === n) {
//       let temp = "";
//       for (let i = 0; i < n; i++) {
//         if (check[i] === 1) temp += arr[i] + " ";
//       }
//       if (temp.length > 0) answer.push(temp.trim());
//     } else {
//       check[v] = 1;
//       DFS(v + 1);
//       check[v] = 0;
//       DFS(v + 1);
//     }
//   }
//   DFS(0);
//   let checkArr = new Set();
//   let result = "NO";
//   for (let i = 0; i < answer.length; i++) {
//     const total = answer[i].split(" ").map((ele) => Number(ele));
//     const sum = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     if (checkArr.has(sum)) {
//       result = "YES";
//       break;
//     } else {
//       checkArr.add(sum);
//     }
//   }
//   return result;
// }
