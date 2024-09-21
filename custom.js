
document.getElementById('login').addEventListener('click', function (e) {
  e.preventDefault();

  let inputNumber = document.getElementById('input-number').value;
  let inputPin = document.getElementById('input-pin').value;
  if (inputNumber === '01965177257' && inputPin === '1234') {
    console.log('login successfull')
    window.location.href = "home.html"
  } else {
    alert('wrong way')
  }


})



