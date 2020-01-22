var DOM_select = {
  start: document.querySelector("#start"),
  init: document.querySelector("#init"),
  A_minus_M: document.querySelector("#A_minus_M"),
  A_plus_M: document.querySelector("#A_plus_M"),
  ASR: document.querySelector("#ASR"),
  stop: document.querySelector("#stop"),
  first_decision: document.querySelector("#first_decision"),
  count: document.querySelector("#count"),
  single_step: document.querySelector("#single_step"),
  reset: document.querySelector("#reset"),
  table: document.querySelector("#table"),
  multiplicand: document.querySelector("#multiplicand"),
  multiplier: document.querySelector("#multiplier"),
  form: document.querySelector("#form"),
  result: document.querySelector("#result")
};
Object.freeze(DOM_select);
// DOM_select.ASR.style.fill = "green";

var current_process;
var callback = start;

// var flowchart_animate = {
//   start: false,
//   init: false,
//   A_minus_M: false,
//   A_plus_M: false,
//   ASR: false,
//   stop: false,
//   first_decision: false,
//   count: false
// };

single_step.addEventListener("click", function() {
  callback();
});

function view() {
  DOM_select.table.insertAdjacentHTML(
    "beforeend",
    ` <tr>
  <td>${Binary.convert_array_of_binary_to_string(A)}</td>
  <td>${Binary.convert_array_of_binary_to_string(Q)}</td>
  <td>${Q_1}</td>
  <td>${count}</td>
  <td>${current_process}</td>
</tr>`
  );
}

DOM_select.reset.addEventListener("click", function() {
  DOM_select.table.innerHTML = ` <tr>
<th>A</th>
<th>Q</th>
<th>Q-1</th>
<th>count</th>
<th>operation</th>
</tr>`;
  callback = start;
  DOM_select.result.innerHTML = ``;
});
