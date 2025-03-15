package practice_allie;

//📌 제네릭 클래스: Pair<K, V>
class Pair<K, V> {
 private K key;
 private V value;

 // 생성자
 public Pair(K key, V value) {
     this.key = key;
     this.value = value;
 }

 // Getter 메서드
 public K getKey() {
     return key;
 }

 public V getValue() {
     return value;
 }
}

public class GenericPairEx {
	 public static void main(String[] args) {
	        // Pair 객체 생성
	        Pair<String, Integer> pair1 = new Pair<>("One", 1);
	        Pair<Integer, String> pair2 = new Pair<>(2, "Two");

	        // 출력
	        System.out.println("Key: " + pair1.getKey() + ", Value: " + pair1.getValue());
	        System.out.println("Key: " + pair2.getKey() + ", Value: " + pair2.getValue());
	    }
}
