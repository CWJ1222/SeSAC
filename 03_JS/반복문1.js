//홀수의 합 구하기
let sum5 = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    sum5 = sum5 + i;
  }
}
console.log(sum5);

let sum6 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum6 = sum6 + i;
}
console.log(sum6);

//while문
let n1 = 1;
while (n1 <= 5) {
  console.log(n1);
  n1++;
}

let n2 = 9;
while (n2 >= 5) {
  console.log(n2);
  n2--;
}

//10부터 1까지 홀수만 출력
console.log('---------------------');
let n3 = 10;
while (n3 >= 0) {
  if (n3 % 2 === 1) {
    console.log(n3);
  }
  n3--;
}
console.log('---------------------');

// let a = 0;
// while (true) {
//     console.log(a);
//     a++
// }
//무한반복되며 화면이 멈춰버림

let a = 0;
while (1) {
  console.log(a);
  a++;
  if (a > 10) {
    break;
  }
}
console.log('---------------------');

let a2 = 0;
while (confirm('continue??')) {
  //확인버튼은 t , 취소버튼은 f
  a2++;
  alert(`${a2} 번째 alert창`);
}
//함수를 이용해서 조건을 걸수도 있다.
