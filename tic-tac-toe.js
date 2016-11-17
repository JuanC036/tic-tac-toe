// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var currentPlayer= 1
var topleftclick= false
function game(){
  if (topleftclick == false){
    if (currentPlayer == 1) {
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "50")
      circle.setAttribute("cy", "50")
      circle.setAttribute("r", "50")
      circle.setAttribute("fill", "red")
      circle.setAttribute("opacity", "0.5")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      topleftclick= true
      currentPlayer= 2
  }
}else if (currentPlayer= 2) {
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "50")
    square.setAttribute("y", "50")
    square.setAttribute("height", "30")
    square.setAttribute("width", "30")
    canvas.appendChild(square)
    topleftfclick= false
    currentPlayer = 1
}
}
var topMiddleClick= false
function game2(){
  if (topMiddleClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "50")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  topMiddleClick= true
  }
}
var topRightClick= false
function game3(){
  if (topRightClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "50")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  topRightClick= true
  }
}
var middleLeftClick= false
function game4(){
  if (middleLeftClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleLeftClick= true
  }
}
var middleClick= false
function game5(){
  if (middleClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleClick= true
  }
}
var middleRightClick= false
function game6(){
  if (middleRightClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleRightClick= true
  }
}
var bottomLeftClick= false
function game7(){
  if (bottomLeftClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomLeftClick= true
  }
}
var bottomMiddleClick= false
function game8(){
  if (bottomMiddleClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomMiddleClick= true
  }
}
var bottomRightClick= false
function game9(){
  if (bottomRightClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "red")
  circle.setAttribute("opacity", "0.5")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomRightClick= true
  }
}
