// (function (document, $) {

(function() {

	var myJsonData;
	var buttons = document.querySelectorAll('.button');

	//var list = document.querySelector('.selection');
	var resultsText = document.getElementById("improv-text");
	

	/*function fetchCardLists(){
		// $.ajax method returns a "deferred" otherwise known as a Promise
		// a promise is either resolved (success) or errors, known as a catch (you catch the error)
		return $.ajax('/data/cardlists.json');

	}*/

	function reqListener () {
		myJsonData = JSON.parse(this.responseText);
		
	}

	function request() {
		var url = '/data/data.json',
		openReq = new XMLHttpRequest();
		
		openReq.addEventListener('load', reqListener);
		openReq.open('get', url, true);
		openReq.send();
		
	}

	function chooseCard(category){

		var collection = myJsonData[category];
		var collectionLength = collection.length;
		var randomNumber = Math.floor(Math.random() * collectionLength);

		return collection[randomNumber];

	}

	function ready(){
		// Math.seedrandom();

		for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', onCreateButtonClick);
	
    	}

		// fetchCardLists().then(function (cardLists) {
		// 	myJsonData = cardLists;
		// })

		request();
	}

	function onCreateButtonClick(){

		var people = chooseCard('people');
		var superHeroVillain = chooseCard('superheroVillain');
		var animal = chooseCard('animal');
		var foodDrink = chooseCard('foodDrink');
		var object = chooseCard('object');
		var job = chooseCard('job');
		var physicalDeformity = chooseCard('physicalDeformity');
		var problem = chooseCard('problem');
		var goalAspiration = chooseCard('goalAspiration');

		var prompt;

		prompt = `${people} ${superHeroVillain} ${animal} ${foodDrink} ${object} ${job} ${physicalDeformity} ${problem} ${goalAspiration}`;


		console.log(prompt);
		resultsText.innerHTML = prompt;
		
	}

	document.addEventListener('DOMContentLoaded', ready);

// })(document, jQuery);

}());

