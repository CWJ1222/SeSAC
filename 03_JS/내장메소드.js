//문자열에서 사용하는 속성과 메소드
//length
//toUpperCase toLowerCase trim indexOf slice
//replace replaceAll repeat split

let str1 = 'Strawberry Moon';
let str2 = '   Strawberry Moon  ';
//문자열 인덱싱
console.log(str1[0] + str1[11]);

console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
//Sonny 만들기

console.log(str1.length);
console.log(str2.length);
//공백도 포함해서 길이를 세고 있다
//length 속성

/*  
메서드 사용해보기
*/
console.log(str1);
console.log(str2);
console.log(str2.trim());
console.log(str2.trim().length);

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
//upper lower 매개변수 없는 버전.

//indexOf, charAt, slice
let fruit = 'applemango';
//indexOf 찾고싶은 문자열의 인덱스 번호 반환
//제일 앞자리의 번호를 반환함
console.log(fruit.indexOf('e'));
console.log(fruit.indexOf('apple'));
console.log(fruit.indexOf('mango'));
console.log(fruit.indexOf('z')); //없는 문자는 -1반환

console.log(fruit.charAt(0));
console.log(fruit.charAt(8));
console.log(fruit.charAt(10)); // 없는 것은 아무것도 안나옴

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-1)); //뒤에서 셀수도 있음
console.log(fruit.slice(-4)); //뒤에서 셀수도 있음

//이런것들 사용해도 원본에는 변동이 없음
//replace replaceAll
let msg1 = 'Wow~ It is so amazing!!';
console.log(msg1.replace('Wow', 'Hey~~~~')); //1개만 바꿀수 있음
console.log(msg1.replaceAll('o', 'OO'));
//msg1자체는 변하지 않음

let date = '2024.11.06';
//YYYY - MM - DD로 하고 싶을 떄
console.log((date2 = date.replaceAll('.', '-')));
console.log('🚀 ~ date2:', date2);

let hello = 'hello';
console.log(typeof hello);
let hello2 = hello.split('');
console.log('🚀 ~ hello2:', hello2);
let hello3 = hello.split('e'); //e를 기준으로 나눔
console.log('🚀 ~ hello3:', hello3);

//['2024', '11', '06'] 만들기
//문자열을 배열로 만들때는 split을 이용함.

let date11 = date.split('.');
console.log('🚀 ~ date11:', date11);

console.log('---------------------------');

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'rabbit', 'puppy', 'hanster'];

arr1[5] = 6; //끝에 추가할 수 있지만 번호를 정확히 알아야 되기 때문에 비추천
console.log('🚀 ~ arr1:', arr1);
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(7);
arr1.push(8);
console.log('🚀 ~ arr1:', arr1);
arr1.pop();
console.log('🚀 ~ arr1:', arr1);

arr2.unshift('cat');
console.log('🚀 ~ arr2:', arr2);
console.log(arr2.shift()); //제거하는 값을 반환받음
//pop 제거하는 값이 뭔지 알 수 있음

//includes(요소)
//요소가 있는지 없는지 확인하는
console.log(arr2.includes('cat'));
console.log(arr2.includes('quakka'));

arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
console.log(arr1.indexOf(4));
//4가 몇번 인덱스인지 확인
//숫자나 t f 숫자등 다양하게 올 수 있음

arr1.reverse();
console.log(arr1);
//기존배열이 변경됨

//join배열에서 문자열로 합쳐줌
//join(''), 배열>문자열로 병합
str1 = arr1.join();
console.log('🚀 ~ str1:', str1);
//join에 아무것도 안쓰면 배열 안의 컴마까지 전부 문자열로 반환됨
str1 = arr1.join('-');
console.log('🚀 ~ str1:', str1);

//for of, forEach
let arr3 = [1, 5, 3, 4, 5];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

//기본 for문
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
console.log('---------------------------');

for (let a of arr3) {
  console.log(a);
}
console.log('---------------------------');
//forEach(익명함수)
//forEach(function(a[,b,c])) a는 필수
arr3.forEach(function (num, i, arr) {
  console.log('요소', num);
  console.log('배열인덱스', i);
  console.log('arr3', arr);
  console.log('---------------------------');
});

arr3.forEach((el) => {
  console.log(el);
});

arr2 = ['quakka', 'rabbit', 'puppy', 'hanster'];
//filter map find
//매개변수로 들어가는 함수에 리턴값이 필수
console.log('--------filter----------');
//return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six = arr2.filter(function (el) {
  return el.length === 6;
});
console.log(six);
//6글자인 것만 반환

console.log('------find-------');
let six2 = arr2.find(function (word) {
  return word.length === 6;
});
console.log('🚀  ~ six2:', six2);

console.log('------map-------');
let arr4 = [1, 2, 3, 4, 5];
let multiArray = arr4.map(function (number) {
  return number * 3;
});
console.log('🚀~ multiArray:', multiArray);

let multiArray1 = arr4.map((number) => number * 3);
console.log('🚀~ multiArray1:', multiArray1);
console.log('---------------------------');

//오브젝트 반복 for in(키를 한바퀴 순회함)
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
for (let area in areaNum) {
  console.log(area);
  console.log(areaNum[area]); //. 찍는 직접 접근은 안된다.
  //대괄호 접근법으로만 가능함.
}
