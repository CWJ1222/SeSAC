/*
자료형의 종류
String number boolean nuill undefined
object array


*/
// 1. string
let myName = 'allie';
let email = 'allie@naver.com';
console.log(myName);
console.log(email);

//문자와 변수를 동시에 써보기
//+는 console.log안에서만 쓸수 있음
console.log('내이름은', myName);
let aaaa = '내 이름은' + myName + '이고, 이메일은' + email;
console.log('🚀 ~ aaaa:', aaaa);

console.log('내이름은' + myName);

let bbbb = `내 이름은 ${myName}이고 이메일은 ${email}입니다`;
console.log('🚀 ~ bbbb:', bbbb);

//2. number
let number = 123;
console.log('🚀 ~ number:', number);
let opacity = 0.7;
console.log('🚀 ~ opacity:', opacity);

console.log(number + opacity);

console.log('apple' - 3); //not a number

//3. boolean
//true false 둘 중 하나의 값
let checked = true;
console.log('🚀 ~ checked:', checked);
let isShow = false;
console.log('🚀 ~ isShow:', isShow);

//4. unedfined
//값이 없는 상태
let undef;
console.log('🚀 ~ undef:', undef);
let obj = {
  abc: 123,
};
console.log('🚀 ~ obj:', obj.abc);
console.log('🚀 ~ obj:', obj.efg);

//5.ubdefined
let empty = null;
console.log('🚀 ~ empty:', empty);

//6.array 배열
let fruits = ['orange', 'apple', 'banana', 'mango'];
let fruits2 = new Array('orange', 'apple', 'banana', 'mango');
console.log(fruits[3]);
console.log(fruits2[1]);

let data = [1, true, null, 'string', 100];
//다양한 데이터 타입을 넣을 수 있음
console.log(data[3]);

//2차원 배열
let korean = [
  ['가', '갸', '거', '겨'],
  ['나', '냐', '너', '녀'],
  ['다', '댜', '더', '뎌'],
];
console.log(korean[2][0]);

const letters = [
  ['사', '스', '자', '크'],
  ['진', '안', '리', '이'],
  ['가', '수', '림', '나'],
  ['아', '으', '차', '운'],
];
a = letters[3][0];
b = letters[1][3];
c = letters[0][1];
d = letters[0][3];
e = letters[2][2];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

console.log(a + b + c + d + e);

console.log(
  `${
    letters[3][0] +
    letters[1][3] +
    letters[0][1] +
    letters[0][3] +
    letters[2][2]
  }`
);

const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(`${nums[1][0][1]}`);

//7.object타입
//키:값 쌍으로 되어 있음
let cat = {
  name: '나비',
  age: 1,
  gender: 'F',
  isCute: true,
};
console.log(cat.name);
console.log(cat.isCute);
cat.like = ['tuna', '쥐']; //추가하기
cat.hair = 'blue';
console.log(cat);

//대괄호로 접근할수도 있음
//대괄호 접근에서는 키값은 문자열로 써야 함
console.log(cat['name']);
cat['parent'] = '초롱이';
console.log(cat);

//typeof 자료형 확인 시 사용
console.log('----------------------------------');
let und;
console.log(typeof '문자');
console.log(typeof 100);
console.log(typeof true);
console.log(typeof {}); //object
console.log(typeof [true]); //object
console.log(typeof null); //object
console.log(typeof und);
console.log(typeof NaN);
console.log(typeof function () {});
