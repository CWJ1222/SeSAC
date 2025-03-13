package ex;
import java.util.Random;

public class ex8 {
	 public static void main(String[] args) {
	        int[][] matrix = new int[3][3];
	        Random rand = new Random();

	        System.out.println("랜덤 숫자로 채운 3x3 배열:");
	        for (int i = 0; i < matrix.length; i++) {
	            for (int j = 0; j < matrix[i].length; j++) {
	                matrix[i][j] = rand.nextInt(100); // 0~99 사이 랜덤값
	                System.out.print(matrix[i][j] + "\t");
	            }
	            System.out.println();
	        }
	    }
}
