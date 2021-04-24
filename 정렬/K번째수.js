var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
var result = [5, 6, 3];

//todo 빠르게 푼 나의 풀이
// function solution(array, commands) {
//   var answer = [];
//   for (var i = 0; i < commands.length; i++) {
//     const something = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[commands[i][2] - 1];
//     answer.push(something);
//   }
//   return answer;
// }

// todo 배열의 내장함수를 활용한 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;

    const newArray = array
      .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex < ePosition)
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

console.log(solution(array, commands));
