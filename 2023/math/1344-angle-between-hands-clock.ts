// https://leetcode.com/problems/angle-between-hands-of-a-clock/description/

function angleClock(hour: number, minutes: number): number {
  const hourAngle = (hour % 12) * 30 + minutes / 2; // 30 degrees per hour, and 0.5 degrees per minute
  const minuteAngle = minutes * 6; // 6 degrees per minute
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle); // return the acute angle between the hands
}

/*
It first calculates the angle of the hour hand using the formula (hour % 12) * 30 + minute / 2, where hour % 12 gives the hour in the range of 0 to 11, and minute / 2 gives the contribution of the minute hand to the hour hand angle (since the hour hand moves slower than the minute hand). 

It then calculates the angle of the minute hand using the formula minute * 6, which gives the angle in degrees of the minute hand relative to the 12 o'clock position. 

Finally, it calculates the absolute difference between the two angles and returns the acute angle between the hands, which is either the calculated angle or 360 degrees minus the calculated angle (whichever is smaller). 
*/