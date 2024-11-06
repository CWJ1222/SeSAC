console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);
//== 동등연산자

const a = 1;
const b = '1';
console.log(a == b); //버그발생가능성 높음
console.log(a === b); //일치연산자 타입까지 비교해야 함

const age = 19;
if (age > 19) {
  console.log('welcome');
} else {
  console.log('bye~');
}
// if (age <= 19) {
//   console.log('bye~');
// }
//else로 간단히 표현할 수 있음

if (age > 19) {
  console.log('welcome~');
} else if (age === 19) {
  console.log('suneung fighting');
} else {
  console.log('bye~~');
}

console.log('----------------------');
