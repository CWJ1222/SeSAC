let fruit = prompt('무슨 과일을 사고 싶나요?');

switch (fruit) {
  case '사과':
    console.log('100원 입니다.');
    break;
  case '바나나':
    console.log('200원 입니다.');
    break;
  case '키위':
    console.log('300원 입니다.');
    break;
  case '멜론':
    console.log('500원 입니다.');
    break;
  case '수박':
  case '호박':
    console.log('1000원 입니다.');
    break;
  default:
    console.log('재입력 하세요');
}

//switch는 break걸지 않으면 해당 사항 이후 코드 모두 실행됨
//해당하지 않는 항목은 default로 분류함
//같은 실행이면 묶어서 조건에 넣는 것도 가능
