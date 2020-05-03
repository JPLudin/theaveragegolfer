/* Set the width of the side navigation to 300px */
function openNav() {
  document.getElementById("myMenu").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("myMenu").style.width = "0";
}

function putten(){
  document.getElementById("text-h2").innerHTML = "Putten";
  document.getElementById("text-p").innerHTML = "Putting is a golf stroke used with a club called a putter when you are on or just off the green. Golfers may use clubs such as the driver, fairway woods, hybrids and irons to get to the green. A wedge such as the pitching wedge is used to hit the ball on the green in a favorable position to get the ball into the hole in one or two strokes with the putter.";
  document.querySelector(".bilder").src = "Pics/Putting.jpg";
}


function chippen(){
document.getElementById("text-h2").innerHTML = "Chippen";
document.getElementById("text-p").innerHTML = "The aim of golf chipping is to carry the ball onto or close to the green and get it rolling out towards the hole. To do this you need to have good distance control and direction – in this first section we will look at how to achieve this.";
document.querySelector(".bilder").src = "Pics/Chipping.jpg";
}

function driver(){
  document.getElementById("text-h2").innerHTML = "Driver";
  document.getElementById("text-p").innerHTML = "Players who are struggling with hitting driver inevitably start to feel awkward when they address tee shots. If you're feeling uncomfortable on the tee, check your distance from the ball. Set up and drop your right hand off the club, letting it hang . Make sure you can move it straight back to the grip without having to reach.";
  document.querySelector(".bilder").src = "Pics/Abschlag.jpg";
}
