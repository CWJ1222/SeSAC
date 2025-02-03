// 메뉴 토글 함수
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// 폼 표시 함수
function showForm(formType) {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (formType === 'login') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }
}

// 폼 숨기기 함수
function hideForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'none';
}

// 로그인 함수
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  alert(`Logged in as: ${username}`);
  hideForm();
}

// 회원가입 함수
function signup() {
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;
  alert(`Signed up with username: ${username}`);
  hideForm();
}

function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  if (dropdownMenu.style.display === 'block') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'block';
  }
}
