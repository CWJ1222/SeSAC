package ex;

class Counter {
    static int count = 0; // 정적 변수

    Counter() {
        count++; // 객체가 생성될 때마다 count 증가
    }

    // 정적 메소드
    static void displayCount() {
        System.out.println("현재 카운트: " + count);
    }
}

public class ex16 {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
        
        Counter.displayCount(); // 출력: 현재 카운트: 3
    }
}
