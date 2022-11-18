//html elements
const app = document.querySelector('.app')

const clearBtn = document.querySelector('.clear');

const rainbowBtn = document.querySelector('#rainbowBtn');

const gridSize = document.querySelector('#gridSize');

const colorPicker = document.querySelector('.userColor')

const inputs = document.querySelectorAll('input')

let range = document.querySelector('.rangeLabel')




//global variables

const defaultColor = 'white';

let userOption



//range slider

gridSize.addEventListener('input', rangeSlider)

function rangeSlider() {
    
    range.innerText = `${gridSize.valueAsNumber} x ${gridSize.valueAsNumber}`;
    clearGrid()
}

gridSize.addEventListener("input", function(event) {
    event.preventDefault();
    drawGrid(gridSize.valueAsNumber);
}); 




//clear grid function

function clearGrid () {
    app.innerHTML = '';
}



function drawGrid(grid) {

//setup grid
app.style.gridTemplateColumns =`repeat(${grid}, 1fr)`;
app.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

//create divs
for (let i = 1; i <= grid ** 2; i++) {
const div = document.createElement('div');
div.style.cssText = "height: initial; border-Bottom: 0.2px dotted; border-Right: 0.2px dotted";

//event
div.addEventListener ('mousedown', setColor)
div.addEventListener ('mousemove', setColor)



//append to main
app.append(div)


}


}  




//user option


colorPicker.addEventListener('change', (e) => {
   userOption = e.target.value
   console.log(userOption)
});

clearBtn.addEventListener('click', () => {
    userOption = defaultColor;
})

rainbowBtn.addEventListener('click',() => {
    userOption = rainbowBtn.value
  
})


//drag and paint
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)



function setColor(e) {
    
 if(e.type == 'mousemove' &&  !mouseDown) return
 
 else if (userOption === 'rainbow'){
    let r = Math.floor(Math.random() * 255) + 1
    let g = Math.floor(Math.random() * 255) + 1
    let b = Math.floor(Math.random() * 255) + 1
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 }
   
    e.target.style.backgroundColor = userOption;
}


