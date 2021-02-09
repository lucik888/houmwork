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

const square2 = document.querySelector('.square2');

square2.addEventListener('click', () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  square2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  if (square2.style.borderRadius === `50%`) {
    square2.style.borderRadius = `0`;
  }
  else {
    square2.style.borderRadius = `20%`
  }
  if (square2.style.transform === 'rotate(180deg)') {
    square2.style.transform = '';
  } else {
    square2.style.transform = 'rotate(180deg)';
  }
   });