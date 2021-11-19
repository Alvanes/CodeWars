function cookingTime(eggs) {
  let time = 0;
  time = Math.ceil((eggs * 5) / 8);
  while (time % 5 !== 0) { time = time + 1}
  return time;
}