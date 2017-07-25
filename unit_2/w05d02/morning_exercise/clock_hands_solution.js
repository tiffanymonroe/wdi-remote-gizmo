const clock = function(hour, minutes){

  // If input is out of range, quit the function
  if ((hour > 12 || hour < 1) || (minutes < 0 || minutes > 59)) {return "out of range"};

  // convert hours to minutes. An hour times five equals the same position on the clock in minutes
  // Example: Hour 6 is at the 30 minute position. 6 * 5 = 30.
  const hoursToMinutes = (hour * 5);

  // There are five 'ticks' of minutes between hour positions. Across sixty ticks, that leaves a quotient of 12.
  // This will be added to the hoursToMinutes to account for 'drift' of the hour hand.
 	//   Example: at 6:30, 30 minutes is at the halfway point between 6 and 7. Since there are five 'ticks' between 6 and 7, the halfway point is 2.5.
 	//   30 / 12 = 2.5. This gets added to the hour hand position.
  const hoursWithDrift = hoursToMinutes + (minutes / 12);

  // Now look at the angles
  let angle = "";

  // Ascertain which is bigger, hoursToMinutes or minutes, and deduct the smaller from the larger.
	// There are 60 minutes in a 360 degree minute hand revolution. Divide the total degrees (360), by the number of minutes in a revolution (60) to see the quotient in degrees. 360 / 60 = 6 degrees for each minute.
  // Convert minutes into degrees with * 6. One minute is 6 degrees.
  if (hoursWithDrift > minutes) {
		angle = (hoursWithDrift - minutes) * 6;
	} else {
		angle = (minutes - hoursWithDrift) * 6;
	}

  // Return the difference between hoursWithDrift and minutes, and also return the other angle by deducting it from the 360 degrees total.
  return [angle, (360 - angle)]
  // return [(360 - angle), angle]


}

// Testing numbers
// console.log(clock(6, 00));
// console.log(clock(12, 00));
console.log(clock(12, 15));
// console.log(clock(9, 45));
// console.log(clock(1, 59));

// Original solution by Thom Page. Updated by Kristyn Bryan
