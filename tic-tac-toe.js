// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var currentSquare = "topleftsquare"
function game(){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "50")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}
