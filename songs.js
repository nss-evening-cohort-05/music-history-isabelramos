// var playlistContainer = document.getElementById("playlist");
// var showMoreButtonDiv = document.getElementById("show-more");
// var showMoreButton = document.getElementsByClassName("show-more");

// function printSongsToDom (data, playlist) {
// 	var currentSong;
// 	var songString = "";

// 	for (var i=0; i < data[playlist].length; i++){
// 		currentSong = data[playlist][i];

// 		songString += `<div>`;
// 		songString += `<h2>${currentSong.song}</h2>`;
// 		songString += `${currentSong.artist} | ${currentSong.album} | ${currentSong.genre}` + `<br><br>`;
// 		songString += `<button class="delete-song">Delete</button>`
// 		songString += `</div>`;
// 	}	
// 	playlistContainer.innerHTML += songString;
// }


// document.body.addEventListener("click", function () {
// 	if (event.target.className === "delete-song") {
// 		event.target.parentElement.remove();
// 	}
// });

// showMoreButtonDiv.addEventListener("click", function() {
// 	secondXhr();
// 	// showMoreButton.classList.add("disabled");
// });

// function executeThisCodeAfterFileLoadPlaylist () {
// 	var data = JSON.parse(this.responseText);
// 	// for (variable in object)
// 	for (key in data) {
// 		var playlist = key;
// 		printSongsToDom(data, playlist);
// 	} 
// 	console.log(data);
// }

// function executeThisCodeAfterFileFail () {
// 	console.log("failureeee!");
// }

// var myFirstRequest = new XMLHttpRequest();
// myFirstRequest.addEventListener("load", executeThisCodeAfterFileLoadPlaylist);
// myFirstRequest.addEventListener("error", executeThisCodeAfterFileFail);
// myFirstRequest.open("GET", "playlist-1.json");
// myFirstRequest.send();

// function secondXhr () {
// 	var mySecondRequest = new XMLHttpRequest();
// 	mySecondRequest.addEventListener("load", executeThisCodeAfterFileLoadPlaylist);
// 	mySecondRequest.addEventListener("error", executeThisCodeAfterFileFail);
// 	mySecondRequest.open("GET", "playlist-2.json");
// 	mySecondRequest.send();
// }



