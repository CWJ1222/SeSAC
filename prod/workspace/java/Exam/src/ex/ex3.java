package ex;
import java.util.Scanner;


public class ex3 {
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("숫자를 입력하세요: ");
        int num = sc.nextInt();

        for (int i = 1; i <= num; i++) {
            System.out.println(i + " ");
        }
        
        sc.close();
    }
}
