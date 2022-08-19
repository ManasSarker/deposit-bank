document.getElementById("btn-deposit").addEventListener("click", function () {
  /* Get any input value by calling function */
  const inputDepositAmount = getInputFieldValueById("deposit-field");

  /* Get previous deposit total by Id */

  const previousDepositTotalAmount = getFieldValueById("deposit-total");

  const newDepositTotal = inputDepositAmount + previousDepositTotalAmount;

  setTextElementValueById("deposit-total", newDepositTotal);

  /*  Get previous Balance  */

  const previousBalanceTotal = getFieldValueById("balance-total");

  /*  sum two amount to Balance field */

  const newBalanceTotal = inputDepositAmount + previousBalanceTotal;

  setTextElementValueById("balance-total", newBalanceTotal);
});
