    // Alex накодил

const quarter = (month) =>
{
    if (month === 1 || month === 2|| month === 3)
    {
        return ("Первый квартал");
    }
    if (month === 4 || month === 5|| month === 6)
    {
        return ("Второй квартал");
    }
    if (month === 7 || month === 8|| month === 9)
    {
        return ("Третий квартал");
    }
    if (month === 10 || month === 11|| month === 12)
    {
        return ("Четвёртый квартал");
    }
}
alert(quarter(1));

     // Лисий код

const quarter = (month) => Math.floor((month - 1)/ 3) + 1