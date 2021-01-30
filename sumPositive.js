const sumPositive = (array) => {
  let result = 0;
  for (let item of array) {
    if (item > 0) {
      result = result +item;
      // result += item;
    }
  }
  return result;
}
alert(sumPositive([1,4,-6]));

// const sumPositive = (array) => array.reduce((sum, item) => item > 0 ? sum + item : sum, 0);
// alert(sumPositive([1,4,-6]));
