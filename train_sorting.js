const train_sorting = (n, trains) => {
  let list = [];
  for (let i = 0; i < trains.length; i++) {
    const car = trains[i];
    const new_list = [];
    if (i === 0) {
      new_list.push([car]);
      new_list.push([]);
    }
    list.forEach(train => {
      if (train.length === 0) {
        new_list.push([car]);
        new_list.push([]);
      } else {
        if (car > train[0]) {
          new_list.push([car, ...train]);
        } else if (car < train[train.length - 1]) {
          new_list.push([...train, car]);
        }
        new_list.push([...train]);
      }
    });
    list = new_list;
  }
  return Math.max(...list.map(train => train.length));
};
console.log(train_sorting(3, [1, 2, 3]));
console.log(train_sorting(5, [10, 2, 12, 20, 3]));
