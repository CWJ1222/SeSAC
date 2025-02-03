console.log('eee');
//요소 선택 방법
//$('CSS선택자')

console.log($('#div1'));

$('button').css('color', 'red');
//queryselectorall, for써야 할 수 있는 걸 바로 할 수 있음

function submitjs() {
  //div1 선택
  document.getElementById('div1').innerText = '반갑습니다';
  document
    .getElementById('div1')
    .setAttribute('style', 'border: 2px solid red');
}

function submitjQ() {
  $('#div1').text('hello jQuery');
  $('#div1').css('border', '3px dotted blue');
}
