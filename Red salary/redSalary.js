const fee = (md, rd, tax) => {
          return rd * (tax / md);
}

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (ev) => {


    ev.preventDefault();
    const { md, rd, tax } = ev.target.elements;

    result.textContent = fee(md.value, rd.value, tax.value);

});

form.addEventListener('reset', () => {

    result.textContent = '';
});
