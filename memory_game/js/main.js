console.log("Begin JavaScript");

//Create card variables:

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2)
{
	console.log("User flipped " + cardsInPlay[0]);
	console.log("User flipped " + cardsInPlay[1]);

	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again.");
	}
}