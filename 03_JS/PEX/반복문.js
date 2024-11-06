for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log('------------');
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log('------------');

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// while (true) {
//   let answer = confirm('계속할래요?');
//   if (!answer) {
//     break;
//   }
// }

//취소 눌렀을 때만 빠져나옴
console.log('------------');

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}
