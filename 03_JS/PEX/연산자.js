let num = 10;
num = num + 5;
console.log(num);
num *= num;
console.log(num);
num -= num;
console.log(num);

let num1 = 10;
num1++; //11
console.log(num1);
// ----
//증감연산자도 있지만 그냥 +1 (i -1)
num2 = num1++;
console.log('🚀 ~ num1:', num1);
console.log('🚀 ~ num2:', num2);
num3 = ++num1;
console.log('🚀 ~ num3:', num3);
