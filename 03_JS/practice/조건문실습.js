let age = Number(prompt('나이를 입력하시오'));
if (age < 0) {
  console.log('잘못 입력!');
} else if (age >= 20) {
  console.log('성인');
} else if (age >= 17) {
  console.log('고등학생');
} else if (age >= 14) {
  console.log('중학생');
} else if (age >= 8) {
  console.log('초등학생');
} else {
  console.log('유아');
}
