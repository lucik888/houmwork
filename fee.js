// считаем зарплату - fee
// рабочие дни в месяцн - md
// отработано сотрудником - rd
// уровень зп - tax

const fee = (md, rd, tax) => {
    const calc = rd*(tax/md); {
        return calc;
    }
}
alert(fee(md=24, rd=24, tax=50000));