function solution(s) {    
    
    if(s.length % 2 == 0) // 짝수
    {
        return s.substr(s.length / 2 - 1, 2);
    }
    else // 홀수
    {
        return s.substr(s.length / 2, 1);
    }
}
