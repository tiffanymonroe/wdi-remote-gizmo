$(() => {

	//===================
	// GLOBAL VARIABLES
	// ==================
	const $stopwatchScreen = $('#stopwatch');

	let currentTime = parseInt($stopwatchScreen.text());

	let currentInterval = "";

	//===================
	// EVENT HANDLERS
	// ==================
	const render = () => {
		$stopwatchScreen.text(currentTime);
	}

	const startTimer = () => {
		console.log('start timer clicked');
		if (currentInterval != ""){
			clearInterval(currentInterval);
			currentTime = 0;
			render();
		}

		currentInterval = setInterval(() => {
			currentTime = currentTime + 1;
			render();
		}, 1000);
	};

	const stopTimer = () => {
		console.log('stop timer clicked');
		clearInterval(currentInterval);
	};

	const resetTimer = () => {
		console.log('reset timer clicked');
		clearInterval(currentInterval);
		currentTime = 0;
		render();
	};

	const countdownTimer = () => {
		console.log('countdown clicked');
		clearInterval(currentInterval);
		currentInterval = setInterval(() => {
				if (currentTime > 0){
					currentTime = currentTime - 1;
					render();
				}
			}, 1000);
		currentInterval = countdownInterval;

	};

	//===================
	// EVENT LISTENERS
	// ==================
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);

}); // end window onload

// Answer created by Kristyn Bryan 2017
