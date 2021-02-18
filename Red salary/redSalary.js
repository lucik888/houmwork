const fee = (md, rd, tax) => {
    if (undefined, undefined, undefined) {
        return "заполните форму";
    }
    return rd * (tax / md);
}

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (ev) => {

    ev.preventDefault();
    if (fee(undefined , undefined, undefined)) {
        result.textContent = "заполните форму";
    }
      const { md, rd, tax } = ev.target.elements;
        result.textContent = fee(md.value, rd.value, tax.value);

});

form.addEventListener('reset', () => {

    result.textContent = '';
});
