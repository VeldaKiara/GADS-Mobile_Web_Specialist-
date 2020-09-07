
function Greetings() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  let greet = `Good ${timeOfDay} !` 
    document.getElementById("salutation").innerHTML = greet

}
Greetings();

