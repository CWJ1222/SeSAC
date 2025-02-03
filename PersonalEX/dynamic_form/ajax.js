function ajaxGet() {
  // 폼 선택(form의 이름이 register)
  const form = document.forms['register'];

  // ----- ajax 요청 -----
  // 보낼 데이터 객체형태로 만들기
  const data = {
    name: form.name.value, //"이름.."
    gender: form.gender.value, //"여성", "남성"
  };

  /* ajax 사용 */
  $.ajax({
    type: 'get', // 어떤 메소드로 보낼건지? (get, post, delete,..)
    url: '/ajax', // form 의 action 에 해당하는 곳
    data: data, // 서버로 넘겨줄 데이터

    //   통신이 성공했을 때
    success: function (res) {
      // 통신 이후에 일어날 일들..
      console.log(res);
      resultBox.textContent = `GET /ajax 요청 완료!
             ${res.name}의 성별은 ${res.gender}`;
    },
    //   통신이 실패했을 때
    error: function (err) {
      console.log('err', err);
    },
  });
}

function ajaxPost() {
  const form = document.forms['register'];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  $.ajax({
    type: 'post',
    url: '/ajax',
    data: data,
    success: function (data) {
      console.log(data);
      resultBox.textContent = `POST /ajax 요청 완료!
          ${data.name}의 성별은 ${data.gender}`;
    },
    error: function (error) {
      console.log(error);
    },
  });
}
