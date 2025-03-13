package ex;

import java.util.*;

public class ex12 {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        int size = 0;
	        
	        try {
	            System.out.print("배열 크기를 입력하세요: ");
	            size = scanner.nextInt();

	            int[] arr = new int[size];
	            HashSet<Integer> set = new HashSet<>();
	            HashSet<Integer> duplicates = new HashSet<>();

	            System.out.println(size + "개의 요소를 입력하세요:");
	            for (int i = 0; i < size; i++) {
	                arr[i] = scanner.nextInt();
	                if (!set.add(arr[i])) { // 이미 존재하면 중복
	                    duplicates.add(arr[i]);
	                }
	            }

	            if (duplicates.isEmpty()) {
	                System.out.println("중복된 요소가 없습니다.");
	            } else {
	                System.out.println("중복된 요소: " + duplicates);
	            }

	        } catch (InputMismatchException e) {
	            System.out.println("입력 오류: 숫자를 입력해야 합니다.");
	        } finally {
	            scanner.close();
	            System.out.println("프로그램 종료");
	        }
	    }
}
