const key = (num) => {
    if (num > 10) {
        return "0k";
    }
    return "no";
}
console.log(key(2));