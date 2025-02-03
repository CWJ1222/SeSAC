//배열의 구조 분해 문법
// const arr1 = [1, 2, 3, 4, 5];
const arr1 = ['tomato', 'kiwi', 'orange'];
console.log(arr1[0]);
const tomato = arr1[0];
const [a, b, c] = arr1;
console.log('🚀 ~ a:', a);

const arr2 = ['red', 'orange', 'pink', 'yellow'];
const [red, orange, , yellow] = arr2;
console.log(red, orange, yellow);

const [v1, v2, v3, v4, v5] = arr2;
console.log('🚀 ~ v1, v2, v3, v4, v5:', v1, v2, v3, v4, v5);
//v5는 undifined

//const [a1, b1] = arr2 // 맨끝에 있는 요소들은 생략 가능

let value1 = 'second';
let value2 = 'first';

let temp;

temp = value1;
value1 = value2;
value2 = temp;

console.log(value1, value2);

value1 = 'second';
value2 = 'first';
[value2, value1] = [value1, value2];
console.log('🚀 ~ value1, value2:', value1, value2);

//객체 구조분해 할당 문법
const obj = {
  title: '제목',
  content: '내용',
  num: 10,
};

//값에 접근할 때는 점 접근, 대괄호 접근
console.log(obj.title);
console.log(obj['title']);

const { num, title, content } = obj;
console.log(title);

const { n1, t1, c1 } = obj;
console.log('🚀 ~ n1:', n1); //undefined

const { content: c2, title: t2 } = obj;
console.log('🚀 ~ t2:', t2);
console.log('🚀 ~ c2:', c2);

// --------
//spread 와 rest
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c'];
console.log(arr3);

for (let el of arr3) {
  console.log(el);
}
console.log(...arr3);
console.log(...arr4);

//arr3 arr4 합치기

const arr5 = arr3.concat(arr4);
console.log('🚀 ~ arr5:', arr5);
const arr6 = [arr3, arr4];
console.log('🚀 ~ arr6:', arr6); //2차원 배열이 되어 버림
const arr7 = [...arr3, ...arr4];
console.log('🚀 ~ arr7:', arr7);

//string 문자열에서 ~
const str = 'alliehigh';
let strToArr = [...str];
let strToArr2 = str.split('');
//string to array ~ split
//array to string ~ join
console.log('🚀 ~ strToArr:', strToArr);
console.log('🚀 ~ strToArr2:', strToArr2);

//object에서 사용하기
let obj1 = {
  name: 'superman',
  height: 170,
  friend: null,
  married: false,
};

let obj2 = {
  name: '진형',
  greeting: function () {
    console.log(`안녕하세요, 저는 ${this.name}이고요.. 
        키는 ${this.height}입니다..`);
  },
};

let me = { ...obj1, ...obj2 };
me.greeting();
console.log(me);

me = {
  ...obj1,
  ...obj2,
  gender: 'Female',
};
console.log(me);

// ...rest
function test(a, b) {
  console.log('🚀 ~ test ~ a:', a);
  console.log('🚀 ~ test ~ b:', b);
}
test(1, 2);
test('안녕');

function test2(...val) {
  console.log(val);
}
test2(2, 3, 4, 5, 6, 7, 8);

//매개변수가 몇 개가 들어오든 합해서 반환하는 함수를~

function addNumber(...rest) {
  console.log('🚀~ rest:', rest);
  let sum = 0;
  rest.forEach((n) => (sum += n));
  return sum;
}

let sumResult = addNumber(1, 2, 3, 4, 5);
console.log(sumResult); //15
