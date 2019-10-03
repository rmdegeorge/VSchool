// Preliminaries
console.log("\n\nPreliminaries\n");

for (let i = 0; i < 9; i++) {
    console.log(i);
}

for (let i = 9; i > 0; i--) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// Bronze Medal
console.log("\n\nBronze Medal\n");

let myNumbers = [];
for (let i = 0; i < 9; i++) {
    myNumbers.push(i);
}
console.log(myNumbers);

for (let i = 0; i < 100; i += 2) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var everyOtherFruit = [];
for (let i = 0; i < fruit.length; i += 2) {
    everyOtherFruit.push(fruit[i])
}
console.log(`everyOtherFruit:\n${everyOtherFruit}`)

// Silver Medal
console.log("\n\nSliver Medal\n");

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];
for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

let names = [];
let occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

let everyOtherName = [];
for (let i = 0; i < peopleArray.length; i += 2) {
    everyOtherName.push(peopleArray[i].name);
}
console.log(everyOtherName)

// Gold Medal
console.log("\n\nGold Medal\n");

let matrix1 = [];
for (let i = 0; i < 3; i++) {
    matrix1.push([]);
    for (let j = 0; j < 3; j++) {
        matrix1[i].push(0);
    }
}
console.log(matrix1);

let matrix2 = [];
for (let i = 0; i < 3; i++) {
    matrix2.push([]);
    for (let j = 0; j < 3; j++) {
        matrix2[i].push(i);
    }
}
console.log(matrix2);

let matrix3 = [];
for (let i = 0; i < 3; i++) {
    matrix3.push([]);
    for (let j = 0; j < 3; j++) {
        matrix3[i].push(j);
    }
}
console.log(matrix3);

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrix3[i][j] = "x";
    }
}
console.log(matrix3);











/*
OUTPUT:

~/dev/vschool/assignments/exercises/week01/loop-olympics (master) $ node app.js


Preliminaries

0
1
2
3
4
5
6
7
8
9
8
7
6
5
4
3
2
1
banana
orange
apple
kiwi


Bronze Medal

[ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
0
2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50
52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
86
88
90
92
94
96
98
everyOtherFruit:
banana,apple,pear


Sliver Medal

Harrison Ford
Justin Bieber
Vladimir Putin
Oprah
[ 'Harrison Ford', 'Justin Bieber', 'Vladimir Putin', 'Oprah' ]
[ 'Actor', 'Singer', 'Politician', 'Entertainer' ]
[ 'Harrison Ford', 'Vladimir Putin' ]


Gold Medal

[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
[ [ 0, 0, 0 ], [ 1, 1, 1 ], [ 2, 2, 2 ] ]
[ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]
[ [ 'x', 'x', 'x' ], [ 'x', 'x', 'x' ], [ 'x', 'x', 'x' ] ]

*/