package practice_allie;

// 📌 추상 클래스: Vehicle
abstract class Vehicle7 {
    protected String name;
    protected int maxSpeed;

    // 생성자
    public Vehicle7(String name, int maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    // Getter & Setter
    public String getName() {
        return name;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    // 추상 메서드: 이동 방식 정의 (자식 클래스에서 구현)
    public abstract void move();
}

// 📌 인터페이스: Flyable
interface Flyable {
    void fly();  // 비행 기능을 가진 객체가 반드시 구현해야 함
}

// 📌 자동차 클래스: Car7 (Vehicle7 상속)
class Car7 extends Vehicle7 {
    // 생성자
    public Car7(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    // move() 오버라이딩
    @Override
    public void move() {
        System.out.println(name + "가(이) 도로를 따라 이동 중");
    }
}

// 📌 비행기 클래스: Airplane (Vehicle7 상속 + Flyable 구현)
class Airplane extends Vehicle7 implements Flyable {
    // 생성자
    public Airplane(String name, int maxSpeed) {
        super(name, maxSpeed);
    }

    // move() 오버라이딩
    @Override
    public void move() {
        System.out.println(name + "가(이) 하늘을 날아가는 중");
    }

    // fly() 오버라이딩
    @Override
    public void fly() {
        System.out.println(name + "가(이) 고도 10,000피트에서 비행 중");
    }
}

public class VehicleTest {
    public static void main(String[] args) {
        // Vehicle7 타입 배열 생성
        Vehicle7[] vehicles = new Vehicle7[2];

        // Car7 객체 및 Airplane 객체 저장
        vehicles[0] = new Car7("테슬라", 250);
        vehicles[1] = new Airplane("보잉 747", 900);

        // 반복문을 사용하여 각 객체의 move() 메서드 호출
        for (Vehicle7 v : vehicles) {
            v.move();

            // Flyable 인터페이스를 구현한 경우 fly() 호출
            if (v instanceof Flyable) {
                ((Flyable) v).fly();
            }
        }
    }
}