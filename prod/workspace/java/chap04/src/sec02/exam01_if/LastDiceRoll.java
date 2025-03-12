package sec02.exam01_if;

import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class LastDiceRoll {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // 사용자 입력을 받는 객체 생성

        System.out.print("주사위를 몇 번 굴릴까요? (1-6): ");
        
        int diceCount;
        try {
            diceCount = scanner.nextInt(); // 사용자가 입력한 숫자를 저장합니다.
            
            if (diceCount < 1 || diceCount > 6) { // 입력받은 수가 유효하지 않은 경우
                System.out.println("잘못된 입력입니다. 주사위를 1번부터 6번까지 굴릴 수 있습니다.");
            } else {
                Random random = new Random(); // 랜덤 수를 생성하는 객체
                
                int lastRoll = 0; // 마지막으로 굴린 주사위의 수를 저장합니다.
                
                for (int i = 1; i <= diceCount; i++) { // 주사위를 지정된 횟수만큼 굴립니다.
                    int roll = random.nextInt(6) + 1; // 랜덤 수로 주사위를 굴리며 1부터 시작합니다.
                    
                    System.out.println("주사위 " + i + ": " + roll);
                    
                    if (i == diceCount) { // 마지막 굴린 수는 lastRoll에 저장하고 출력합니다.
                        lastRoll = roll;
                    }
                }

                System.out.println("마지막으로 나온 숫자는 " + lastRoll + "입니다.");
            }
        } catch (InputMismatchException e) {
            System.out.println("숫자가 아닙니다. 다시 시도해주세요."); // 입력이 정수로 아닌 경우
        }
    }
}
