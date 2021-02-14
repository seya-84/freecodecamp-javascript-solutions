function sumAll(arr) {
  var n1 = Math.min.apply(null, arr);
  var n2 = Math.max.apply(null, arr);
  return ((n2 + n1) * (n2 - n1 + 1)) / 2;
}
sumAll([1, 4]);
