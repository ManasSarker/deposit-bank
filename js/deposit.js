document.getElementById("btn-deposit").addEventListener("click", function () {
  const previousDepositValue = getTextElementById("deposit-total");

  console.log("deposit total", previousDepositValue);

  const inputDepositValue = getInputElementById("input-deposit-field");

  const newDepositValue = previousDepositValue + inputDepositValue;

  setValueById("deposit-total", newDepositValue);

  const previousBalance = getTextElementById("balance-total");

  const newBalance = inputDepositValue + previousBalance;

  setValueById("balance-total", newBalance);
});
