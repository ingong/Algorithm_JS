// 중요
// 구명보트는 최대 2명, 무게제한 같음
// 구명보트 개수 최대한 적게 해서 return 
// 해결방법
// 배열을 정렬하고, 이를 앞에서부터 앞index 에서 출발, 뒤 index 에서 출발, 앞 index <= 뒤 index

function solution(people, limit){
    people.sort((a,b) => b - a);
    let frontIndex = 0;
    let backIndex = people.length - 1;
    let count = 0;
    while (frontIndex <= backIndex){
        if (people[frontIndex] + people[backIndex] <= limit){
            backIndex--;
            frontIndex++;
            count++;
        } else {
            frontIndex++;
            count++;
        }
    }
    return count;
}