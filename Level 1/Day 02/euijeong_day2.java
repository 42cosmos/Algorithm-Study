package com.company;

public class Main {

    public static void main(String[] args) {

    }
    public static String solution(String s) {
        String answer = "";
        String[] arr = s.split("");
        int median = arr.length / 2;
        if (arr.length % 2 == 0) {
            answer = arr[median-1] +  arr[median];
        }
        else {
            answer = arr[median];
        }
        return answer;
    }
}
