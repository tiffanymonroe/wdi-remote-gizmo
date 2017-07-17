$(() => {

// Global variable
let currentInterval = ""

// Event handler
const startTimer = () => {
	console.log("start timer clicked");

	currentInterval = setInterval(() => {
		// reassign the text of the stopwatch
		$('#stopwatch').text($('#stopwatch').text() + 1);
	}, 1000)

}

const stopTimer = () => {
	console.log("stop timer clicked");
	clearInterval(currentInterval);
}

// Event listeners
$('#start').on('click', startTimer);
$('#stop').on('click', stopTimer);


}); // end window onload
