function solution(participant, completion) {
    var answer = '';
    
    var sortedArr1 = participant.sort();  // participant 정렬
    var sortedArr2 = completion.sort();   // completion 정렬
    
    for(var i = 0; i < sortedArr2.length; i++) // 정렬된 배열의 요소가 다를 경우 
    {
        if(sortedArr1[i] != sortedArr2[i])
        {
            return answer = sortedArr1[i];                
        }
        
         if(!answer && (i == sortedArr2.length - 1)) // i가 인덱스의 끝까지 갔을 경우
         {
            return answer =  sortedArr1[i+1];
         }
    }
}
