function getInitials(fullName) {
    let names = fullName.split(" ");
    let initials ="";
    for (let i = 0; i < names.length; i++) {
        initials += names[i].substr(0,1).toUpperCase()
    }
    return initials
}
const fullName = "robert michael degeorge";
console.log(`The initials for ${fullName} are ${getInitials(fullName)}`);





/*
.concat()
.indexOf()
.lastIndexOf()
.match()
.replace()
.slice()
////.split()
.toLowerCase()
////.toUpperCase()
////.substr()
*/