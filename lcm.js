//gcd

function gcd(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }

  return a;
}

//lcm

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(10, 5));
