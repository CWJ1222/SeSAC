package ex;

import java.util.Arrays;
import java.util.Scanner;

public class ex7 {
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[10];

        System.out.println("10개의 정수를 입력하세요:");
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = scanner.nextInt();
        }

        Arrays.sort(numbers); // 배열 정렬
        System.out.println("정렬된 배열: " + Arrays.toString(numbers));

        scanner.close();
    }
}
