const str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

function findDuplicates(str) {
  const array = str.split(' ');
  const arrNoDupes = removeDuplicates(array);
  for (let i = 0; i < arrNoDupes.length; i++) {
    for (let j = 0; j < array.length; j++) {
      
    }
  }
};
function removeDuplicates(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (checkArrForStr(array[i],newArray)) {
        break;
      } else if (array[i] === array[j]) {
        newArray.push(array[i])
      };
    };
  };
  return newArray;
}
function checkArrForStr(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}
console.log(findDuplicates(str));