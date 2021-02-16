const fee = (md, rd, tax) => {
  return rd * (tax / md);
}

// ищем элемент формы по id "form"
const form = document.getElementById('form');
// ищем элемент результа по id "result"
const result = document.getElementById('result');

// добавляем обработчик на событие "submit" - отправка формы
form.addEventListener('submit', (ev) => {
  // предотвращаем перезагрузку страницы (стандартное поведение)
  ev.preventDefault();
  // обращаемся к элементам формы по их id
  const { md, rd, tax } = ev.target.elements;

  // записываем результат работы функции fee в элемент result (вывод результата на экран)
  result.textContent = fee(md.value, rd.value, tax.value);

  // TODO: сделать так, чтобы выводилась ошибка, когда значения не введены в поля (сейчас выдает NaN)
});

// добавляем обработчик на событие "reset" - сброс формы
form.addEventListener('reset', () => {
  // отчищаем содержимое элемента result
  result.textContent = '';
});
