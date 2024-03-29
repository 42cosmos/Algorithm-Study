#include <string>
#include <vector>
#include <math.h>
#define MAX 1000001

using namespace std;

// TIME OUT!!
// bool isPrime(int num) {
//     if (num % 2 == 0) return false;
    
//     for (int i = 3; i*i <= num; i++)
//         if (num % i == 0) 
//             return false;
// 	return true;
// }

// 1이면 소수, 0이면 소수 아님!
int not_prime_nums[MAX] = {0, 1, 0, }; 

int solution(int n) {
    int answer = 0;
    
    for (int p = 2; p <= n; p++) {
        if (not_prime_nums[p] == 0) {
            // p의 i 배수를 모두 소수 처리
            for (int i = 2; p*i <= n; i++){
                not_prime_nums[p*i] = 1;
            }
        }
    }
    for (int i = 1; i <= n; i++) {
        if (not_prime_nums[i] == 0)
            answer++;
    }
    
    return answer;
}