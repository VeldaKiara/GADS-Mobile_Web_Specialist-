
function Greetings() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "Morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
  } else {
    timeOfDay = "Evening"
  }
  let greet = ` ${timeOfDay}  &#x1F607, Check out the weather!` 
    document.getElementById("salutation").innerHTML = greet


}
Greetings();

