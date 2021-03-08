const moods = {
  sad: 'sad',
  normal: 'normal',
  happy: 'happy',
  happyHappy: 'happy happy',
}

const things = {
  tastyFood: 'tasty food',
  drink: 'drink',
  smoking: 'smoking',
  tvShow: 'TV show',
}

const createBoy = (name, checkMood) => {
  const boy = {
    name,
    inside: [],
    mood: moods.normal,
    add: (thing) => {
      boy.inside.push(thing);
      boy.mood = checkMood(boy.inside);
    },
  }

  return boy;
};

const lucik = createBoy('Lucik')
const fox = createBoy('Fox', (inside) => {
  const isEmpty = inside.length === 0;
  const hasTastyFood = inside.includes(things.tastyFood);
  const hasDrink = inside.includes(things.drink);
  const hasSmoking = inside.includes(things.smoking);
  const hasLucik = inside.includes(lucik);

  if (isEmpty) {
    return moods.sad;
  }

  if (hasTastyFood && hasDrink && hasSmoking && hasLucik) {
    return moods.happyHappy;
  }

  if (hasTastyFood || hasDrink || hasSmoking || hasLucik) {
    return moods.happy;
  }

  return moods.normal;
});

fox.add(things.tvShow);

console.log('Fox after TV show', fox);

fox.add(things.tastyFood);

console.log('Fox after tasty food', fox);

fox.add(things.drink);

console.log('Fox after drink', fox);

fox.add(things.smoking);

console.log('Fox after smoking', fox);

fox.add(lucik);

console.log('Fox after Lucik', fox);
