package ex;

import java.util.ArrayList;
import java.util.Scanner;

public class ex9 {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        ArrayList<String> words = new ArrayList<>();

	        System.out.println("문자열을 입력하세요. 종료하려면 'exit'을 입력하세요.");
	        while (true) {
	            String input = scanner.nextLine();
	            if (input.equals("exit")) {
	                break;
	            }
	            words.add(input);
	        }

	        System.out.println("입력한 문자열 리스트: " + words);
	        scanner.close();
	    }
}
