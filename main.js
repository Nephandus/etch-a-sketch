/*
Create a webpage with a 16x16 grid of square divs
Create the divs using JavaScript
Put your grid squares inside another “container” div (that one can go directly in your html

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving
a (pixelated) trail through your grid like a pen would. 

Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how
many squares per side to make the new grid. Once entered the new grid should be generated in the same total space
as before (e.g. 960px wide) and now you’ve got a new sketch pad.
Set the limit for the user input to a maximum of 100.
*/

let gridSide = 16;

let container = document.querySelector('.container');

let buttonHolder = document.createElement('div');
buttonHolder.setAttribute('class', 'buttonHolder');
document.body.insertBefore(buttonHolder, container);

let button = document.createElement('button');
button.setAttribute('id', 'button');
button.textContent = "CLEAR";
button.addEventListener('click', colorClear);
buttonHolder.appendChild(button);

let grid = document.createElement('div');
grid.setAttribute('id', 'grid');
container.appendChild(grid);
fillGrid();

function fillGrid(){
   grid.style.gridTemplateColumns = `repeat(${gridSide}, 1fr)`;
   grid.style.gridTemplateRows = `repeat(${gridSide}, 1fr)`;
   while (grid.firstChild){
      grid.removeChild(grid.lastChild);
   }

   for (i = 0; i < (gridSide**2); i++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'boxen');
      div.addEventListener('mouseenter', colorChange);
      grid.appendChild(div);
   }
}

function colorChange(e) {
   e.target.style.backgroundColor = 'white';
}

function colorClear() {
   let newGridSide = prompt("How many squares per side do you want?", "16");
   if (newGridSide == null) {
      return;
   } else if (newGridSide > 100) {
      newGridSide = 100;
      alert("Maximum of 100 squares per side as function degrades approaching 90");
   }
   gridSide = newGridSide;
   fillGrid();
}