document.addEventListener('DOMContentLoaded', () => {
let table = document.getElementsByClassName('grid')

// for (let i = 0; i < 30; i++){
//     let newRow = document.createElement('tr')
//     newRow.className = 'row' 
//     document.body.append(newRow)
//     for (let j = 0; j < 30; j++){
//         let insertRow = document.getElementsByClassName('row')[i]
//         let newNode = document.createElement('td')
//         newNode.className = 'pixel'
//         insertRow.append(newNode)
//     }   
// }
let container = document.getElementById('container')
for (let i =0; i < 900; i++){
    let newNode = document.createElement('div')
    newNode.className = 'pixel'
    container.append(newNode)
}

let color;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
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

let storedColor;

document.addEventListener('click', (event) => {

    if(event.target.className === 'clear'){
        console.log('test')
        let pixels = document.getElementsByClassName('pixel')
        for (let i = 0; i < pixels.length; i++){
            pixels[i].style.backgroundColor = 'white'
            pixels[i].style.border = '1px solid black'
        }
        
    }
    
    if(event.target.className === 'palette-pixel'){
        storedColor = event.target.style.backgroundColor
    }

    if(event.target.className === 'pixel'&& storedColor === 'white'){
        event.target.style.border = '1px solid black'
        event.target.style.backgroundColor = 'white'
    }

    else if(event.target.className === 'pixel'){
        event.target.style.backgroundColor = storedColor
        event.target.style.border = `1px solid ${storedColor}`
        }

})

document.addEventListener('dragover', (event) => {
    
    if(event.target.className === 'pixel'&& storedColor === 'white'){
        event.target.style.border = '1px solid black'
        event.target.style.backgroundColor = 'white'
    }

    else if(event.target.className === 'pixel'){
        event.target.style.backgroundColor = storedColor
        event.target.style.border = `1px solid ${storedColor}`
        }

})
