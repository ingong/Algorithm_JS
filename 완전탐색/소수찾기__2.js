function solution(numbers) {
  let answer = 0;
  let seperateNumber = [...numbers];
  let checkHasnumber = new Set();
  combi(seperateNumber, "");

  function combi(beforeSplit, afterSplit) {
    if (afterSplit.length > 0) {
      if (checkHasnumber.has(Number(afterSplit)) === false) {
        checkHasnumber.add(Number(afterSplit));
        if (checkPrime(Number(afterSplit))) {
          answer += 1;
        }
      }
    }
    if (beforeSplit.length > 0) {
      for (let i = 0; i < beforeSplit.length; i++) {
        let temp = [...beforeSplit];
        temp.splice(i, 1);
        combi(temp, afterSplit + beforeSplit[i]);
      }
    }
  }

  function checkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
