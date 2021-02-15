// Задал что бы num был строго 10, тогда ok
// если больше или меньше тогда no

const key = (num) => {
    if (num == 10) {
        return "0k";
    }
    return "no";
}
console.log(key(11));