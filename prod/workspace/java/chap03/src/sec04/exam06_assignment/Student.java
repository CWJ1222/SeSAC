package sec04.exam06_assignment;

public class Student {
    private String name;
    
    // 생성자
    public Student(String name) {
        this.name = name;
    }
    
    // 메소드
    public String getName() {
        return name;
    }

    public static void main(String[] args) {  // main 메서드 추가
        // Student 인스턴스의 생성 및 사용
        Student s1 = new Student("John Doe");
        System.out.println(s1.getName());  // John Doe
    }
}