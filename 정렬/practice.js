function solution(numbers) {
  var answer = 0;
  var splitNumber = numbers.split("");
  var checkHasnumber = new Set();
  combi(splitNumber, "");

  function combi(before, after) {
    if (after.length > 0) {
      if (checkHasnumber.has(Number(after)) === false) {
        checkHasnumber.add(Number(after));
        if (checkPrime(Number(after))) {
          answer++;
        }
      }
    }
    if (before.length > 0) {
      for (var i = 0; i < before.length; i++) {
        var temp = [...before];
        temp.splice(i, 1);
        combi(temp, after + before[i]);
      }
    }
  }
  function checkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return answer;
}

console.log(solution("17"));
// function solution(numbers) {
//     var splitnumbers = numbers.split("");
//     var answer = 0;
//     var nums = new Set();
//     combi(splitnumbers, "");

//     function combi(beforeSplit, afterSplit){
//         if(afterSplit.length > 0){
//             if (nums.has(Number(afterSplit)) === false) {
//                 nums.add(Number(afterSplit))
//                 if (chkPrime(Number(afterSplit))) {
//                     answer++;
//                 };
//             }
//         }

//         if(beforeSplit.length > 0){
//             for (var i = 0; i < beforeSplit.length; i++){
//                 var t = [...beforeSplit]
//                 t.splice(i, 1);
//                 combi(t, afterSplit + beforeSplit[i])
//             }
//         }
//     }

//     function chkPrime(num){
//         if (num === 2) return true;
//         if (num < 2) return false;
//         for (var i = 2; i <= Math.sqrt(num); i++){
//             if (num % i === 0) return false;
//         }
//         return true;
//     }
//     return answer;
// }

//todo 놓친 부분
// Number
// beforeSplit 의 길이가 0보다 클 때
// 이걸 복사하고, splice 로 하나만 쪼개서 i 부터 하나만 갖게 만듬
