let desc = 'Hi guys. Nice to meet you.';

console.log(desc.toUpperCase());

console.log(desc.toLowerCase());

//찾는 문자열의 위치 숫자로 반환
console.log(desc.indexOf('to'));
//문자가 없다면 -1 반환
console.log(desc.indexOf('man'));

if (desc.indexOf('Hi') > -1) {
  console.log('Hi가 포함된 문장입니다.');
}
//indexof를 사용할 때는 if문 에서 조심할 것. -1보다 큰가 로 설정하는 것이 좋음
console.log('--------------------');
let desc1 = 'abcdefg';
console.log(desc1.slice(2));
console.log(desc1.slice(0, 5));
console.log(desc1.slice(2, -2));
//인덱스 2에서 끝에서 인덱스 2까지 반환

console.log(desc1.substring(2, 6));
console.log('a'.codePointAt(0)); //a의 십진법 숫자

console.log('--------------------');

let list = ['01. 들어가며', '02. JS역사', '03. 자료형', '04. 함수', '05. 배열'];

let newList = [];
for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}
console.log(newList);
console.log('--------------------');

//금칙어 콜라
function hasCola(str) {
  if (str.indexOf('콜라') > -1) {
    console.log('금칙어가 있습니다');
  } else {
    console.log('통과');
  }
}
hasCola('와 사이다가 짱이야'); //-1
hasCola('무슨소리 콜라가 짱이야');
hasCola('콜라'); //0
//indexof는 숫자가 반환된다는 것에 주의해서 사용해야함

//include를 활용해서 해보기
function hasCola1(str) {
  if (str.includes('콜라')) {
    console.log('금칙어가 있습니다');
  } else {
    console.log('통과');
  }
}
hasCola1('콜라');
hasCola1('사이다');
