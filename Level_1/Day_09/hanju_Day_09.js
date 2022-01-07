function solution(s){
    var answer = true;
    var pCount = 0; // p의 개수
    var yCount = 0; // y의 개수
    
    s = s.toLowerCase().split(""); // 문자열 소문자 변환 
    
    console.log(s)
    s.forEach((value) => {   // p와 y의 개수 증가
        if(value == "p")
        {
            pCount++;
        }
        else if(value == "y")
        {
            yCount++;
        }
    })
    
    // p와 y의 개수가 다를 경우
    if(pCount != yCount && (pCount != 0 || yCount!= 0))
    {
        answer = false;
    }

    return answer;
}
