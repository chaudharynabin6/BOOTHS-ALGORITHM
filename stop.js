function stop() {
  DOM_select.count.style.fill = "white";
  DOM_select.stop.style.fill = "green";
  mutiple = -Math.pow(2 * AQ[0], AQ.length - 1) + Number(parseInt(Binary.convert_array_of_binary_to_string(AQ.slice(1)), 2).toString(10));
  DOM_select.result.innerHTML = `Product = ${mutiple}`;
}
var mutiple;
