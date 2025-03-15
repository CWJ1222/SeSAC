package practice_allie;

//부모 클래스 Animal
class Animal {
 protected String species; // 종
 protected String name;    // 이름
 protected int age;        // 나이

 // 생성자: 종, 이름, 나이 초기화
 public Animal(String species, String name, int age) {
     this.species = species;
     this.name = name;
     this.age = age;
 }

 // 기본 소리 메서드 (오버라이딩 예정)
 public void makeSound() {
     System.out.println("동물은 소리를 낸다.");
 }

 // 동물 정보 출력
 public void displayInfo() {
     System.out.println("종: " + species);
     System.out.println("이름: " + name);
     System.out.println("나이: " + age + "살");
 }
}

//Cat 클래스 (Animal 상속)
class Cat extends Animal {
 // 생성자: 기본 종(species) 설정
 public Cat(String name, int age) {
     super("고양이", name, age); // 부모 클래스 생성자 호출
 }

 // 소리 메서드 오버라이딩
 @Override
 public void makeSound() {
     System.out.println(name + " (고양이): 야옹~");
 }
}

//Dog 클래스 (Animal 상속)
class Dog extends Animal {
 // 생성자: 기본 종(species) 설정
 public Dog(String name, int age) {
     super("강아지", name, age);
 }

 // 소리 메서드 오버라이딩
 @Override
 public void makeSound() {
     System.out.println(name + " (강아지): 멍멍!");
 }
}

public class InheritanceExample {
	 public static void main(String[] args) {
	        // Cat 객체 생성
	        Cat cat = new Cat("나비", 2);
	        // Dog 객체 생성
	        Dog dog = new Dog("바둑이", 3);

	        // 정보 출력 및 소리 내기
	        cat.displayInfo();
	        cat.makeSound();

	        System.out.println("----------------");

	        dog.displayInfo();
	        dog.makeSound();
	    }
}
