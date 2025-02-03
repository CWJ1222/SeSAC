console.log(document);
console.log(document.URL);
console.log(document.documentElement); //문서그대로 보여줌

console.log('-----------------------------------');
console.log(document.head);
console.log(document.body);
console.log(document.title);

// getElementById
console.log(document.getElementById('green'));
//null 이 나온다 ~~ script가 head에 있었기 때문. body에 넣어야 된다
console.log(document.getElementById('red'));
//script 에 defer를 달면 아래에 있어도 읽어올 수 있다.
//script를 옮기거나 head안에 넣고 defer붙이거나

//getElementByClassName
console.log(document.getElementsByClassName('pink')); //배열형태이다
console.log(document.getElementsByClassName('pink')[0]); //첫번째 소환

//getElementsByTagName
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('div')[0]);

//getElementByName (name 속성값)
console.log(document.getElementsByName('id'));
console.log(document.getElementsByName('id')[0]);

//쿼리셀렉터 ****가장많이 사용됨.****
//querySelector(css 선택자)
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('#red'));
console.log(document.querySelector('div'));
console.log(document.querySelector('input'));
console.log(document.querySelector("[name='id']"));

//쿼리셀렉터올
console.log(document.querySelectorAll('pink'));
console.log(document.querySelectorAll('#red'));
//배열로 만들어줌

console.log('---------------------------------');
let pinks;
//for of을 이용해서 pink 클래스 모두 출력하기
for (let i of document.querySelectorAll('.pink')) {
  console.log(i);
}
