#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    size_t s = phone_number.size();
    int stars = s - 4;
    
    for (int i = 0; i < stars; i++)
        phone_number[i] = '*';
    
    return phone_number;
}