function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  let nums = new Set();
  for (let x of arr) {
    let result = Number(x.toString().split("").reverse().join(""));
    if (isPrime(result) && nums.has(result) === false) {
      answer.push(result);
      nums.add(result);
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(...solution(arr));
