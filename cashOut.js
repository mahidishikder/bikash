


document.getElementById('btn-cash-out').addEventListener('click', function (e) {
  e.preventDefault();
  let cashOutInput = document.getElementById('cash-out-input').value;
  let pinInput2 = document.getElementById('pin-input2').value;
  let balance = document.getElementById('amount').innerText
  if(pinInput2 === '1234'){
    let balanceCashOut = parseFloat(balance) - parseFloat(cashOutInput);
    document.getElementById('amount').innerText = balanceCashOut
  }
  else{
    alert('wrong information')
  }
})