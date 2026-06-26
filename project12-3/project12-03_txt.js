"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Dennis Wu
      Date: 12/10/25

      Filename: project12-03.js
*/

$("article > h2").click(function () {

   let heading = $(this);

   let list = heading.next();

   let headingImage = heading.children("img");

   list.slideToggle(500);

   let currentSrc = headingImage.attr("src");

   if (currentSrc === "plus.png") {
      headingImage.attr("src", "minus.png");
   } else {
      headingImage.attr("src", "plus.png");
   }
});
