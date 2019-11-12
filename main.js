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
        /*
        let rect = canvas.getBoundingClientRect();
        x = evt.clientX - rect.left;
        y = evt.clientY - rect.top;
        */
        x = evt.clientX;
        y = evt.clientY;
        //console.log('x y '+x+' '+y+ ' rect:  ' + rect.left + ' ' +  rect.top);
        console.log('x y ' + x + ' ',y );
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
    DrawArray();
}

function MouseReDraw(x,y){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawCanvas();
    ctx.fillStyle = 'red';
    ctx.fillRect(x-5,y-5,20,20);
    console.log('x y x+ y+ '+ x + ' ' + y + ' ' + (x+2) + ' ' + (y+2))
}

function DrawArray(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    for(let i = 0; i < 10; i++){
        ctx.fillRect(i*20, i,10,10);
        for(let i = 0; i < 10; i++){
            //ctx.fillRect(i )
        }
    }
}