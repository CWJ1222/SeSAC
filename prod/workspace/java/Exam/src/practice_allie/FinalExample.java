package practice_allie;

import java.util.Scanner;

class Circle {
    private final double radius;  // final 필드로 선언 (한 번 초기화 후 변경 불가)
    private static final double PI = 3.141592653589793;  // 원주율 상수

    // 생성자: 반지름 초기화
    public Circle(double radius) {
        this.radius = radius;
    }

    // 반지름 반환 메서드
    public double getRadius() {
        return radius;
    }

    // 원의 넓이를 계산하는 메서드
    public double calculateArea() {
        return PI * radius * radius;
    }

    // 원 정보 출력
    public void displayInfo() {
        System.out.println("원의 반지름: " + radius);
        System.out.println("원의 넓이: " + calculateArea());
    }
}

public class FinalExample {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);

	        // 사용자 입력 받기
	        System.out.print("원의 반지름을 입력하세요: ");
	        double userRadius = scanner.nextDouble();

	        // Circle 객체 생성
	        Circle circle = new Circle(userRadius);

	        // 원 정보 출력
	        circle.displayInfo();

	        scanner.close();
	    }
}
