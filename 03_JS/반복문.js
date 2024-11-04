//for문
//for(변수선언 초기화;조건식(어디까지 증가 또는 감소);증감식)
//{반복 실행코드 }

//증감식 i++ i=i+1 i+=1

for (let i = 0; i < 10; i++) {
  console.log('안녕', i);
}

for (let i = 0; i < 10; i = i + 2) {
  console.log(`안녕 ${i}`);
}
console.log('---------------------');
for (let i = 0; i < 15; i = i + 3) {
  console.log(`안녕 ${i}`);
}
console.log('---------------------');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('---------------------');
for (let i = 1; i < 6; i++) {
  console.log(i);
}
console.log('---------------------');
for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

console.log('---------------------');
for (let i = 5; i > 0; i--) {
  console.log(i);
}

let fruits = ['apple', 'banana', 'orange', 'mango'];
for (let i = 0; i < 4; i++) {
  console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//배열에서는 length많이 사용함. length 잘 사용하기!!

let sum = 0;
for (let i = 1; i < 12; i++) {
  sum = sum + i;
}
console.log(sum);

let arr = [99, 98, 85, 77, 100, 50];
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
}

console.log(sum1);

//1이상 20이하의 수 중 짝수만 더하라

let sum3 = 0;
// for (let i = 1; i < 21; i + 1) {
//   if (i % 2 === 0) {
//     sum3 = sum3 + i;
//   }
// }
console.log(sum3);

for (let i = 0; i <= 20; i + 2) {
  sum3 += i;
}
console.log(sum3);
