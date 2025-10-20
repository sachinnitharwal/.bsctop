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
else if (time >= 22 ) {
  greeting = "I am Ghost,what are you doing this time, Click here to talk to ghost"
  
   
  }
  
else  {
  greeting = "Good evening, Friends"
}

document.getElementById("demo").innerHTML = greeting

console.log(time)

function ghost() {
const paragraph = document.getElementById("demo")
paragraph.style.color = "red"
paragraph.style.fontSize = "26px"
paragraph.innerHTML = " ghost : hello, डरो मत मैं तुम्हें कुछ नहीं करूंगा" 
}
const paragraph = document.getElementById("demo")
paragraph.onclick = ghost 