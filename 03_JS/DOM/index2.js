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

div1.textContent = '     여기는 <b>첫번째</b> 태그입니다. &hearts;   /'; //문자열로 읽힘
console.log('🚀 ~ div1.textContent:', div1.textContent); //공백이 실제 들어감
