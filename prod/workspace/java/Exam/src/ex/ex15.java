package ex;

class BankAccount {
    private int balance; // private 필드

    // 생성자
    BankAccount(int balance) {
        this.balance = balance;
    }

    // Getter 메소드 (읽기)
    public int getBalance() {
        return balance;
    }

    // Setter 메소드 (쓰기)
    public void deposit(int amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + "원을 입금하였습니다.");
        }
    }
}


public class ex15 {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(10000);
        System.out.println("현재 잔액: " + account.getBalance()); // 10000
        account.deposit(5000);
        System.out.println("현재 잔액: " + account.getBalance()); // 15000
    }
}
