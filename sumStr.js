const sumStr = (a, b) => {
  const numA = Number(a);
  const numB = Number(b);
  const result = numA + numB;
  if (result !== result) {
    return "пиши цифры";
  }
  const strResult = String(result);
  return strResult;
}
console.log(typeof sumStr);
alert(sumStr("парпекрп", "4"));


