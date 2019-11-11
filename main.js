window.onload = startFunction;

window.onresize = startFunction;



function startFunction(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ResizeCanvas(canvas);
    DrawCanvas(ctx, canvas);

}

function ResizeCanvas(canvas){
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    console.log('width height ' + window.innerWidth + ' ' + window.innerHeight);
    console.log('canvas width height ' + canvas.width + ' ' + canvas.height);    
}

function DrawCanvas(ctx, canvas){
    ctx.fillStyle = 'grey';

    ctx.fillRect(0, 0, (canvas.width / 2), (canvas.height / 2));

    ctx.fillStyle = 'blue';

    ctx.fillRect((canvas.width / 2), (canvas.height / 2),canvas.width, canvas.height);    
}