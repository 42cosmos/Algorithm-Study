function solution(n, lost, reserve) {

    var flag = false;
    
    for(let i = 0; i < reserve.length; i++)
    {
        flag = false;
        for(let j = 0; j < lost.length; j++)
        {
            if(reserve[i] == lost[j])
            {
                reserve.splice(i, 1);
                lost.splice(j, 1);
                flag = true;
                break;
            }
        }
        if(flag) i--;
    }
    
    lost = lost.sort();
    reserve = reserve.sort();
    
    reserve.forEach((element, index) => {
        var i = 0;
        flag = false;
        
        for(i; i < lost.length; i++)
        {
            if(Math.abs(element - lost[i]) == 1)
            {
                flag = true;
                break;
            }
        }
        if(flag) lost.splice(i, 1);
    })
    
    return n - lost.length;    
}
