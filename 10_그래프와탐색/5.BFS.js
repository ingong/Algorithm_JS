// function solution() {
//   let answer = "";
//   let queue = [];
//   queue.push(1);
//   while (queue.length) {
//     let v = queue.shift();
//     answer += v + "";
//     for (let nv of [v * 2, v * 2 + 1]) {
//       if (nv > 7) continue;
//       console.log(nv);
//       queue.push(nv);
//     }
//   }
//   return answer;
// }

// console.log(solution());
// queue 를 통해서 같은 level 인 경우에 queue 에 전부다 넣어준다
// shift 를 통해서 맨 앞부터 하나씩 빼서 v 라는 변수에 넣어준다
// queue 에서 뺀 값을 answer 에 넣어준다
// 원하는 수만큼 for (let nv of [ ~ ]) 로 그 다음 그래프에 뻣는 가지를 만들어준다
// 그 가지를 뻣으면서 queue 에 push 해준다
// 최소거리를 탐색하고

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length > 0) {
    let v = queue.shift();
    answer += v + "";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}
console.log(solution());

//! Level 로 풀기
// function solution(s, e){
//     let answer=0;
//     let ch=Array.from({length:10001}, ()=>0);
//     let queue=[];
//     queue.push(s);
//     ch[s]=1;
//     let L=0;
//     while(queue.length){
//         let len=queue.length;
//         for(let i=0; i<len; i++){
//             let x=queue.shift();
//             for(let nx of [x-1, x+1, x+5]){
//                 if(nx===e) return L+1;
//                 if(nx>0 && nx<=10000 && ch[nx]===0){
//                     ch[nx]=1;
//                     queue.push(nx);
//                 }
//             }
//         }
//         L++;
//     }
//     return answer;
// }

// console.log(solution(5, 14));
