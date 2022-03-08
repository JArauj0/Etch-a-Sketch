let htmlStyles = window.getComputedStyle(document.querySelector('html'));
let rowNum = parseInt(htmlStyles.getPropertyValue('--rowNum'));

const container = document.getElementById('container');
let mode = 'black';

generateCanvas(16);

function generateCanvas(size) {
    sizePx = size + 'px';
    console.log(sizePx);
    document.documentElement.style.setProperty('--gridSize', sizePx);
    document.documentElement.style.setProperty('--size', size);
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
        const grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        container.appendChild(grid);
        }
    }

    color()
}




function color () {

const fullGrid = document.querySelectorAll('.grid'); 
fullGrid.forEach(function (e) {
    e.addEventListener('mouseover', function (et) {
        if (mode == 'black') {
        et.target.style.backgroundColor = 'black';
        } else if (mode == 'rgb') {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let rgb = "rgb(" + r + ", " + g + ", " + b +")";
            et.target.style.backgroundColor = rgb;
        }
    });
});
}

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    const fullGrid = document.querySelectorAll('.grid'); 
    size = prompt('Select number of squares: (less than 100)');
    fullGrid.forEach(box => {
        box.remove();
    });
    
    generateCanvas(size);
});

const rgbBtn = document.getElementById('RGB');

rgbBtn.addEventListener('click', () => {
    mode = 'rgb';
})

function rgbGenerator () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = "rgb(" + r + ", " + g + ", " + b +")";
    return rgb;
}

const paintBlack = document.getElementById('default');

paintBlack.addEventListener('click', () => {
    mode = 'black';
})