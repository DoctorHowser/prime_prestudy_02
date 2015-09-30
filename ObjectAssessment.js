var avengersMovie = { //missing var
	name: "Avengers", //missing quotes for string, comma instead of semi-colon
	runtime: "143 mins",//missing quotes for string, comma instead of semi-colon
	releaseYear: 2012,//colon insead of equals sign, comma instead of semi-colon
	director: "Joss Whedon"//property name shouldn't be a string, lowercase director, no period at end
};//add semicolon to end assignment
console.log(avengersMovie);
/* old code
avengersMovie = {
    name : Avengers;
    runtime : 143 mins;
    releaseYear = 2012;
    "Director" : "Joss Whedon".
}*/