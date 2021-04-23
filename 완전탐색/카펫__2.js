//todo 해결 포인트
// 1. i 와 x 로 brown 과 red 타일의 합의 약수를 산출하기
//

//todo 체크 포인트
// 1. i <= (brown + red)i 로 한다는거
// why? i 가 그 수의 제곱근 이상이 넘어가게하는 것은 무의미하기때문에
// 2. for 문을 중단하는 조건에서 if 를 사용했다는 것
// 3. var 를 사용하기 let 은 블록 스코프이기 때문에
// 4. 가로가 더 큰 길이이기 때문에 [x, i ]

function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((i - 2) * (x - 2) === red) {
      break;
    }
  }
  return [x, i];
}
