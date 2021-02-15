const square = document.querySelector('.square');

square.addEventListener('click', () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  if (square.style.borderRadius === '50%') {
    square.style.borderRadius = '0';
  } else {
    square.style.borderRadius = '50%';
  }

  if (square.style.transform === 'rotate(180deg)') {
    square.style.transform = '';
  } else {
    square.style.transform = 'rotate(180deg)';
  }
});
