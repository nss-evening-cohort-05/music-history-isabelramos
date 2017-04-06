var playlistContainer = document.getElementById("playlist");
var songs = [];

function printSongsToDom (data, bothPlaylists) {
	var currentSong;
	var songString = "";

	for (var i=0; i < data[bothPlaylists].length; i++){
		currentSong = data[bothPlaylists][i];

		songString += `<div>`;
		songString += `<h2>${currentSong.song}</h2>`;
		songString += `${currentSong.artist} | ${currentSong.album} | ${currentSong.genre}` + `<br><br>`;
		songString += `<button class="delete-song">Delete</button>`
		songString += `</div>`;
		playlistContainer.innerHTML = songString;
	}		
}

function deleteSong (event) {
	if (event.target.className === "delete-song") {
		console.log(event);
		event.target.parentElement.remove();
	}
}

document.body.addEventListener("click", deleteSong);

function executeThisCodeAfterFileLoadBothPlaylists () {
	var data = JSON.parse(this.responseText);
	// for (variable in object)
	for (key in data) {
		var bothPlaylists = key;
		printSongsToDom(data, bothPlaylists);	
	} 
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}

var myFirstRequest = new XMLHttpRequest();
myFirstRequest.addEventListener("load", executeThisCodeAfterFileLoadBothPlaylists);
myFirstRequest.addEventListener("error", executeThisCodeAfterFileFail);
myFirstRequest.open("GET", "playlist-1.json");
myFirstRequest.send();

var mySecondRequest = new XMLHttpRequest();
mySecondRequest.addEventListener("load", executeThisCodeAfterFileLoadBothPlaylists);
mySecondRequest.addEventListener("error", executeThisCodeAfterFileFail);
mySecondRequest.open("GET", "playlist-2.json");
mySecondRequest.send();