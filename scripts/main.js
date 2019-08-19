// (function (document, $) {

(function() {

	var myJsonData;
	const buttons = document.querySelectorAll('.button');

	//var list = document.querySelector('.selection');
	var characterPrompt = document.getElementById("character_prompt");
	var physicalDeformityPrompt = document.getElementById("physicalDeformity_prompt");
	var jobPrompt = document.getElementById("job_prompt");
	var problemPrompt = document.getElementById("problem_prompt");
	var goalAspirationPrompt = document.getElementById("goalAspiration_prompt");


	/*function fetchCardLists(){
		// $.ajax method returns a "deferred" otherwise known as a Promise
		// a promise is either resolved (success) or errors, known as a catch (you catch the error)
		return $.ajax('/data/cardlists.json');

	}*/

	function reqListener () {
		myJsonData = JSON.parse(this.responseText);
		
	}

	function request() {
		const url = '/data/data.json',
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

		for (var i = 0; i < buttons.length; i++) {
				buttons[i].addEventListener('click', onCreateButtonClick);
	
    	}

		request();
	}

	function onCreateButtonClick(){

		var people = chooseCard('people');
		var superHeroVillain = chooseCard('superHeroVillain');
		var animal = chooseCard('animal');
		var foodDrink = chooseCard('foodDrink');
		var object = chooseCard('object');
		var job = chooseCard('job');
		var physicalDeformity = chooseCard('physicalDeformity');
		var problem = chooseCard('problem');
		var goalAspiration = chooseCard('goalAspiration');
		
		var characterArray = [people, superHeroVillain, animal, foodDrink, object];
		
		for(let i=0; i<characterArray.length; i++){

			var randomNumber = Math.floor(Math.random() * characterArray.length);
			var character = characterArray[randomNumber];

		}

		//TO DO: add stuff in to do each part one by one. Can do story in sections, so when another prompt comes up, if it makes no sense where the story was going, it might be funnier
		characterPrompt.innerHTML = character;
		jobPrompt.innerHTML = job;
		physicalDeformityPrompt.innerHTML = physicalDeformity;
		problemPrompt.innerHTML = problem;
		goalAspirationPrompt.innerHTML = goalAspiration;



		
	}

	document.addEventListener('DOMContentLoaded', ready);

// })(document, jQuery);

}());

