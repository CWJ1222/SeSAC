let mathScore = Number(prompt('수학 점수를 입력 하세요'));
let engScore = Number(prompt('영어 점수를 입력 하세요'));
let avg = (mathScore + engScore) / 2;
console.log(avg);

//형변환
//1. ?? >> string
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

//toString 사용해도 됨
console.log(typeof str1.toString());

//2. ?? > number
let n1 = true;
let n1_1 = false;
let n2 = '123';
let n3 = '123.5';
console.log('🚀 ~ n1:', typeof Number(n1));
console.log('🚀 ~ n1_1:', typeof Number(n1_1));
console.log('🚀 ~ n2:', typeof Number(n2));
console.log('🚀 ~ n3:', typeof Number(n3));
console.log('🚀 ~ n3:', Number(n3));
//parseInt는 정수로 바꿔줌, 소수 부분은 버림
console.log(parseInt(n2));
console.log(parseInt(n3));
console.log(parseInt(3.14));
