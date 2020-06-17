function sendCards(day, ...carIds){
    carIds.forEach( id => console.log(id))
  }
  sendCards('Wednesday', 1, 9, 9, 8);
  //rest parameters allows us to represent an indefinite amount of arguments in an array.

  