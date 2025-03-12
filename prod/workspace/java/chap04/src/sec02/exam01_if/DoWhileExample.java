package sec02.exam01_if;

public class DoWhileExample {
    public static void main(String[] args) {
        int counter = 0;

        do {
            System.out.println("현재 카운터 값: " + counter);
            counter++;
        } while (counter < 5); // 조건 검사가 반복의 끝에 이루어집니다.

        System.out.println("카운터가 조건을 만족하여 반복이 종료되었습니다.");
    }
}
