//Paralax Effect on mouse move
const bgText = document.querySelector(".bg-text");
const car = document.querySelector(".car");

document.addEventListener("mousemove", function (e) { MoveBackground(e); });
 
function MoveBackground(e)
{
   let offsetX = (e.clientX / window.innerWidth * 15) - 15;
   let offsetY = (e.clientY / window.innerHeight * 15) - 5;

   bgText.setAttribute("style", "margin: " + offsetX + "px " + offsetY + "px;");
   car.setAttribute("style", "margin: " + offsetX + "px " + offsetY + "px;");
}