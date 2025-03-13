package ex;

public class ex10 {
	 public static void main(String[] args) {
	        int[] arr = new int[4]; // 크기 4인 배열 생성

	        try {
	            for (int i = 0; i <= 5; i++) { // 5까지 반복 (예외 발생 가능)
	                System.out.println("arr[" + i + "] = " + arr[i]);
	            }
	        } catch (ArrayIndexOutOfBoundsException e) {
	            System.out.println("인덱스가 범위를 벗어났습니다.");
	        }
	    }
}
