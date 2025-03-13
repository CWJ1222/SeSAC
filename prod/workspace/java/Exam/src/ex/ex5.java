package ex;

public class ex5 {
	   public static void main(String[] args) {
	        System.out.println("원의 넓이: " + area(5));
	        System.out.println("직사각형의 넓이: " + area(4, 6));
	        System.out.println("삼각형의 넓이: " + area(5.0, 3.0));
	    }

	    // 원의 넓이 (반지름 입력)
	    public static double area(double radius) {
	        return radius * radius * 3.14;
	    }

	    // 직사각형의 넓이 (가로, 세로 입력)
	    public static double area(double width, double height) {
	        return width * height;
	    }

	    // 삼각형의 넓이 (밑변, 높이 입력)
	    public static double area(int base, double height) {
	        return (base * height) / 2;
	    }
}
