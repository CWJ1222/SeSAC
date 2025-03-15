package practice_allie;

//📌 추상 클래스: Student
abstract class Students {
 protected String name;
 protected String school;
 protected int age;
 protected int studentID;

 // 생성자
 public Students(String name, String school, int age, int studentID) {
     this.name = name;
     this.school = school;
     this.age = age;
     this.studentID = studentID;
 }

 // 학생 정보 출력 메서드
 public void displayInfo() {
     System.out.println("\n===== " + name + " 학생의 정보 =====");
     System.out.println("학교: " + school);
     System.out.println("나이: " + age);
     System.out.println("학번: " + studentID);
 }

 // 추상 메서드: 자식 클래스에서 반드시 구현해야 함
 public abstract void todo();
}

//📌 김  클래스 (Student 상속)
class Kim extends Students {
 // 생성자: 기본 정보 초기화
 public Kim(String name, String school, int age, int studentID) {
     super(name, school, age, studentID);
 }

 // todo() 오버라이딩: 점심 메뉴 출력
 @Override
 public void todo() {
     System.out.println("점심은 김가네 김밥");
 }
}

//📌 백 클래스 (Student 상속)
class Baek extends Students {
 // 생성자: 기본 정보 초기화
 public Baek(String name, String school, int age, int studentID) {
     super(name, school, age, studentID);
 }

 // 투두 () 오버라이딩: 점심 메뉴 출력
 @Override
 public void todo() {
     System.out.println("점심은 백종원 피자");
 }
}

public class AbstractClassExample {
	   public static void main(String[] args) {
	        // 김  학생 객체 생성
	        Kim kimStudent = new Kim("김철수", "ABC 고등학교", 17, 20220001);
	        kimStudent.displayInfo();
	        kimStudent.todo();

	        System.out.println("----------------");

	        // 백  학생 객체 생성
	        Baek baekStudent = new Baek("백영희", "XYZ 고등학교", 18, 20220002);
	        baekStudent.displayInfo();
	        baekStudent.todo();
	    }
}
