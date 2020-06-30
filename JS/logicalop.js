if (5===5 && 6 === 7){
    console.log(true)
    }else{
    console.log(false);
  }
  
  if (5===5 || 6 === 7){
    console.log(true)
    }else{
    console.log(false);
  }
  let userSettings = null;
  let defaultSettings = { name: 'Default'};
  
  console.log(userSettings || defaultSettings)
  
  let userSettings = "Vee";
  let defaultSettings = { name: 'Default'};
  
  console.log(userSettings || defaultSettings)
  //Vee
  