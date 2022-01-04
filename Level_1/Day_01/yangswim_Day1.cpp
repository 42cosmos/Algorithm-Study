#include <string>
#include <vector>
#include <algorithm>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    // 모든 참가자 정렬
    sort(participant.begin(), participant.end());
    // 모든 완주자 정렬
    sort(completion.begin(), completion.end());

    for (int i = 0; i < participant.size(); i++){
        if (participant[i] != completion[i]) {
            return participant[i];
        }
    }
    
    // 완주자는 참가자보다 항상 크기가 1 작음
    return participant[participant.size()-1];
}