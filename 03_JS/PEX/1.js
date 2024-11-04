let arr = [99, 98, 85, 77, 100, 50];
let sum1 = 0;

arr.forEach((num) => (sum1 += num ? num : 0)); // 삼항 연산자 사용

console.log(sum1);
