const candy_division = candy_count => {
  const peoples = [];
  if (candy_count < 2 || candy_count > Math.pow(10, 12)) {
    return peoples;
  }
  // for (let i = 1; i <= candy_count; i++) {
  //   if (candy_count % i == 0) {
  //     peoples.push(i - 1);
  //   }
  // }
  for (let i = 1; i <= Math.sqrt(candy_count); i++) {
    if (!(candy_count % i)) {
      peoples.push(i);
    }
  }

  const len = peoples.length;
  if (len > 1) {
    const mid = candy_count / peoples[len - 1];
    if (peoples[len - 1] !== mid) {
      peoples.push(mid);
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    peoples.push(candy_count / peoples[i]);
  }

  return peoples.map(p => p - 1);
};
console.log('result ========>', candy_division(30));
