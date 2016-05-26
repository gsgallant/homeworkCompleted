
//setup variables
var playerScore = 0;
var randomnum = 0;
var endOfGame = false;	
var playLoses = false;
var playerScore = 0;
var wins=0;
var losses=0;
var winaudio = new Audio('assets/audio/cheer.mp3');//winner audio
var loseaudio = new Audio('assets/audio/aww.mp3');//loser audio

var crystal = {
	red : {
		strength :0,
		pathtoimg : "assets/images/red.png",

	},

	blue : {
		strength : 0,
		pathtoimg : "assets/images/blue.png",
	},
	
	yellow : {
		strength : 0,
		pathtoimg : "assets/images/yellow.png",
	},

	green : {
		strength : 0,
		pathtoimg : "assets/images/green.png",
	},

};



$(document).ready(function(){

	
	$('#red').append('<img src=' + crystal.red.pathtoimg + '>');
	$('#red').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.red.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#blue').append('<img src=' + crystal.blue.pathtoimg + '>');
	$('#blue').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.blue.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#yellow').append('<img src=' + crystal.yellow.pathtoimg + '>');  
	$('#yellow').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.yellow.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	$('#green').append('<img src=' + crystal.green.pathtoimg + '>');
	$('#green').click(function(){
		if (endOfGame == false){
		playerScore=playerScore + crystal.green.strength;
		checkScore();
		$('#playerScore').html(playerScore);
		};
	})


	function checkScore(){
				$('#playerScore').html(playerScore);
				if (playerScore == randomnum){
						endOfGame = true;
						wins++;
						$('#announce').text("You Win!!");
						winaudio.play();
						}else if (playerScore > randomnum){
							Playerloses = true;
							endOfGame = true;
							losses++;
							$('#announce').text("You Lose!");
							loseaudio.play();
						};
						
						if (endOfGame){
						$('#wins').html("Wins: " + wins);
						$('#losses').html("Losses: "+losses);
						setTimeout(startgame,2500);
						}
	}

	function startgame(){
			endOfGame = false;	
			playLoses = false;
			playerScore = 0
			randomnum = Math.round(Math.random() * (120 - 19)) + 19;
			
			crystal.red.strength = Math.round(Math.random() * (12-1)) + 1;
			crystal.blue.strength = Math.round(Math.random() * (12-1)) + 1;
			crystal.yellow.strength = Math.round(Math.random() * (12-1)) + 1;
			crystal.green.strength = Math.round(Math.random() * (12-1)) + 1;
			
			$('#playerScore').html(playerScore);
			$('#randnum').html(randomnum);
			$('#announce').text("New Game!");
			$('#wins').html("Wins: " + wins);
			$('#losses').html("Losses: "+losses);
	}



startgame();

});//closes the $JQuery