package ex;

abstract class Shape {
    abstract double calculateArea(); // 추상 메소드 (구현 없음)

    void display() {
        System.out.println("도형의 넓이를 계산합니다.");
    }
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

public class ex18 {
    public static void main(String[] args) {
        Circle circle = new Circle(5);
        circle.display();
        System.out.println("원의 넓이: " + circle.calculateArea());
    }
}
