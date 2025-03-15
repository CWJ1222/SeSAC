package practice_allie;

import java.util.ArrayList;

//📌 추상 클래스: Shape
abstract class Shape {
 protected String color;
 protected String type;

 // 생성자
 public Shape(String color, String type) {
     this.color = color;
     this.type = type;
 }

 // 도형 색상 반환
 public String getColor() {
     return color;
 }

 // 추상 메서드: 넓이 계산 (각 도형 클래스에서 구현)
 public abstract double calculateArea();

 // 도형 정보 출력
 public void displayInfo() {
     System.out.println("\n===== " + type + " 도형의 정보 =====");
     System.out.println("도형의 색상: " + color);
     System.out.println("도형의 넓이: " + calculateArea());
 }
}

//📌 원 클래스: Circle1 (Shape 상속)
class Circle1 extends Shape {
 private double radius;

 // 생성자
 public Circle1(String color, double radius) {
     super(color, "Circle1");
     this.radius = radius;
 }

 // 원의 넓이 계산
 @Override
 public double calculateArea() {
     return Math.PI * radius * radius;
 }
}

//📌 사각형 클래스: Rectangle11 (Shape 상속)
class Rectangle11 extends Shape {
 private double width;
 private double height;

 // 생성자
 public Rectangle11(String color, double width, double height) {
     super(color, "Rectangle");
     this.width = width;
     this.height = height;
 }

 // 사각형의 넓이 계산
 @Override
 public double calculateArea() {
     return width * height;
 }
}


public class ShapeEx {
	  public static void main(String[] args) {
	        // ArrayList를 이용해 다양한 도형 저장
	        ArrayList<Shape> shapes = new ArrayList<>();

	        // Circle과 Rectangle 객체 생성 및 추가
	        shapes.add(new Circle1("Red", 3));    // 반지름 5인 빨간색 원
	        shapes.add(new Rectangle11("Blue", 3, 4)); // 가로 6, 세로 4인 파란색 사각형

	        // 저장된 도형 정보 출력
	        for (Shape shape : shapes) {
	            shape.displayInfo();
	        }
	    }
}
