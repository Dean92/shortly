const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

btn.addEventListener('click', navToggle);
linkForm.addEventListener('submit', formSubmit);

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

function validUrl(str) {
  // Use a regular expression to test the string
  const regex = /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[\w\d-./?%&=]*)?$/;
  return regex.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something';
    input.classList.add('border-red');
  } else if (!validUrl(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL';
    input.classList.add('border-red');
  } else {
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Great Success');
  }
}
