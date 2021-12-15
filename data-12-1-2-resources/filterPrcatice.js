var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sStart = words.filter(function(sWord){
    return sWord[0] === "s";
});

console.log(sStart);

//-------------------

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sStart = words.filter(sWord => sWord[0] === "s");

console.log(sStart);