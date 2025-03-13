package ex;

import java.util.Scanner;

public class ex2 {
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("이름을 입력하세요: ");
        String name = sc.next();

        if (name.equals("홍길동")) {
            System.out.println("남자");
        } else if (name.equals("성춘향")) {
            System.out.println("여자");
        } else {
            System.out.println("모르겠어요.");
        }

        sc.close();
    }
}
