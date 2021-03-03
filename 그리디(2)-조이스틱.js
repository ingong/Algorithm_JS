//todo
//1. 상 하로 움직이는 횟수 그리고 좌 우로 움직이는 횟수를 나눠서 구한다
//2. 상 하로 움직이는 횟수는 charCode 를 이용해서 구한다 
//3. 좌 우로 움직이는 경우 기본적으로는 우 방향으로 움직이나, A 의 갯수로 인해 좌로 움직이는게 더 최소 횟수를 가질 수 있다
// - 이를 aList 라는 배열에 idx, cnt 라는 key 를 갖고 있는 객체의 형태로 저장한다


function solution(name) {
    // 위 아래로 움직이는 횟수를 담기 위한 변수
    let answer = 0;
    // 좌 우로 움직은 횟수를 담기 위한 변수
    let turn = 0;
    // 좌 우로 움직이는 횟수를 담기 위해선 A 의 갯수를 확인해야한다
    let aList =[]

    // ? for in, for of 문의 차이  
    // for of 를 통해 문자열의 각 문자를 순회
    for(const char of name){
        answer+=changeCharCount(char)
    }

    // 첫 번째 문자가 A 라면 idx: 0, cnt: 1 을 초기화해서 넣는다 
    if(name[0]==="A") aList.push({idx:0,cnt:1})

    // 두 번째 문자부터 다시 비교를 통해서 idx: 문자의 순서 / cnt: 누적 A 의 갯수
    // 이전 문자열과 현재 문자열이 둘다 A 이면 cnt++
    // 이전 문자열이 다르면 새로운 요소를 만들어서 넣어준다
    for(let i=1; i<name.length; i++){
        if(name[i-1]==="A" && name[i]==="A"){
            aList[aList.length-1].cnt++
        }else if(name[i-1]!=="A" && name[i]==="A"){
            aList.push({idx:i,cnt:1})
        }
    }

    // aList 를 내림차순으로 정렬
    aList.sort((a,b)=>b.cnt-a.cnt)
    //앞에 있는 개수보다 A개수가 더 많을때
    //aList.length 는 총 반복 A 문자열의 반복된 횟수
    
    //? aList 의 길이가 0 이면 뒤에 거를 비교하지 않음 : 용어가 기억이 안나
    // A 가 시작하는 위치랑 A 전까지의 갯수를 비교 
    if(aList.length && aList[0].idx<=aList[0].cnt){
        // a 가 없다고 가정 -> 3 / 5 
        // name.length - 1 - aList[0].cnt + (aList[0].idx - 1)   
        // B C C A A A A B 
        turn = (name.length-aList[0].cnt-1)+(aList[0].idx-1)
    }else{ 
        turn = name.length-1
    }
    return answer+turn;
}

// 문자를 조이스틱 위로 조작할지 아래로 조작할지를 선택
function changeCharCount (char){
    let charCode = char.charCodeAt()
    let start = 'A'.charCodeAt()
    const end = 'Z'.charCodeAt()
    return Math.min(end-charCode+1,charCode-start)
}
