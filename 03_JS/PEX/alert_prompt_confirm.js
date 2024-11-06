const name = prompt('이름을 입력하시오');
const day = prompt('날짜를 입력하시오', '24.11.11');

alert('환영합니다. ' + name + '님');
alert(`환영합니다, ${name}님`);

const ischeck = confirm('이름 확인하셨나요?');
console.log(ischeck);
