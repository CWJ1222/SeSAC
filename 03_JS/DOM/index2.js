//태그 내부 내용 변경
/*
-innerText
-textContent
-innerHTML

*/
let div1 = document.getElementById('div1');
console.log('🚀 ~ div1:', div1);

div1.innerText = '     여기는 <b>첫번째</b> 태그입니다. &hearts;    /'; //문자열로 읽힘
console.log('🚀 ~ div1.innerText:', div1.innerText); //innerText는 공백이?
//2칸 이상의 공백문자 제거, 앞뒤로 공백문자 제거

div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;'; //태그 먹인게 적용됨
console.log('🚀 ~ div1.innerHTML:', div1.innerHTML);

div1.textContent = '     여기는 <b>첫번째</b> 태그입니다. &hearts;   /'; //문자열로 읽힘
console.log('🚀 ~ div1.textContent:', div1.textContent); //공백이 실제 들어감

// 속성에 접근하는 방법
/* 
요소.속성명
getAttribute() : 속성값 가져오기
setAttribute() : 속성 설정하기
*/

let naver = document.getElementById('naver');
console.log(naver);
// naver.setAttribute(속성이름, 바꿀 속성 값)
naver.setAttribute('href', 'www.google.com');
console.log(naver.href);

console.log(naver.getAttribute('href'));
//href 값만 가지고 옴

document.querySelector('#pooh');
console.log(
  "🚀 ~ document.querySelector('#pooh'):",
  document.querySelector('#pooh')
);
document.querySelector('#pooh').alt = '푸사진';
//setattribute가 아니어도 . 으로 재설정할 수 있다

// CSS변경
let h1 = document.querySelector('h1');
let list = document.querySelectorAll('li');
console.log('🚀 ~ h1:', h1);
console.log('🚀 ~ list:', list);

//배경색을 분홍색, 글자색 흰색, 글자크기 1.3rem
for (let el of list) {
  //   el.style.color = '#fff';
  //   el.style.backgroundColor = 'pink';
  //   el.style.fontSize = '1.3rem';
  el.classList.add('friends');
}

h1.classList.add('add-h1');
console.log(h1.classList);
// h1.classList.remove('add-h1');
// h1.classList.toggle('add-h1');
//toggle은 없으면 넣어주고 있으면 없애줌

//클래스가 있는지 없는지 확인, T F 반환
console.log(h1.classList.contains('add-h1'));
console.log(h1.classList.contains('add-h2'));
console.log(h1.classList);

//부모 자식 형제 노드 찾기
let friends = document.getElementById('friends');
let tigger = document.getElementById('tigger');
console.log('🚀 ~ friends:', friends);
console.log('🚀 ~ tigger:', tigger);

console.log('---자식 노드 접근---');
//배열형태로 가져옴
console.log(friends.children);
console.log(friends.children[0]);

console.log('---부모 노드 접근---');
//배열 아닌 요소 자체를 가져옴
console.log(tigger.parentNode);

console.log('---형제 노드 접근---');
//배열형태가 아닌 요소 자체를 가져옴
console.log('이전형제', tigger.previousElementSibling);
console.log('다음형제', tigger.nextElementSibling);

// 노드 생성 추가 삭제
let container = document.querySelector('.container');
console.log('🚀 ~ container:', container);

//요소생성, 생성만 한다고 생기지 않는다
let p = document.createElement('p');
p.innerText = '새로 추가된 p';
p.style.fontWeight = '700';
p.style.background = 'red';
p.id = 'append-p';

//요소 추가
console.log(p);
//append ~ 선택된 요소의 맨 뒤 자식요소로 추가됨
container.append(p);

let p2 = document.createElement('p');
p2.innerText = 'p-2추가';
p2.classList.add('p-2');
container.append(p2);

let p3 = document.createElement('p');
p3.innerText = 'p-3추가';
p3.classList.add('p-3');
container.append(p3, '안녕하세요');

//append appendChild 같음
//container.append = container.appendChild
//append는 여러개 할수 있어서 장점
//container.append(p2, p3) 이렇게 가능
//글자를 뒤에 붙일 수 있음

//prepend() : 선택된 요소의 맨 앞 자식으로 추가

//li태그 만들고, '캉가' friends 클래스 추가
let li = document.createElement('li');
li.textContent = '캉가';
li.classList.add('friends');

friends.prepend(li);
//prepend 는 제일 앞으로 온다

console.log(h1);

//before()
let h3 = document.createElement('h3');
h3.innerText = 'h3 tag';
h1.before(h3);

//after()
let h2 = document.createElement('h2');
h2.innerText = 'h2 tag';
h1.after(h2);

//요소삭제 > remove(), removeChild()
let firstli = document.querySelector('li');
// console.log(firstli);
let ul = firstli.parentElement;
// console.log('🚀 ~ ul:', ul);
firstli.remove(); // 선택된 요소가 삭제
//삭제할 요소.remove()

ul.removeChild(firstli); //자시요소 삭제할 때
//부모요소, removeChild(삭제할 자식 요소)

//
const parentDiv = document.querySelector('.container');
const img = document.createElement('img');
const span = document.createElement('span');
const div = document.createElement('div');

span.innerText = '이요르';
img.setAttribute('src', '../../img/pooh.png');
img.alt = '푸';

div.append(img, span);
parentDiv.append(div);
