function solution(dartResult) {
    // 점수만 담는 배열
    var scoreArr = [];
    // 입력값으로 들어온 문자열 -> 배열
    var dartArr = dartResult.split("");
    // 정수 10 판별후 배열에 담는다.
    for(let i = 0; i <= dartArr.length - 1; i++)
    {
        let value = dartResult.substr(i, 1);
        
        if(value <= 9)
        {
            if(dartResult.substr(i, 2) === '10')
            {
                scoreArr.push(10);
                i++;
                continue;
            }
            else
            {
                console.log("i : "+i);
                console.log("value : "+value);
                scoreArr.push(parseInt(value));
            }
        }
    }
    console.log(scoreArr);
    console.log("=====");
    
    var scoreArrIndex = -1;
    // 최종점수
    var finalScore = 0;
    
    // 'D', 'T', 'S' 그리고 '#', '*'에 따른 계산
    for(let i = 0; i < dartResult.length; i++)
    {
        let substrValue = dartResult.substr(i, 1);
        
        if(dartResult.substr(i, 2) === '10')
        {
            scoreArrIndex++;
            i++;
            continue;
        }
        else if(substrValue <= 10)
        {
            scoreArrIndex++;
            console.log("Index : " + scoreArrIndex);
            continue;
        } 
        else if(substrValue === 'S' || substrValue === 'D' || substrValue === 'T')
        {
            if(substrValue === 'S') continue; 
            else if(substrValue === 'D') scoreArr[scoreArrIndex] = scoreArr[scoreArrIndex] ** 2;
            else if(substrValue === 'T') scoreArr[scoreArrIndex] = scoreArr[scoreArrIndex] ** 3;
        }
        else
        {
            if(substrValue === '#')
            {
                scoreArr[scoreArrIndex] *= -1; 
            }
            else if(substrValue === '*')
            {
                if(scoreArrIndex != 0)
                {
                    scoreArr[scoreArrIndex - 1] *= 2;
                    scoreArr[scoreArrIndex] *= 2;
                }
                else if(scoreArrIndex == 0)
                {
                    scoreArr[scoreArrIndex] *= 2;
                }
            }
        }
        console.log(scoreArr);
    }
    
    scoreArr.forEach((e) => finalScore += e);
    return finalScore;
}
