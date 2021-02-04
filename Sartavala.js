// const price = (tax, piplNight, night) => {
//     const calc = (tax / piplNight) * night;
//     return calc;
// }
// alert(price(30000, 25, 3));

// У всех разное количество ночевок
// tax - цена коттеджа за 3 ночи
// piplNgiht - количество человеко-ночёвок
// night - ночёй 1 конкретного человека

const price = (tax, piplNight, night) => (tax / piplNight) * night;

alert(price(30000, 25, 3));

