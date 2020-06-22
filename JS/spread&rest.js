//rest syntaxx
function sendCards(day, ...carIds){
    carIds.forEach( id => console.log(id))
  }
  sendCards('Wednesday', 1, 9, 9, 8);
  
  //spread syntax
  function startcars(car1, car2, car3){
    console.log(car1, car2, car3);
  }
  let cars = [1,2,3];
  startcars(... cars)
  // Rest Parameter is collecting all remaining elements into an array . 
  //Spread Operator is unpacking collected elements such as arrays into single elements 