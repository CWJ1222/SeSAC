package ex;

import java.util.Scanner;
import java.util.InputMismatchException;

public class ex11 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int size = 0;
        double sum = 0;

        // 배열 크기 입력 반복
        while (true) {
            try {
                System.out.print("배열 크기를 입력하세요: ");
                size = scanner.nextInt();
                
                if (size <= 0) {
                    throw new ArithmeticException("배열 크기는 1 이상이어야 합니다.");
                }
                break; // 올바른 입력이면 반복 종료
            } catch (InputMismatchException e) {
                System.out.println("입력 오류: 숫자를 입력해야 합니다.");
                scanner.nextLine(); // 잘못된 입력 제거
            } catch (ArithmeticException e) {
                System.out.println(e.getMessage());
            }
        }

        int[] arr = new int[size];

        // 배열 요소 입력 반복
        for (int i = 0; i < size; i++) {
            while (true) {
                try {
                    System.out.print("arr[" + i + "] 값을 입력하세요: ");
                    arr[i] = scanner.nextInt();
                    sum += arr[i];
                    break; // 정상 입력이면 반복 종료
                } catch (InputMismatchException e) {
                    System.out.println("입력 오류: 숫자를 입력해야 합니다.");
                    scanner.nextLine(); // 잘못된 입력 제거
                }
            }
        }

        System.out.println("배열 요소의 평균: " + (sum / size));
        scanner.close();
        System.out.println("프로그램 종료");
    }
}