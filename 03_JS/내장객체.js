//Date 객체 사용하기
let now = new Date();
console.log(now);
console.log(new Date('September 30, 1990 13:00:00'));

//70.01.01 이후로 몇초나 지났는지? 나타냄
console.log(new Date(6000000));
console.log(new Date(0));
console.log(new Date(2010, 2, 2, 18, 35, 50));

console.log(now.getFullYear(), '년');
console.log(now.getMonth(), '월'); //월은 0~11으로 표현됨
console.log(now.getDate(), '일'); //1부터 나옴
console.log(now.getHours(), '시'); //0 ~ 23까지의 값
console.log(now.getMinutes(), '분'); //0 ~ 59
//getSeconds
//getMilliseconds
//getDay ~ 요일 0~6(일 ~토))

//조건문을 사용해서 오늘이 주말인지 평일인지 출력

let today = new Date();
// console.log('🚀 ~ today:', today);
// let xx = today.getDate();
// console.log('🚀 ~ xx:', xx);

if (today.getDay() <= 5 && today.getDay() >= 1) {
  console.log(`${today.getDay()} 는 weekday!!`);
} else {
  console.log(`${today.getDay()} 는 weekend~~~`);
}

//math 객체
//상수
console.log(Math.E); //자연로그 값
console.log(Math.PI); //파이
console.log(Math.SQRT2); // 루트2값

console.log(Math.min(50, 10)); //여러 숫자도 가능, 작은 숫자 골라줌
console.log(Math.max(3, 4, 67, 100));
console.log(Math.random()); // 0 이상 1미만 의 소수점
console.log(Math.round(5.3)); //소수를 정수로 반올림
console.log(Math.floor(5.3)); //소수를 정수로 버림
console.log(Math.ceil(5.3)); //소수를 정수로 올림

//Math.random 응용
// 0~ 9 까지의 소수가 아닌 난수
console.log(Math.random() * 10);
console.log('난수1:', Math.floor(Math.random() * 10));
//1~10의 자연수
console.log('난수2', Math.floor(Math.random() * 10 + 1));
//20~22 의 난수
console.log('난수3', Math.floor(Math.random() * 3 + 20));

const areaNum = {
  Seoul: '02',
  Incheon: '032',
  Daejeon: '042',
  Busan: '051',
  Ulsan: '052',
  Daegu: '053',
  Gwangju: '062',
  Jeju: '064',
};
//실제 많이 사용되는 메소드
let key = Object.keys(areaNum);
let value = Object.values(areaNum);
//키 밸류 값만을 가져오는~~

console.log('🚀 ~ value:', value);
console.log('🚀 ~ key:', key);
