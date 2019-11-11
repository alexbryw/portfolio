window.onload = startFunction;

//window.onresize = startFunction;



function startFunction(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ResizeCanvas();
    DrawCanvas();
    let x = 0;
    let y = 0;
    window.onresize = ResizeCanvas;
    window.addEventListener('mousemove', evt => {
        x = evt.clientX;
        y = evt.clientY;
        console.log('x y '+x+' '+y);
        MouseReDraw(x,y);
    })

}

function MainFunc(){
    let mousePosition = {x:0,y:0};
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    console.log(' main '+ mousePosition.x)
}

function ResizeCanvas(){
    let canvas = document.querySelector('canvas');
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    console.log('width height ' + window.innerWidth + ' ' + window.innerHeight);
    console.log('canvas width height ' + canvas.width + ' ' + canvas.height);
    DrawCanvas();
}

function DrawCanvas(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'grey';

    ctx.fillRect(0, 0, (canvas.width / 2), (canvas.height / 2));

    ctx.fillStyle = 'blue';

    ctx.fillRect((canvas.width / 2), (canvas.height / 2),canvas.width, canvas.height);
}

function MouseReDraw(x,y){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,(x+10),(y+10));
}