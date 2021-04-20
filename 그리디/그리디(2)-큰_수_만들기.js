function solution(number, k){

    let stack = [];
    for (let i = 0; i < number.length; i++){
        let now = number[i];
        while (k > 0 && stack[stack.length - 1] < now){
            stack.pop();
            k--;
        }
        stack.push(now);
    }
    stack.splice(stack.length - k, k);
    let answer = stack.join('');
    return answer;
}

let a = solution("1924", 2);
console.log(a);
