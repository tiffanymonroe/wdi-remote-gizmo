$(() => {

	//===================
	// GLOBAL VARIABLES
	// ==================


	//===================
	// EVENT HANDLERS
	// ==================

	let $seconds = $('#stopwatch').text();
	console.log($seconds);

	const startTimer = () => {
		console.log('start timer clicked');
		setInterval(()=>{
			for (let i=0; i >= 0; i++){
				
			}

			}, 1000);
	};

	const stopTimer = () => {

	};

	const resetTimer = () => {

	};

	const countdownTimer = () => {

	};

	//===================
	// EVENT LISTENERS
	// ==================
	$('#start').on('click', startTimer);
	$('#stop').on('click', stopTimer);
	$('#reset').on('click', resetTimer);
	$('#countdown').on('click', countdownTimer);

}); // end window onload
