// 04- Median of two sorted arrays

var findMedianSortedArrays = function (nums1, nums2) {
  let num = [];
  let n1 = 0;
  let n2 = 0;
  let n = 0;

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] < nums2[n2]) {
      num[n] = nums1[n1];
      n1++;
    } else {
      num[n] = nums2[n2];
      n2++;
    }
    n++;
  }

  while (n1 < nums1.length) {
    num[n] = nums1[n1];
    n1++;
    n++;
  }

  while (n2 < nums2.length) {
    num[n] = nums2[n2];
    n2++;
    n++;
  }

  let nl = num.length;
  let med1, med2;

  if (nl % 2 === 0) {
    med1 = num[nl / 2 - 1];
    med2 = num[nl / 2];
  } else {
    med1 = num[Math.floor(nl / 2)];
    med2 = med1;
  }

  return (med1 + med2) / 2;
};
