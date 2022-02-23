const container = document.getElementById('container');
let hSize = 16;
let vSize = 16;
let mode = 'black';
let rgb;

for (let i=0; i<hSize*vSize; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    container.appendChild(grid);
}

const fullGrid = document.querySelectorAll('.grid'); 

fullGrid.forEach(function (e) {
    e.addEventListener('mousemove', function (et) {
        if (mode == 'black') {
        et.target.style.backgroundColor = 'black';
        console.log('hello')
        } else if (mode == 'rgb') {
        rgbGenerator()
        et.target.style.backgroundColor = 'blue';
        }
    });
});

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    fullGrid.forEach(function (e) {
        e.style.backgroundColor = 'white';  
    });
});

const rgbBtn = document.getElementById('RGB');

rgbBtn.addEventListener('click', () => {
    mode = 'rgb';
    console.log('bassey');
})

function rgbGenerator () {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let rgb = "rgb(" + r + ", " + g + ", " + b +")";
    return rgb;
}

const paintBlack = document.getElementById('default');

paintBlack.addEventListener('click', () => {
    mode = 'black';
})