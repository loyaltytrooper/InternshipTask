let videoPlayer = document.getElementById('videoPlayer');
let videoSources = [
	'Islands.mp4',
	'Waves.mp4'
];

var currentSource = 0;

videoPlayer.addEventListener('ended', nextSource);
// videoPlayer.addEventListener('onPlay', newStart);

function nextSource(){
	// activeSource += 1;
	// if(activeSource > videoSources.length) {
	// 	activeSource = 0;
	// }
	// Ye isliye work nhi kr rha cuz index 2 hote hi voh list se bahar ja rha hai

	console.log("Working");
	currentSource += 1;

	if(currentSource <= videoSources.length - 1){
		videoPlayer.src = videoSources[currentSource];
		videoPlayer.play();
		console.log("Worked");	
	}
		
	else if(currentSource >= videoSources.length){
		console.log("Fresh Start");
		currentSource = 0;
		videoPlayer.src = videoSources[currentSource];	
		console.log("Pausing");
		videoPlayer.pause();
	}	
}		

// function newStart(){
// 	if(toStop == true && videoPlayer.play){
// 		toStop = false;	
// 	}
// }