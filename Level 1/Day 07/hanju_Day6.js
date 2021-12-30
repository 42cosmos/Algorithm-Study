function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach((e) => {
        if(e % divisor == 0)
        {
            answer.push(e);
        }
    });
    
    if(answer.length)
    {
        answer = answer.sort((a, b) => a - b);
    }
    else
    {
        answer.push(-1);
    }
    
    return answer;
}
