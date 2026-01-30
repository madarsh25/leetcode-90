// 11- Container with most water

//Solution 1- fails due to time constraints

let height = [1, 6, 2, 5, 4, 8, 3, 7, 9];
let area = 0;
let min = 0;

for (i = 0; i < height.length; i++) {
  for (j = 0; j < height.length; j++) {
    if (height[i] > height[j]) {
      min = height[j];
    } else {
      min = height[i];
    }
    if (min * (j - i) > area) {
      area = min * (j - i);
    }
  }
}
return area;

// Solution 2- works everytime

let left = 0;
let right = height.length - 1;
let area = 0;

while (left < right) {
  let min = Math.min(height[left], height[right]);
  let width = right - left;
  area = Math.max(area, min * width);

  if (height[left] < height[right]) {
    left++;
  } else {
    right--;
  }
}

return area;
