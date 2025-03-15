package practice_allie;

import java.util.Scanner;
import java.util.ArrayList;



class Rectangle {
    private int width;
    private int height;
    private static int count = 0;
   

    public Rectangle(int width) {
        this.width = width;
        this.height = 0; // 기본값 설정
        count++;
    }

    // Getter
    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    // Setter
    public void setHeight(int height) {
        this.height = height;
    }

    // 사각형 넓이 계산
    public int area() {
        return width * height;
    }
    
    public static int getInstanceCount() {
    	return count;
    }

    // toString() 오버라이드하여 출력 형태 정의
    @Override
    public String toString() {
        return "가로 길이는: " + width + "\n세로 길이는: " + height + "\n넓이는: " + area() + "\n" + "-------------------------------";
    }
}

public class ex1 {
	 public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        ArrayList<Rectangle> rectangles = new ArrayList<>();

	        while (true) {
	            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기로 입력하세요. (0 0 입력 시 종료)");
	            int width = scanner.nextInt();
	            int height = scanner.nextInt();

	            if (width == 0 && height == 0) {
	                break;
	            }

	            // Rectangle 객체 생성 및 리스트에 추가
	            Rectangle rect = new Rectangle(width);
	            rect.setHeight(height);
	            rectangles.add(rect);
	        }

	        // 저장된 사각형 정보 출력
	        System.out.println("\n=== 저장된 사각형 정보 ===");
	        for (Rectangle rect : rectangles) {
	            System.out.println(rect);
	        }

	        // 생성된 Rectangle 인스턴스 개수 출력
	        System.out.println("Rectangle 인스턴스의 개수: " + Rectangle.getInstanceCount());

	        scanner.close();
	    }
}
