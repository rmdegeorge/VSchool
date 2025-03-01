// Given a selected cell, your program will fill it's room
const house = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', '#', '#', '#', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', '#', '#', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', '#', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#', '#', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
]
// checkCell will check left, right, down, and up of cell. 
// if the cell in that direction is empty, fill cell with an X
// and call checkCell on cell
function checkCell(x, y){
  if (house[y][x] === ' ' && x >= 0 && x <= house[y].length && y >= 0 && y <= house.length) {
    house[y][x] = 'X';
    checkCell(x+1,y);
    checkCell(x-1,y);
    checkCell(x,y+1);
    checkCell(x,y-1);
  }
  return house
}

console.log(checkCell(8,3))
