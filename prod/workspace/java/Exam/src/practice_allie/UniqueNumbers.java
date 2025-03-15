package practice_allie;

import java.util.HashSet;
import java.util.Scanner;

public class UniqueNumbers {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        HashSet<Integer> numbers = new HashSet<>();

	        System.out.println("정수를 입력하세요. -1을 입력하면 종료됩니다.");

	        while (true) {
	            System.out.print("정수 입력: ");
	            int num = scanner.nextInt();

	            // 입력 종료 조건
	            if (num == -1) {
	                break;
	            }

	            // HashSet에 추가 (중복 자동 제거)
	            numbers.add(num);
	        }

	        // 결과 출력
	        System.out.println("중복 제거된 정수 목록: " + numbers);

	        scanner.close();
	    }
}
