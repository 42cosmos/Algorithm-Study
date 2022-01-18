#include <string>
#include <vector>
#include <iostream>

using namespace std;
// c가 소문자 z(122)이고 n이 1이면..
string solution(string s, int n) {
    for (char& c : s) {
        if (islower(c)) {
            // n % 26 => 1 (1 ~ 25 사이의 값)
            if (!islower(c += n % 26)){ // c[123] = c[122] + n % 26[1]
                // 123은 범위에서 벗어나므로 소문자가 아님!
                c -= 26; // 26을 빼줌으로 z가 a로 바뀐다
            }
        } else if (isupper(c)){
            if (!isupper(c += n % 26)){
                c -= 26;
            }
        }
    }
    return s;
}
/* NOTE
    tolower : 대문자를 소문자로 변경
    toupper : 소문자를 대문자로 변경 

    islower, isupper : 알파벳이 대문자인지 소문자인지 확인 

*/