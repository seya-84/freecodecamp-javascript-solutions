function repeatStringNumTimes(str, num) {
  let result = "";
  while(num > 0) {
    result += str;
    num--;
  }

  return result;
}

repeatStringNumTimes("abc", 3);