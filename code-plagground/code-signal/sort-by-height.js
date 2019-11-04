function sortByHeight(a) {
// remove "trees" (-1) and note their indices
let treeIndices = [];
let noTrees = [];
for (let i = 0; i < a.length; i++) {
  a[i] === -1 ? treeIndices.push(i) : noTrees.push(a[i])
}
// console.log(treeIndices);
// sort
// console.log(noTrees);
noTrees.sort((a,b) => a-b);
// console.log(noTrees);
// put "trees" back in correct positions
treeIndices.forEach((i) => {
  noTrees.splice(i,0,-1);
})
// console.log(noTrees);
return noTrees
}

const heights = [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight(heights))