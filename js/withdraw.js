document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawValue = getTextElementById("withdraw-total");

  const withdrawInputValue = getInputElementById("input-withdraw-field");

  const newWithdrawValue = withdrawValue + withdrawInputValue;

  //set the input value

  setValueById("withdraw-total", newWithdrawValue);

  const previousBalance = getTextElementById("balance-total");

  const newBalance = previousBalance - withdrawInputValue;

  // set the balance value

  setValueById("balance-total", newBalance);

  console.log(newWithdrawValue);
});
