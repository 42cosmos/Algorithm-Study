function solution(s, n) {
    var answer = '';
    
    const MaxAlpha = 'Z';
    const MinAlpha = 'A';
    
    s = s.split("").forEach((alpha) => {
        if(alpha == " ") 
        {
            answer += " ";
        }
        else if(alpha.charCodeAt(0) < MaxAlpha.charCodeAt(0) + 1)
        {
            if(alpha.charCodeAt(0) + n > MaxAlpha.charCodeAt(0))
            {
                alpha = String.fromCharCode(alpha.charCodeAt(0) + n 
                    - MaxAlpha.charCodeAt(0) + 64)
                answer += alpha;
            }
            else
            {
                alpha = String.fromCharCode(alpha.charCodeAt(0) + n);
                answer += alpha;
            }
        }
        else 
        {
            if(alpha.charCodeAt(0) + n > MaxAlpha.toLowerCase().charCodeAt(0))
            {
                alpha = String.fromCharCode(alpha.charCodeAt(0) + n 
                    - MaxAlpha.toLowerCase().charCodeAt(0) + 96)
                answer += alpha;
            }
            else
            {
                alpha = String.fromCharCode(alpha.charCodeAt(0) + n);
                answer += alpha;
            }
        }
    })
    return answer;
}
