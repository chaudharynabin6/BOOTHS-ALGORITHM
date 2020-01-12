function condition() {
  switch (Q_0Q_1) {
    case "10":
      callback = A_minus_M;

      break;

    case "01":
      callback = A_plus_M;
      break;

    default:
      callback = ASR;
      break;
  }
  DOM_select.init.style.fill = "white";
  DOM_select.count.style.fill = "white";
  DOM_select.first_decision.style.fill = "green";
}
