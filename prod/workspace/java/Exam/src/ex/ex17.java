package ex;

class Animal {
    void makeSound() {
        System.out.println("동물이 소리를 냅니다.");
    }
}

class Dog extends Animal {
    // 부모 클래스 메소드 오버라이딩
    @Override
    void makeSound() {
        System.out.println("멍멍!");
    }
}

public class ex17 {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound(); // 출력: 멍멍!
    }
}
