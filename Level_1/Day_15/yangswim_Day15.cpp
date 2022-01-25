
#include <iostream>
#include <string>
#include <vector>
#include <math.h>

using namespace std;

int calBonus(int s, char b)
{
    if (b == 'S'){
        return pow(s, 1);
    } else if (b == 'D') {
        return pow(s, 2);
    } else return pow(s, 3);
    
}

int solution(string dartResult) {
    int totalScore = 0;
    char bonus[3] = {'S', 'D', 'T'};
	// 이전 점수를 알아야 하기 때문에
	// 각 attempt 별 점수를 저장하기 위한 vector 선언
    vector<int> scores; 
    
    int idx = 0;
    int attempt = 3;
    
    while(attempt != 0) {
        // STEP 1. 점수 계산
        int score = 0;
		// 점수가 1점인지 10점인지 구별
        if (dartResult[idx] == '1') {
            if (dartResult[idx+1] == '0') {
				// 10점인 경우
                score = 10;
                idx += 2;
            } else {
				// 1점인 경우
                score = 1;
                idx++;
            }		
        } else {
			// 2 ~ 9점인 경우
            score = atoi(dartResult.c_str()+idx);
            idx++;
        }
        
		// STEP 2. Bonus 문자에 맞춰서 점수를 제곱하여 갱신
        for (int i =0; i < 3; i++){
            if (dartResult[idx] == bonus[i]){
                score = calBonus(score, bonus[i]);
                idx++;
                break;
            }
        }
        scores.push_back(score);
        
		// STEP 3. 스타상, 아차상 Option에 맞춰서 점수 갱신
        if (dartResult[idx] == '*') { 		 // 스타상인 경우..
            if (scores.size() == 1) { 		 // 이전 점수가 아직 없다면
                scores[0] *= 2;		 		 // 그냥 그 점수만 2배
            } else if (scores.size() == 2) { // 두 번째 시도에서 스타상이면
                scores[0] *= 2;				 // 1번째 시도와 2번째 시도의 점수를 각 2배
                scores[1] *= 2;
            } else { 						 // 마지막 시도에서 스타상인 경우
                scores[1] *= 2; 			 // 2번째 시도와 마지막 시도의 점수를 각 2배
                scores[2] *= 2;
            }
            idx++;
        } else if (dartResult[idx] == '#') { // 아차상인 경우는 각 시도의 점수에 -1배
            if (scores.size() == 1) {
                scores[0] *= -1;
            } else if (scores.size() == 2) {
                scores[1] *= -1;
            } else {
                scores[2] *= -1;
            }
            idx++;
        } else {
            continue;
        }
		// STEP 4. 던진 횟수를 -1
        attempt--;
    }
    
	// STEP 5. totalScore 계산
    for (int i=0; i < 3; i++)
        totalScore += scores[i];
    
    
    return totalScore;
}