package practice_allie;

//📌 제네릭 클래스: Calculator<T>
class Calculator<T extends Number> {
 private T num1;
 private T num2;

 // 생성자
 public Calculator(T num1, T num2) {
     this.num1 = num1;
     this.num2 = num2;
 }

 // 두 숫자를 더하고 double 형태로 반환
 public double add() {
     return num1.doubleValue() + num2.doubleValue();
 }
}


public class GenericCalculatorExample {
	  public static void main(String[] args) {
	        // 정수형 연산
	        Calculator<Integer> intCalc = new Calculator<>(10, 5);
	        System.out.println("Integer Sum: " + intCalc.add());

	        // 실수형 연산
	        Calculator<Double> doubleCalc = new Calculator<>(2.5, 3.14);
	        System.out.println("Double Sum: " + doubleCalc.add());
	    }
}
