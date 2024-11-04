for (let i = 1; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(`13의 배수이면서 홀수는 ${i}`);
  }
}

let num = Number(prompt('숫자를 입력하시오'));
for (let i = 1; i <= num; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(`입력한 숫자 이하의 13의 배수이면서 홀수는 ${i}`);
  }
}
