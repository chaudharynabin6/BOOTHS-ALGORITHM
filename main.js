var multiplicant = -6,
  multiplier = -9;
(function booth_algo(M, Q) {
  var A = "0";
  const M_len = parseInt(Math.abs(M), 10).toString(2).length + 1;
  const Q_len = (count = Q >= 0 ? parseInt(Math.abs(Q), 10).toString(2).length : parseInt(Math.abs(Q), 10).toString(2).length + 1);

  if (M > 0) {
    __M = parseInt(M, 10).toString(2);
    minus_M = parseInt(Math.pow(2, M_len) + ~M + 1, 10).toString(2);
  } else {
    __M = parseInt(Math.pow(2, M_len) + ~Math.abs(M) + 1, 10).toString(2);
    minus_M = parseInt(Math.abs(M), 10).toString(2);
  }

  Q > 0 ? (Q = parseInt(Q, 10).toString(2)) : (Q = parseInt(Math.pow(2, count) + ~Math.abs(Q) + 1, 10).toString(2));

  //* comparing Q0Q-1
  var Q_0 = Q[Q_len - 1];
  var Q_1 = 0;
  var Q_0Q_1 = Q_0.concat(Q_1);
  while (count > 0) {
    switch (Q_0Q_1) {
      case "10":
        //TODO: A <- A - __M
        // A += minus_M;  //!wrong approach
        // A = parseInt(A, 2).toString(10) + parseInt(minus_M, 2).toString(10);
        // A = (A >>> 0).toString(2); //! not applicable for this condition
        break;

      case "01":
        //TODO: A <- A +  =__M
        //A += int__M; //! wrong approach
        // A = parseInt(A, 2).toString(10) + parseInt(__M, 2).toString(10);
        // A = (A >>> 0).toString(2); //! not applicable for this condition
        break;

      default:
        break;
    }
    // if (A.length > M_len) {
    //   A = A.slice(1);
    // }
    // if (M_len > A.length) {
    //   for (let i = M_len - A.length; i > 0; i--) {
    //     A = "0".concat(A);
    //   }
    // }

    // if (A.length > M_len) {
    //   A = A.slice(-M_len);
    // }
    var AQ = A.concat(Q);

    // if (AQ.length > M_len + Q_len) {
    //   AQ = AQ.slice(1);
    // }
    //* Arithmetic shift right

    Q_1 = AQ[AQ.length - 1];

    var temp_arr = [];

    for (let i = Q_len + M_len - 2; i >= 0; i--) {
      ("strict mode");
      temp_arr[i + 1] = AQ[i];
    }
    temp_arr[0] = AQ[0];
    var temp_string = "";
    temp_arr.forEach(element => {
      temp_string = temp_string.concat(element);
    });
    AQ = temp_string;

    A = AQ.slice(0, M_len);
    Q = AQ.slice(M_len);
    Q_0 = Q[Q_len - 1];
    Q_0Q_1 = Q_0.concat(Q_1);
    count--;
  }
  multiple = parseInt(AQ, 2).toString(10);
  zzzzzzzzzzzzzzzzzzzzzzz = 1;
})(multiplicant, multiplier);

//* Two's complement using bitwise "not": "~" operator
//@param 128 for 7 bit representation
//@param number in int
//@param 1 is added for 2's complement as 128 + ~number gives 1's complement -> string
var minus_M = parseInt(128 + ~3 + 1, 10).toString(2);

//* Return length of string
//Q.length

//* comparing Q0Q-1
Q_0 = minus_M[minus_M.length - 1];
Q_1 = 0;

Q_0Q_1 = Q_0.toString() + Q_1.toString();

//*Remove the first bit of binary
minus_M = minus_M.slice(1);

//* Arithmetic shift right
bin = parseInt(9).toString(2);
bin_0 = bin[0];
bin = (parseInt(9) >> 1).toString(2);
bin = bin_0.concat(bin); //
String.zzzzzzzzzzzzzzzzzz = 1;

function convert_string_to_array_of_binary(string) {
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    arr.push(parseInt(string[i], 2));
  }
  return arr;
}

A = convert_string_to_array_of_binary("1110");
Q = convert_string_to_array_of_binary("1110");

AQ = [1, 1, 1, 1, 0, 0, 0];
//AQ = [...A, ...Q];
AQ = AQ.reverse();
[Q_1, ...AQ] = AQ;
AQ = AQ.reverse();
AQ.unshift(AQ[0]);

function binary_addition(Q, A) {
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
}

var sum = binary_addition(A, Q);
