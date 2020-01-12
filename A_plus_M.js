function A_plus_M() {
  //FIXED: A <- A +  =__M
  //A += int__M; //! wrong approach
  // A = parseInt(A, 2).toString(10) + parseInt(__M, 2).toString(10);
  // A = (A >>> 0).toString(2); //! not applicable for this condition

  //?new solution
  A = Binary.binary_addition(A, __M);

  callback = ASR;
  DOM_select.first_decision.style.fill = "white";
  DOM_select.A_plus_M.style.fill = "green";
  current_process = "A = A+M";
  view();
}
