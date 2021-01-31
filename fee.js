// считаем зарплату - fee
// рабочие дни в месяцн - md
// отработано сотрудником - rd
// уровень зп - tax

const fee = (md, rd, tax) => {
    const calc = rd*(tax/md);
    return calc;
}

alert(fee(24, 24, 50000));

const fee2 = (params) => {
  const calc = params.rd * (params.tax / params.md);
  return calc;
};

const fee3 = (params) => {
  const rd = params.rd;
  const tax = params.tax;
  const md = params.md;

  return rd * (tax / md);
};

const fee4 = (params) => {
  const { rd, tax, md } = params;

  return rd * (tax / md);
};

const fee5 = ({ rd, tax, md }) => rd * (tax / md);

alert(fee2({ md: 24, rd: 24, tax: 50000 }));

// const array = [1, 2, 3];
//
// const [a, b, c] = array;

// let a = 1;
// let b = 2;
// let temp;
//
// temp = a;
// a = b;
// b = temp;

// let a = 1;
// let b = 2;
//
// [a, b] = [b, a];
