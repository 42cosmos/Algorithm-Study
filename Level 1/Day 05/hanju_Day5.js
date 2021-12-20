function solution(seoul) {
    
    function findKim(element)  
    {
       if(element == "Kim") return true;
    }
    
    return "김서방은 " + seoul.findIndex(findKim) + "에 있다";
}
