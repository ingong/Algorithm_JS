// solution1 : does not use set => maximum 221
function solution(numbers) {
  let answer = 0;
  let primeNumbers = [];

  const numbersArr = numbers.split("");

  // 소수 판별 함수
  const determinePrime = (num) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
      }
      if (count >= 3) {
        break;
      }
    }
    if (count === 2 && !primeNumbers.includes(num)) {
      primeNumbers.push(num);
    }
  };

  // 숫자 만들기
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }

    if (str.length > 0) {
      determinePrime(+str);
    }
  };

  mergeNumbers(numbersArr, "");

  answer = primeNumbers.length;
  return answer;
}

// solution 2 : use set => max 47.6
function solution(numbers) {
  var answer = 0;

  var n = numbers.split("");
  var nums = new Set();
  combi(n, "");

  function combi(a, s) {
    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));
        console.log(Number(s));
        if (chkPrime(Number(s))) {
          answer++;
        }
      }
    }
    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {
        var t = a.slice(0);
        t.splice(i, 1);
        //console.log(t)
        combi(t, s + a[i]);
      }
    }
  }

  function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
