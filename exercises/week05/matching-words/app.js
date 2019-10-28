const string = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

function findDuplicates(str) {
  const splitStr = str.split(" ");
  str.replace(/[.,]/g, '')
  const duplicates = [];
  for (let i = 0; i < splitStr.length; i++){
    let total = 0;
    for (let j = 0; j < splitStr.length; j++) {
      if (splitStr[j] === splitStr[i]) {
        total++
        if (total > 1 && !duplicates.includes(splitStr[i])) {
          duplicates.push(splitStr[i]);
        }
      }
    }
  }
  return duplicates;
}

console.log(findDuplicates(string))
