package ex;

interface Flyable {
    void fly();
}

class Airplane implements Flyable {
    @Override
    public void fly() {
        System.out.println("비행기가 하늘을 날아갑니다.");
    }
}

public class ex19 {
    public static void main(String[] args) {
        Airplane airplane = new Airplane();
        airplane.fly();
    }
}
