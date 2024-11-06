console.log('1~100 배열 만들기');

let arr = [1];
for (let i = 2; i < 101; i++) {
  arr.push(i);
}
console.log('🚀 ~ arr:', arr);

console.log('1~100합 for');
let sum = 0;
for (let j = 0; j < 100; j++) {
  sum = sum + arr[j];
}
console.log('🚀 ~ sum:', sum);

console.log('1~100합 for of');
let sum2 = 0;
for (let a of arr) {
  sum2 = sum2 + a;
}
console.log('🚀 ~ sum2:', sum2);

let sum3 = 0;
console.log('1~100합 forEach');
arr.forEach((b) => {
  sum3 += b;
});
console.log('🚀 ~ sum3:', sum3);
