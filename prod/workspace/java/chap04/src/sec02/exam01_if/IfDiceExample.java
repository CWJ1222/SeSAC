package sec02.exam01_if;

import java.util.Random; // java.util.Random 클래스를 사용합니다.

public class IfDiceExample {
    public static void main(String[] args) {
        Random random = new Random(); // Random 객체를 생성합니다.
        
        int num = random.nextInt(6) + 1; // 0부터 5까지의 랜덤 수에서 1을 더해주어 1부터 6까지의 범위를 얻습니다.

        System.out.println("주사위는 " + num + "을(를) 굴렸습니다.");

        switch (num) {
            case 1:
                System.out.println("수고! 1점입니다.");
                break;
            case 2:
                System.out.println("잘했다! 2점입니다.");
                break;
            case 3:
                System.out.println("도움이 되셨죠! 3점입니다.");
                break;
            case 4:
                System.out.println("감사합니다! 4점입니다.");
                break;
            case 5:
                System.out.println("최고의 성과입니다! 5점입니다.");
                break;
            case 6:
                System.out.println("정말 멋진 일이 되었습니다! 6점입니다.");
                break;
            default: // 주사위 결과가 예상치 못한 경우
                System.out.println("오류가 발생했습니다. 주사위 결과는 1부터 6까지입니다.");
        }
    }
}