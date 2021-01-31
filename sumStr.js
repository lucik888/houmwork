const sumStr = (a, b) => {
  const numA = Number(a);
  const numB = Number(b);
  const result = numA + numB;
  if (result !== result) {
    return "пили цифры";
  }
  const strResult = String(result);
  return strResult;
}

alert(sumStr("5", "4"));
