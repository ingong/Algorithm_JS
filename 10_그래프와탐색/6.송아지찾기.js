// 1. distance 배열을 활용해서 최단 거리 산출하기
// function solution(start, end) {
//   let answer = 0;
//   let queue = [];
//   let distance = Array.from({ length: 10001 }, () => 0);
//   let check = Array.from({ length: 10001 }, () => 0);
//   distance[start] = 0;
//   check[start] = 1;
//   queue.push(start);
//   while (queue.length) {
//     let n = queue.shift();
//     for (nv of [n + 1, n - 1, n + 5]) {
//       if (nv === end) return distance[n] + 1;
//       if (nv > 0 && nv <= 10000 && check[nv] === 0) {
//         check[nv] = 1;
//         queue.push(nv);
//         distance[nv] = distance[n] + 1;
//       }
//     }
//   }
//   return answer;
// }

// let start = 5;
// let end = 14;
// console.log(solution(5, 14));

// distance 와 check 배열을 활용한다.
// 부모 노드가 갖고 있는 distance 의 값에서 1을 더해준다
// 우리가 원하는건 distance[nv] 의 값이므로 distance[n]+1 을 해준다.

// 2. level 을 통해서 문제 풀기
function solution(start, end) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  check[start] = 1;
  queue.push(start);
  let level = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let n = queue.shift();
      for (let nv of [n + 1, n - 1, n + 5]) {
        if (nv === end) return level + 1;
        if (nv > 0 && nv <= 10000 && check[nv] === 0) {
          check[nv] = 1;
          queue.push(nv);
        }
      }
    }
    level++;
  }
}

let start = 5;
let end = 14;
console.log(solution(5, 14));
