function ASR() {
  //*Merging A and Q
  AQ = [...A, ...Q];

  //*Seperating Q_1 from AQ as well as Arithmetic shifting to Right
  AQ = AQ.reverse();
  [Q_1, ...AQ] = AQ;
  AQ = AQ.reverse();
  AQ.unshift(AQ[0]);

  //* Seperating A and Q from AQ
  A = AQ.slice(0, M_len);
  Q = AQ.slice(M_len);

  //*next iteration
  Q_0 = AQ[AQ.length - 1];
  Q_0Q_1 = String(Q_0).concat(String(Q_1));
  count--;

  callback = count_condition;

  DOM_select.A_minus_M.style.fill = "white";
  DOM_select.A_plus_M.style.fill = "white";
  DOM_select.ASR.style.fill = "green";

  current_process = "ASR:AQQ-1 and count = count - 1";
  view();
}
