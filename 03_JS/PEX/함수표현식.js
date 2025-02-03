//함수표현식

// showError();
// let showError = function () {
//     console.log('error');
// } 먼저 사용하려면 에러남

showError();
function showError() {
  console.log('error');
}
//선언문은 먼저 사용 가능

let showError1 = () => {
  console.log('error1');
};
showError1();
//화살표함수로 표현하기

const add = function (num1, num2) {
  //   const result = num1 + num2;
  //   return result;
  return num1 + num2;
};
function add1(num1, num2) {
  //   const result = num1 * num2;
  //   return result;
  return num1 * num2;
}
const add2 = (num1, num2) => {
  //   const result = num1 + num2 + 1;
  //   return result;
  return num1 + num2 + 1;
};

console.log('🚀 ~ add:', add(1, 2));
console.log('🚀 ~ add1:', add1(2, 3));
console.log('🚀 ~ add2:', add2(5, 6));
