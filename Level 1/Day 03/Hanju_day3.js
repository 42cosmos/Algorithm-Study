function solution(n) {
    
    var answer = "";
    
    if(n == 1)
    {
        answer += "수";
    }
    else if(n % 2 == 0 && n != 0)
    {
        for(let i = 0; i < (n / 2); i++ )
        {
            answer += "수박";
        }         
    }
    else if(n % 2 == 1)
    {
        for(let j = 0; j < Math.floor(n / 2); j++) 
        {           
            answer += "수박";
            if(j == Math.floor(n / 2) - 1)
            {
                answer += "수";
            }
        }
    }

}
