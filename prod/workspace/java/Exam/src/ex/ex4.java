package ex;

public class ex4 {
	 public static void main(String[] args) {
	        calculate(99,5); // 예시 입력
	    }

	    public static void calculate(int a, int b) {
	        System.out.println("덧셈: " + (a + b));
	        System.out.println("뺄셈: " + (a - b));
	        System.out.println("곱셈: " + (a * b));
	        if (b != 0) {
	            System.out.println("나눗셈: " + (a / b));
	        } else {
	            System.out.println("나눗셈: 0으로 나눌 수 없습니다.");
	        }
	    }
}
