function start() {
  DOM_select.start.style.fill = "green";
  // M = DOM_select.multiplicand.nodeValue;
  // Q = DOM_select.multiplier.nodeValue;
  input_value = DOM_select.form;
  M = input_value.elements[0].value;
  Q = input_value.elements[1].value;
  callback = init;
}
