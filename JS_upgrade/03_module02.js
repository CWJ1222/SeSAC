//commonJS 방식, 따로 내보내기
exports.sayHi = function () {
  console.log('Hi');
};

exports.name = 'allie';
//exports붙이고 내보낼 부분 하면 됨
//함수 선언문이나 const 변수등은 내보내기를 따로 할 수 없음
