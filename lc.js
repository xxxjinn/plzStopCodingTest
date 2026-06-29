//gc

function gc(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }

  return a;
}

function lc(a, b) {
  return (a * b) / gc(a, b);
}

console.log(lc(10, 5));
