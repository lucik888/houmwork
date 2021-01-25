function number (b) {
    return b - b - b;
}
document.querySelector("button").onclick = () => {
    console.log (number(3));
}
number(3);
