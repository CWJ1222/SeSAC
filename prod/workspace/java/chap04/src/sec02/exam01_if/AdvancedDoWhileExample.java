package sec02.exam01_if;

import java.util.InputMismatchException;
import java.util.Scanner;

public class AdvancedDoWhileExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numberToSum = 0; // 사용자 입력으로부터 받을 숫자
        int sumOfNumbers = 0; // 현재까지 계산된 합
        
        do {
            System.out.println("현재까지 계산된 합은 " + sumOfNumbers + "입니다.");
            
            try {
                System.out.print("숫자를 입력하고 '계산 완료'라고 입력하면 끝내세요: ");
                String input = scanner.nextLine();
                
                if ("계산 완료".equals(input)) {
                    break; // 사용자가 계산을 중단했다면 반복 탈출
                }
                
                int numberInput;
                try {
                    numberInput = Integer.parseInt(input);
                } catch (NumberFormatException e) {
                    System.out.println("올바른 숫자를 입력해주세요. 다시 시도하세요.");
                    continue; // 잘못된 입력으로 인한 반복繼続
                }
                
                if (numberInput <= 0) { // 양의 자연수만 고려
                    System.out.println("양의 자연수만 계산할 수 있습니다. 다시 시도하세요.");
                    continue;
                }
                
                sumOfNumbers += numberInput; // 입력한 숫자를 현재까지의 합에 더합니다.
                
            } catch (InputMismatchException e) {
                System.out.println("올바른 숫자를 입력해주세요. 다시 시도하세요.");
                scanner.nextLine(); // 잘못된 입력을 제거
                continue;
            }
            
        } while (true); // do-while 구조에서 조건은 반복의 끝에 검사
        
        System.out.println("최종 계산 결과는 " + sumOfNumbers + "입니다.");
    }
}
