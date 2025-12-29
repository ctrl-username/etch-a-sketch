//  create a 16 x 16 grid of square d:ivs // use flexbox to make the divs appear as a grid
// set up hover effect so grid change color when hovered
// add button user can use to set grid size
// grid container width
const containerWidth =400 
//reference to sketch pad main container 
const gridBox = document.querySelector(".container");
// create container for storing grids
const gridContainer = document.createElement("div");
// set grid container width and height
gridContainer.style.width = `${containerWidth}px`

gridContainer.style.height = `${containerWidth}px`
//set grids container class to grid-container
gridContainer.setAttribute("class", "grid-container")
// place grids container inside main container
gridBox.append(gridContainer)
//create grid div element with class attribute grid



// function for creating grid
function createGrid(size) {
        for(let gridsize = 1; gridsize <= size*size; gridsize ++){
            let grid ;
          grid  =  document.createElement('div')
// add grid and grids class to created div
             grid.setAttribute("class", `grid${gridsize} grids`);
            gridSquareSize(grid, containerWidth, size)
 // add div to grid container           
            gridContainer.append(grid)
        }
}

// create grid square size 

function gridSquareSize(gridbox, cwidth, gridsize) {
    length = cwidth / gridsize ;
    gridbox.style.width = `${length}px`
    gridbox.style.height = `${length}px`
}

createGrid(100)
