//  create a 16 x 16 grid of square d:ivs // use flexbox to make the divs appear as a grid
// set up hover effect so grid change color when hovered
// add button user can use to set grid size
//
//reference to grid container for adding grids
const gridContainer = document.querySelector(".container");

//create grid div element with class attribute grid

// function for creating grid

function createGrid(size) {
        for(let gridsize = 1; gridsize <= size; gridsize ++){
            let grid = []
          grid[gridsize] =  document.createElement('div')
// add grid and grids class to created div
            grid[gridsize].setAttribute("class", `grid${gridsize} grids`);
 // add div to grid container           
            gridContainer.append(grid[gridsize])
        }
}

createGrid(16)
