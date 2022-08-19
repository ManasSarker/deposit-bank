function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);

  const inputFieldValueString = inputField.value;

  const inputFieldValue = parseFloat(inputFieldValueString);

  inputField.value = "";

  return inputFieldValue;
}

function getFieldValueById(fieldId) {
  const field = document.getElementById(fieldId);

  const fieldValueString = field.innerText;

  const fieldValue = parseFloat(fieldValueString);

  return fieldValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);

  textElement.innerText = newValue;
}
