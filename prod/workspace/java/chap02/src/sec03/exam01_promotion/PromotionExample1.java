package sec03.exam01_promotion;

public class PromotionExample1 {

	public static void main(String[] args) {
		byte byteValue = 10;
		int intValue = byteValue;
		System.out.println(intValue);

//		char charValue = '��';
//		intValue = charValue;
//		System.out.println("���� �����ڵ�=" + intValue);
		
		intValue = 500;
		long longValue = intValue;;
		System.out.println(longValue);		
		
		intValue = 200;
		double doubleValue = intValue;
		System.out.println(doubleValue);	

		//char charValue1 = 'A';
		//short shortValue = charValue1; //cannot convert from char to short
		
	}

}
