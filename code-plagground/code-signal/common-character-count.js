function commonCharacterCount(s1, s2) {
  let arr1, arr2;
  if (s1.length > s2.length) {
    arr1 = s1.split("");
    arr2 = s2.split("");
  } else {
    arr1 = s2.split("");
    arr2 = s1.split("");
  }

  let commonChars = 0;

  arr1.forEach((char1,i) => {
    for (let j = 0; j < arr2.length; j++) {
      if (char1 === arr2[j]) {
        commonChars++;
        // arr1.splice(i,1);
        arr2.splice(j,1);
        break;
      }
    }
  })
  return commonChars;
}
const str1 = "abca"
const str2 = "xyzbac";
console.log(commonCharacterCount(str1,str2))