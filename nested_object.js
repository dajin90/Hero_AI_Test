const transformValue = obj => {
  Object.keys(obj).forEach(key => {
    const prop = obj[key];
    if (typeof prop === 'number') {
      obj[key] += 1;
    }
    if (typeof prop === 'string') {
      obj[key] += ' AI';
    }
    if (typeof prop === 'object') {
      transformValue(obj[key]);
    }
  });
};
const obj = {
  a: 123,
  b: 'hero',
  c: [1, 2, 3],
  d: {
    e: 3,
    f: ['abc', 'def'],
  },
};
transformValue(obj);
console.log('result ======>', obj);
