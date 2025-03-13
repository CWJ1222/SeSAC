package ex;

class Student {
    // 필드(속성)
    String name;
    int age;

    // 생성자 (객체 생성 시 호출됨)
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // 메소드 (동작)
    void introduce() {
        System.out.println("안녕하세요, 저는 " + name + "이고, " + age + "살입니다.");
    }
}

public class ex14 {
    public static void main(String[] args) {
        Student student = new Student("김철수", 20);
        student.introduce(); // 출력: 안녕하세요, 저는 김철수이고, 20살입니다.
    }
}
