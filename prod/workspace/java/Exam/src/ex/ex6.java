package ex;

import java.util.Scanner;
import java.util.Arrays;

public class ex6 {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);

	        System.out.print("입력할 정수 개수를 입력하세요: ");
	        int n = scanner.nextInt();

	        int[] numbers = new int[n];

	        System.out.println(n + "개의 정수를 입력하세요:");
	        for (int i = 0; i < n; i++) {
	            numbers[i] = scanner.nextInt();
	        }

	        int sum = 0;
	        for (int num : numbers) {
	            sum += num;
	        }

	        double average = (double) sum / n;
	        System.out.println("입력한 정수 배열: " + Arrays.toString(numbers));
	        System.out.println("평균: " + average);
	        
	        scanner.close();
	    }
}
