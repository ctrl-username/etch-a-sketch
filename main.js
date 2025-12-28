//  create a 16 x 16 grid of square d:ivs // use flexbox to make the divs appear as a grid
// set up hover effect so grid change color when hovered
// add button user can use to set grid size
//
//reference to sketch pad main container 
const gridBox = document.querySelector(".container");
// create container for storing grids
const gridContainer = document.createElement("div");
//set grids container class to grid-container
gridContainer.setAttribute("class", "grid-container")
// place grids container inside main container
gridBox.append(gridContainer)
//create grid div element with class attribute grid

// function for creating grid

function createGrid(size) {
        for(let gridsize = 1; gridsize <= size*size; gridsize ++){
            let grid = []
          grid[gridsize] =  document.createElement('div')
// add grid and grids class to created div
            grid[gridsize].setAttribute("class", `grid${gridsize} grids`);
 // add div to grid container           
            gridContainer.append(grid[gridsize])
        }
}

createGrid(16)
