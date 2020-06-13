


//DRAWING CONTENTS ON LOAD
document.addEventListener('DOMContentLoaded', () => {
let table = document.getElementsByClassName('grid')

//DRAWS A 30 X 30 CANVAS
let container = document.getElementById('container')
for (let i =0; i < 900; i++){
    let newNode = document.createElement('div')
    newNode.className = 'pixel'
    container.append(newNode)
}

//GENERATES RANDOM COLOR FOR PALETTE
let color;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  //DRAWS THE PALETTE WITH RANDOM COLORS
  let palette = document.getElementById('palette')
  for (let i =0; i < 30; i++){
      let newNode = document.createElement('div')

      if(i === 0){
        newNode.className = 'palette-pixel'
        newNode.style.backgroundColor = 'white'
        palette.append(newNode)
      }
      else{
      newNode.className = 'palette-pixel'
      color = getRandomColor()
      newNode.style.backgroundColor = color
      palette.append(newNode)
      }
  } 

}
)

//GLOBAL STORED COLOR FOR DRAWING
let storedColor;

//CLICK FUNCTIONALITY
document.addEventListener('click', (event) => {

    //IF TARGET IS CLEAR BUTTON, RESETS THE WHOLE GRID TO WHITE
    if(event.target.className === 'clear'){
        console.log('test')
        let pixels = document.getElementsByClassName('pixel')
        for (let i = 0; i < pixels.length; i++){
            pixels[i].style.backgroundColor = 'white'
            pixels[i].style.border = '1px solid black'
        }
        
    }
    
    //IF TARGET IS A COLOR CHOICE IN THE PALETTE, STORES COLOR TO PAINT WITH
    if(event.target.className === 'palette-pixel'){
        storedColor = event.target.style.backgroundColor
    }

    //IF THE TARGET IS A PIXEL AND COLOR IS WHITE, ADDS BLACK BORDER BACK
    if(event.target.className === 'pixel'&& storedColor === 'white'){
        event.target.style.border = '1px solid black'
        event.target.style.backgroundColor = 'white'
    }

    //DRAWS THE COLOR AND CHANGES BORDER TO MATCH
    else if(event.target.className === 'pixel'){
        event.target.style.backgroundColor = storedColor
        event.target.style.border = `1px solid ${storedColor}`
        }

})


//DRAG TO PAINT CODE
let painting = false;

//ON MOUSE BEING HELD DOWN, ALLOWS YOU TO PAINT
document.addEventListener('mousedown', (event) => {
    painting = true

})

//ON MOUSE BEING RELEASED, STOPS PAINTING IN PIXELS
document.addEventListener('mouseup', (event) => {
    painting = false
})

//PAINTS ON MOUSE MOVE IF PAINTING IS TRUE
document.addEventListener('mousemove', (event) => {
    
    if (painting === true){
        if(event.target.className === 'pixel'&& storedColor === 'white'){
            event.target.style.border = '1px solid black'
            event.target.style.backgroundColor = 'white'
        }

        else if(event.target.className === 'pixel'){
            event.target.style.backgroundColor = storedColor
            event.target.style.border = `1px solid ${storedColor}`
            }
    }
})
