"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-02

      Project to create a drag and drop tangram puzzle
      Author: Dennis Wu
      Date:   11/23/25

      Filename: project10-02.js
*/

let puzzleBoard = document.getElementById("puzzle");
let zCounter = 1;
let eventX, eventY, tanX, tanY;

let tans = document.querySelectorAll("div#puzzle > img");

function rotateTan(elem, deg) {
   const obj = window.getComputedStyle(elem, null);
   const matrix = obj.getPropertyValue("transform");
   let angle = 0;
   if (matrix !== "none") {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      const a = values[0];
      const b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180/Math.PI));      
   }
   
   if (angle < 0) {
      angle += 360;
   }
   
   let newAngle = angle + deg;
   
   elem.style.transform = "rotate(" + newAngle + "deg)";
}
for (let i = 0; i < tans.length; i++) {
   tans[i].addEventListener("pointerdown", grabTan);
}
function grabTan(e) {

   if (e.shiftKey) {
      rotateTan(e.target, 15);
      return;
   }
   eventX = e.clientX;
   eventY = e.clientY;
   e.target.style.touchAction = "none";
   zCounter++;
   e.target.style.zIndex = zCounter;
   e.target.addEventListener("pointermove", moveTan);
   e.target.addEventListener("pointerup", dropTan);
}
function moveTan(e) {
   let tan = e.target;


   let dx = e.clientX - eventX;
   let dy = e.clientY - eventY;

   tan.style.left = (tan.offsetLeft + dx) + "px";
   tan.style.top = (tan.offsetTop + dy) + "px";

   eventX = e.clientX;
   eventY = e.clientY;
}
function dropTan(e) {
   let tan = e.target;
   tan.removeEventListener("pointermove", moveTan);
   tan.removeEventListener("pointerup", dropTan);
}
