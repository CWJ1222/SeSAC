package practice_allie;



public class ex2 {
	 public static void main(String[] args) {
	        // 학생 객체 생성
	        Student student1 = new Student("김새싹", 20231001, 1);
	        Student student2 = new Student("박지은", 20231002, 2);
	        Student student3 = new Student("이은지", 20231003, 3);

	        // 학생 정보 출력
	        student1.displayInfo();
	        student2.displayInfo();
	        student3.displayInfo();

	        // 전체 학생 수 출력
	        Student.displayTotalStudents();
	    }
}
