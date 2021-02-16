const makeNegative = (num) => {
    if (num <= 0){
        return num;
    }
    return -num;
}
console.log(makeNegative(5));

// const makeNegative = (num) => {
//     if (num <= 0) {
//         // если число меньше или  равно 0  - возвращаем его без изменений
//         return num;
//     }
//     // иначе - возвращаем число со знаком минус
//     return -num;
// }