package practice_allie;

//🚗 부모 클래스: Vehicle
class Vehicle {
 protected String brand;
 protected String model;
 protected int year;

 // 생성자
 public Vehicle(String brand, String model, int year) {
     this.brand = brand;
     this.model = model;
     this.year = year;
 }

 // 차량 시동 메서드
 public void startEngine() {
     System.out.println("차량 시동을 걸었습니다.");
 }

 // 차량 정지 메서드
 public void stopEngine() {
     System.out.println("차량을 정지했습니다.");
 }

 // 차량 정보 출력 메서드
 public void displayInfo() {
     System.out.println(brand + " " + model + " (" + year + ")");
 }
}

//🚌 자식 클래스: Bus
class Bus extends Vehicle {
 private int passengerCapacity;

 // 생성자
 public Bus(String brand, String model, int year, int passengerCapacity) {
     super(brand, model, year);
     this.passengerCapacity = passengerCapacity;
 }

 // 오버라이딩: 버스의 고유 기능 추가
 @Override
 public void startEngine() {
     super.startEngine();
     System.out.println("승객을 운송합니다.");
 }

 // Bus 정보 출력
 @Override
 public void displayInfo() {
     super.displayInfo();
     System.out.println("승객 수용 가능: " + passengerCapacity + "명");
 }
}
//🚙 자식 클래스: Car
class Car extends Vehicle {
 private boolean convertible;

 // 생성자
 public Car(String brand, String model, int year, boolean convertible) {
     super(brand, model, year);
     this.convertible = convertible;
 }

 // 오버라이딩: 차의 고유 기능 추가
 @Override
 public void stopEngine() {
     super.stopEngine();
     System.out.println("주차했습니다.");
 }

 // Car 정보 출력
 @Override
 public void displayInfo() {
     super.displayInfo();
     System.out.println("컨버터블 여부: " + (convertible ? "Yes" : "No"));
 }
}

//🏍️ 자식 클래스: Motorcycle
class Motorcycle extends Vehicle {
 private String licenseType;

 // 생성자
 public Motorcycle(String brand, String model, int year, String licenseType) {
     super(brand, model, year);
     this.licenseType = licenseType;
 }

 // 오버라이딩: 모터사이클의 고유 기능 추가
 @Override
 public void startEngine() {
     super.startEngine();
     System.out.println("윌리(Wheelie)를 합니다.");
 }

 // Motorcycle 정보 출력
 @Override
 public void displayInfo() {
     super.displayInfo();
     System.out.println("면허 유형: " + licenseType);
 }
}

public class VehicleInheritanceExample {
	   public static void main(String[] args) {
	        // Bus 객체 생성
	        Bus bus = new Bus("Hyundai", "City Bus", 2022, 30);
	        System.out.println("\n=== Bus 정보 ===");
	        bus.displayInfo();
	        bus.startEngine();
	        bus.stopEngine();

	        System.out.println("----------------");

	        // Car 객체 생성
	        Car car = new Car("Toyota", "Camry", 2023, true);
	        System.out.println("\n=== Car 정보 ===");
	        car.displayInfo();
	        car.startEngine();
	        car.stopEngine();

	        System.out.println("----------------");

	        // Motorcycle 객체 생성
	        Motorcycle motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2021, "A");
	        System.out.println("\n=== Motorcycle 정보 ===");
	        motorcycle.displayInfo();
	        motorcycle.startEngine();
	        motorcycle.stopEngine();
	    }
}
