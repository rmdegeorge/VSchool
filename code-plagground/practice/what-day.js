function whatDay(startDay,numOfDays) {
  let dayNum = null;
  // const [sun, mon, tue, wed, thu, fri, sat] = [1, 2, 3, 4, 5, 6, 7];
  // if (startDay.toLowerCase() === 'sun' || startDay.toLowerCase() === 'sunday') {
  //   dayNum = (sun + numOfDays) % 7
  // } else if  (startDay.toLowerCase() === 'mon' || startDay.toLowerCase() === 'monday') {
  //   dayNum = (mon + numOfDays) % 7
  // } else if  (startDay.toLowerCase() === 'tue' || startDay.toLowerCase() === 'tues' || startDay.toLowerCase() === 'tuesday') {
  //   dayNum = (tue + numOfDays) % 7
  // } else if  (startDay.toLowerCase() === 'wed' || startDay.toLowerCase() === 'wednesday') {
  //   dayNum = (wed + numOfDays) % 7
  // } else if  (startDay.toLowerCase() === 'thu' || startDay.toLowerCase() === 'thur' || startDay.toLowerCase() === 'thursday') {
  //   dayNum = (thu + numOfDays) % 7
  // } else if  (startDay.toLowerCase() === 'fri' || startDay.toLowerCase() === 'friday') {
  //   dayNum = (fri + numOfDays) % 7
  // } else if  (startDay.toLowerCase() === 'sat' || startDay.toLowerCase() === 'saturday') {
  //   dayNum = (sat + numOfDays) % 7
  // } else {
  //   return 'ERROR: Invalid start day input.'
  // }

  // if (dayNum === sun){
  //   return 'Sunday';
  // } else if (dayNum === mon){
  //   return 'Monday';
  // } else if (dayNum === tue){
  //   return 'Tuesday';
  // } else if (dayNum === wed){
  //   return 'Wednesday';
  // } else if (dayNum === thu){
  //   return 'Thursday';
  // } else if (dayNum === fri){
  //   return 'Friday';
  // } else if (dayNum === sat){
  //   return 'Saturday';
  // }

  const days = ['sun','mon','tue','wed','thu','fri','sat'];
  const index = days.indexOf(startDay)
  const finalIndex = (index+numOfDays) % 7;
  return days[finalIndex]

}

console.log(whatDay('fri', 3))