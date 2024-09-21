

document.getElementById('btn-add-money').addEventListener('click', function (event) {
  event.preventDefault();

  let addAmountInput = document.getElementById('add-amount-input').value;
  let PinInput = document.getElementById('pin-input').value;
  let banance = document.getElementById('amount').innerText;

  if (PinInput === '1234') {
    let bananceAddMoney = parseFloat(banance) + parseFloat(addAmountInput);
    document.getElementById('amount').innerText = bananceAddMoney
  }  else{alert('wrong info')}
})