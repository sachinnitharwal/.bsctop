let x = 5
console.log(x)

 const time = new Date().getHours() 
 let greeting;

if (time < 12) {
  greeting = "Good morning, Friends"
}
else if (time < 14) {
  greeting = "Good afternoon, Friends"
}
else if (time < 2 && time > 23 ) {
  greeting = "I am Ghost,what are you doing this time "
  
}
else  {
  greeting = "Good evening, Friends"
}

document.getElementById("demo").innerHTML = greeting