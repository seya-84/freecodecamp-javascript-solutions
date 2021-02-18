function sumFibs(num) {
  let n = 0;
  let nPlusOne = 1;
  let temp;
  let sum = 0;

  while (n <= num) {
    temp = n;
    n = n + nPlusOne;
    nPlusOne = temp;

    if (nPlusOne % 2 !== 0) {
      sum += nPlusOne;
    }
  }

  return sum;
}

sumFibs(4000000);
