var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

//------------

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

//------------

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);