const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

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
