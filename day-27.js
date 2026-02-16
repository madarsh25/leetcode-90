// 1732. Find the Highest Altitude

var largestAltitude = function (gain) {
  sum = 0;
  arr = [0];
  for (i = 1; i <= gain.length; i++) {
    sum += gain[i - 1];
    arr[i] = sum;
  }
  maxAlt = Math.max(...arr);
  return maxAlt;
};
