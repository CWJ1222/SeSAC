let today = new Date().getDay();
//0~6, 일~토
console.log('🚀 ~ today:', today);

console.log('if 사용');
if (today >= 1 && today <= 5) {
  console.log('평일');
} else {
  console.log('주말');
}

console.log('switch 사용');
switch (today) {
  case 0:
  case 6:
    console.log('주말!!');
    break;

  default:
    console.log('평일!!');
    break;
}
