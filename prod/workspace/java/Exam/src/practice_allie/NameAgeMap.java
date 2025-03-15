package practice_allie;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class NameAgeMap {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        Map<String, Integer> nameAgeMap = new HashMap<>();

	        System.out.println("이름과 나이를 입력하세요. '종료'를 입력하면 종료됩니다.");

	        while (true) {
	            System.out.print("이름 입력: ");
	            String name = scanner.nextLine();

	            // 입력 종료 조건
	            if (name.equals("종료")) {
	                break;
	            }

	            System.out.print("나이 입력: ");
	            int age = scanner.nextInt();
	            scanner.nextLine(); // 버퍼 비우기

	            // 이름을 키로 사용하여 최신 나이로 덮어씌움
	            nameAgeMap.put(name, age);
	        }

	        // 결과 출력
	        System.out.println("\n=== 입력 받은 이름과 나이 목록 ===");
	        for (Map.Entry<String, Integer> entry : nameAgeMap.entrySet()) {
	            System.out.println("이름: " + entry.getKey() + ", 나이: " + entry.getValue());
	        }

	        scanner.close();
	    }
}
