// 58. Length of Last Word

var lengthOfLastWord = function(s) {
    s=s.trim()
    let arr = s.split(" ");
    return arr[arr.length-1].length
};
