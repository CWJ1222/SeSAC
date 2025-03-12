package sec02.exam01_if;

import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class DiceGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) { // 무한 루프 시작
            
            System.out.println("주사위를 굴려서 점수를 얻으세요. 주사위 면 개수를 정해주세요. 예: 6, 8, 또는 12): ");
            
            int userDiceCount;
            try {
                userDiceCount = scanner.nextInt();
                
                if (userDiceCount < 1 || userDiceCount > 20) { // 유효한 면 개수 범위는 1부터 20까지입니다.
                    System.out.println("잘못된 입력입니다. 주사위를 1에서 20까지 면으로 할 수 있습니다.");
                } else {
                    
                    Random random = new Random();
                    
                    // 사용자의 주사위 점수 계산
                    int userScore = random.nextInt(userDiceCount) + 1;
                    
                    System.out.println("내가 굴린 주사위의 점수는 " + userScore + "입니다.");
                    
                    // 상대방의 주사위 점수 계산 (이 예시에서는 랜덤하게 생성)
                    int opponentScore = random.nextInt(userDiceCount) + 1;
                    
                    System.out.println("상대방이 굴린 주사위의 점수는 " + opponentScore + "입니다.");
                    
                    // 승패 결정
                    if (userScore > opponentScore) {
                        System.out.println("축하합니다! 당신은 이겼습니다!");
                    } else if (userScore < opponentScore) {
                        System.out.println("아쉽지만 상대방이 이겼습니다!");
                    } else {
                        System.out.println("비기었습니다! 그만큼의 점수가 나왔습니다.");
                    }
                    
                }
            } catch (InputMismatchException e) {
                System.out.println("숫자가 아닙니다. 다시 시도해주세요."); 
                scanner.next(); // 잘못된 입력을 버리지 않고 다시 요청
            }
        }
    }
}
