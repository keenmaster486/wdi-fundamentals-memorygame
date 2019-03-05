console.log("Begin JavaScript");

//Create card variables:

var cards = 
[
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];
var cardsInPlay = [];

//Check for match function:
var checkForMatch = function()
{
	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again.");
	}
}

//Flip function:
var flipCard = function(cardId)
{
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
	console.log("Suit: " + cards[cardId].suit);
	console.log("Image path: " + cards[cardId].cardImage);

	if (cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);