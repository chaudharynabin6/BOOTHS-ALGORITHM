function count_condition() {
  if (count === 0) {
    callback = stop;
  } else {
    callback = condition;
  }
  DOM_select.ASR.style.fill = "white";
  DOM_select.count.style.fill = "green";
}
