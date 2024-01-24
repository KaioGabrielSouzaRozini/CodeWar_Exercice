function tribonacci(signature, n) {
  let array = signature;

  for (var i = 0; i < n; i++) {
    let newNumber = array[i] + array[i + 1] + array[i + 2];
    array.push(newNumber);
  }
  for (var i = 0; i < 3; i++) {
    array.pop();
  }
  console.log(array);
}
tribonacci([1, 1, 1], 10);
