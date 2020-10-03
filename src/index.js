
exports.min = function min(array) {
  if (!array || array.length == 0) return 0;

  return array.reduce((a, x) => x < a ? x : a, array[0]);
}

exports.max = function max(array) {
  if (!array || array.length == 0) return 0;

  return array.reduce((a, x) => x > a ? x : a, array[0]);
}

exports.avg = function avg(array) {
  if (!array || array.length == 0) return 0;

  return array.reduce((a, x) => a + x, 0) / array.length;
}
