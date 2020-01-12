var Binary = {};

Binary.__proto__ = {
  /**
   * converts the Binary string into the array of binary string
   *
   * @param {string} string
   * @returns Array of binary bits
   */
  convert_string_to_array_of_binary: function convert_string_to_array_of_binary(string) {
    let arr = [];

    for (let i = 0; i < string.length; i++) {
      arr.push(parseInt(string[i], 2));
    }
    return arr;
  },
  /** Sum A and Q ignoring the last carry
   *
   *
   * @param {Array} Q Array of binary bit
   * @param {Array} A Aray of binary bit
   * @returns {Array} sum of A and Q in binary bit
   */
  binary_addition: function binary_addition(Q, A) {
    let Q_len = Q.length;
    let carry = 0;
    let sum = [];
    for (let i = Q_len - 1; i >= 0; i--) {
      sum[i] = Q[i] + A[i] + carry;
      if (sum[i] > 1) {
        carry = 1;
      } else {
        carry = 0;
      }
      sum[i] = sum[i] % 2;
    }
    return sum;
  },
  /** converts the array of binary bit into
   * binary string
   *
   *
   * @param {Array} arr  Array of binary bit
   * @returns equivalent string
   */
  convert_array_of_binary_to_string: function convert_array_of_binary_to_string(arr) {
    let string = "";
    arr.forEach(element => {
      string = string.concat(element);
    });
    return string;
  }
};

var M_len, Q_len;
var __M, minus_M, A, Q_0, Q_1, Q_0Q_1, count;
var M = 9,
  Q = 7;
function init() {
  /*
//* find the length of M and Q
/**
 * parsing the integer into binary string
 * then finding its length
 * 1 is added so that it works for - M as well
 *
 * 2 is added for finding the length of Q so that
 * it works for 7 15 or 111 1111 1111 binary value of Q
 */

  M_len = parseInt(Math.abs(M), 10).toString(2).length + 1;
  Q_len = count = Q >= 0 ? parseInt(Math.abs(Q), 10).toString(2).length + 1 : parseInt(Math.abs(Q), 10).toString(2).length + 2;

  //* Converting M ,the interger to binary
  if (M > 0) {
    __M = parseInt(M, 10).toString(2);
    minus_M = parseInt(Math.pow(2, M_len) + ~M + 1, 10).toString(2);
  } else {
    __M = parseInt(Math.pow(2, M_len) + ~Math.abs(M) + 1, 10).toString(2);
    minus_M = parseInt(Math.abs(M), 10).toString(2);
  }
  //* Converting Q, the integer to binary
  Q > 0 ? (Q = parseInt(Q, 10).toString(2)) : (Q = parseInt(Math.pow(2, count) + ~Math.abs(Q) + 1, 10).toString(2));

  //* eg. Ajusting 00000 binary instead of 0 integer
  A = "";
  for (let i = 0; i < M_len; i++) {
    A = A.concat("0");
  }

  //* comparing Q0Q-1

  A = Binary.convert_string_to_array_of_binary(A);
  Q = Binary.convert_string_to_array_of_binary(Q);
  __M = Binary.convert_string_to_array_of_binary(__M);
  minus_M = Binary.convert_string_to_array_of_binary(minus_M);

  //* Fixing the length of __M , minux_M , Q
  //ie. Adding 0 infront of __M , minux_M , Q
  if (__M.length < M_len) {
    __M.unshift(0);
  }
  if (minus_M.length < M_len) {
    minus_M.unshift(0);
  }
  if (Q.length < Q_len) {
    Q.unshift(0);
  }

  //* Finding A0Q-1
  Q_0 = Q[Q.length - 1];
  Q_1 = 0;
  Q_0Q_1 = String(Q_0).concat(Q_1);

  callback = condition;
  DOM_select.start.style.fill = "white";
  DOM_select.init.style.fill = "green";
  current_process = "intitialization";
  view();
}
