function solution(a, b) {
    
    var sum = 0;
    
    if(a > b)
    {
        for(let i = a; i >= b; i--)
        {
            sum += i;        
        }
        return sum;
    }
    else if(a < b)
    {
        for(let i = b; i >= a; i--)
        {
            sum += i;        
        }
        return sum;
    }
    else
    {
        return a;
    }
}
