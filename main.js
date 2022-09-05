let colors = ['blue', 'red', 'purple', 'green'];

let button = document.getElementById('button');

button.addEventListener('click', function(){
    //console.log('TEST');
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container');

    container.style.background = randomColor;
});