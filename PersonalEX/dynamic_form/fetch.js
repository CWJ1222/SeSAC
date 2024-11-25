// then.then.catch fetchGet
function fetchGet() {
  const form = document.forms['register'];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  // fetch("/fetch", {
  //   method: "get",
  // });
  // fetch의 default method는 'GET'
  fetch(`/fetch?name=${data.name}&gender=${data.gender}`)
    .then((response) => {
      console.log(response);
      // 서버에서 넘어온 문자열을 뽑아내기 위해 text() 메소드 사용
      // text(): response 객체에서 텍스트 본문을 뽑아내기 위해 사용
      // return response.text();

      // json(): response 객체에서 오브젝트 본문을 뽑아내기 위해 사용
      return response.json();
    })
    .then((res) => {
      console.log(res);
      resultBox.textContent = `GET /fetch 요청 완료!!
            ${res.name}의 성별은 ${res.gender}`;
      resultBox.style.color = 'limegreen';
    })
    .catch((err) => {
      console.error('err', err);
    });
}

// async await fetchPost
async function fetchPost() {
  const form = document.forms['register'];
  const data = {
    name: form.name.value,
    gender: form.gender.value,
  };

  try {
    const res = await fetch('/fetch', {
      method: 'post',
      //fetch의 body에는 JSON 형식으로 보내야 함
      // object to JSON ==> JSON.stringify(오브젝트!!)
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res); // Response 객체

    // json(), text() >> 시간이 걸리는 작업
    // await 를 이용해 비동기 처리를 해줘야 함
    const result = await res.json();
    console.log(result); // 서버에서 보내주는 object 데이터
    //   result = { name: 'allie', gender: '여성' }
    const { name, gender } = result;
    resultBox.textContent = `POST /fetch 요청 결과: ${name} 의 성별은 ${gender}`;
    resultBox.style.color = 'gray';
  } catch (err) {
    console.error(err);
  }
}
