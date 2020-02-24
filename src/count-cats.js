module.exports = function countCats(array) {
  let count = 0;
  for(let arr of array) {
    for(let a of arr) {
      if(a == '^^') {
        count++;
      }
    }
  }
  return count;
};
