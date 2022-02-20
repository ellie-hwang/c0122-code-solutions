/* exported titleCase */

function titleCase(title) {
  var lcTitle = title.toLowerCase();
  var lcTitleMod = lcTitle;
  for (let i = 0; i < lcTitleMod.length; i++) {
    if (lcTitleMod[i] === ':') {
      lcTitleMod = lcTitleMod.slice(0, i) + ' ' + lcTitleMod.slice(i);
      i++;
    } else if (lcTitleMod[i] === '-') {
      lcTitleMod = lcTitleMod.slice(0, i) + ' ' + lcTitleMod.slice(i, i + 1) + ' ' + lcTitleMod.slice(i + 1);
      i++;
    }
  }
  var wordArr = lcTitleMod.split(' ');
  var titleCaseArr = [];
  var titleCaseStr = '';
  var dictionary = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === 'javascript') {
      wordArr[i] = 'JavaScript';
      titleCaseArr.push(wordArr[i]);
    } else if (wordArr[i] === 'api') {
      wordArr[i] = 'API';
      titleCaseArr.push(wordArr[i]);
    } else if (i === 0) {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    } else if (wordArr[i].length > 4) {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    } else if (wordArr[i - 1] === ':' || wordArr[i - 1] === '-' || wordArr[i + 1] === '-') {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    } else if (wordArr[i] === ':' || wordArr[i] === '-') {
      titleCaseArr.push(wordArr[i]);
    } else if (i !== 0 && dictionary.includes(wordArr[i])) {
      titleCaseArr.push(wordArr[i]);
    } else {
      titleCaseArr.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1));
    }
  }
  for (let i = 0; i < titleCaseArr.length; i++) {
    if (titleCaseArr[i + 1] === ':') {
      titleCaseStr += titleCaseArr[i];
    } else if (titleCaseArr[i + 1] === '-') {
      titleCaseStr += titleCaseArr[i];
    } else if (titleCaseArr[i] === '-') {
      titleCaseStr += titleCaseArr[i];
    } else {
      titleCaseStr += titleCaseArr[i] + ' ';
    }
  }
  return titleCaseStr.slice(0, -1);
}
