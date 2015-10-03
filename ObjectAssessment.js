var avengersMovie = { //missing var
	name: "Avengers", //missing quotes for string, comma instead of semi-colon
	runtime: "143 mins",//missing quotes for string, comma instead of semi-colon--I treated this like a string, but maybe there is another way?
	releaseYear: 2012,//colon insead of equals sign, comma instead of semi-colon
	"Director": "Joss Whedon"//no period at end--Initially I thought you couldn't have strings as the property, but according to mozilla, you can, and even have numbers!
};//add semicolon to end assignment--Semicolon placement really trips me up.
console.log(avengersMovie);
/* old code
avengersMovie = {
    name : Avengers;
    runtime : 143 mins;
    releaseYear = 2012;
    "Director" : "Joss Whedon".
}*/