module.exports = function createDreamTeam(members) {
  teamNameArr = [];
  teamNameStr = '';
  count = 0;

  if(!Array.isArray(members)) return false;

  for(let str of members) {
    if(typeof str == 'string') {
      str = str.toUpperCase();
      for(let char of str) {
        if(char != ' ') {
          teamNameArr[count] = char;
          count++;
          break;
        }
      }
    }
  }
  teamNameArr.sort();
  for(char of teamNameArr) {
    teamNameStr += char;
  }
  return teamNameStr;
};
