function A_minus_M() {
  //FIXED: A <- A - __M
  // A += minus_M;  //!wrong approach
  // A = parseInt(A, 2).toString(10) + parseInt(minus_M, 2).toString(10);
  // A = (A >>> 0).toString(2); //! not applicable for this condition

  //?new solution
  A = Binary.binary_addition(A, minus_M);

  callback = ASR;
  DOM_select.first_decision.style.fill = "white";
  DOM_select.A_minus_M.style.fill = "green";
  current_process = "A = A-M";
  view();
}
