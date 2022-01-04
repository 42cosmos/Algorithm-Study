package com.company;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
	String[] participant1 = {"mislav", "stanko", "mislav", "ana"};
    String[] participant2 = {"marina", "josipa", "nikola", "vinko", "filipa"};

    String[] completion1 = {"stanko", "ana", "mislav"};
    String[] completion2 = {"josipa", "filipa", "marina", "nikola"};

    if (solution(participant2, completion2).equals("vinko")){
        System.out.println(true);
    }
    }
    public static String solution(String[] participant, String[] completion) {
        String answer = "";
        HashMap<String, Integer> map = new HashMap<>();
        for (String player : participant) {
            if (map.get(player) != null) {
                map.put(player, map.get(player) + 1);
            }
            else {
                map.put(player, 1);
            }
        }

        for (String player : completion) map.put(player, map.get(player) - 1);

        for (String key : map.keySet()) {
            if (map.get(key) != 0){
                answer = key;
            }
        }
        return answer;
    }
}
