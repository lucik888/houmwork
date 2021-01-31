const fact = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * fact(n - 1);
}

alert(fact(8));

// const substitute = (a, b, c) => {
//   const total = a + b + c;
//
//   return fact(total) / (fact(a) * fact(b) * fact(c));
// }
//
// alert(substitute(4, 4, 8));
