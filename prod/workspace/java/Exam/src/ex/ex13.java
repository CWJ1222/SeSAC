package ex;

//자동차(Car) 클래스를 정의
class Car {
 // 필드(속성)
 String brand;
 int speed;

 // 생성자
 Car(String brand, int speed) {
     this.brand = brand;
     this.speed = speed;
 }

 // 메소드 (동작)
 void drive() {
     System.out.println(brand + "가 " + speed + "km/h로 주행 중입니다.");
 }
}

public class ex13 {
    public static void main(String[] args) {
        // 객체 생성 (인스턴스화)
        Car myCar = new Car("Hyundai", 120);
        myCar.drive(); // 출력: Hyundai가 120km/h로 주행 중입니다.
    }
}
