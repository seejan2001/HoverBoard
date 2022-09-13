let container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARE = 500;

function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(element){
    let color = randomColor();
    element.style.background = color;
    element.style.boxShadow = '0 0 2px ${color}, 0 0 10px ${color}';
}
function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #0000';
}


for(let i=0;i<SQUARE;i++)
{
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',() => setColor(square))
    square.addEventListener('mouseout',() => removeColor(square))
    container.appendChild(square);
}
