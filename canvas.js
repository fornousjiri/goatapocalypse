
// canvas
var canvas = document.getElementById('canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

// model
var model = {
    map: {},
    object: [],
    player: {},
    keyPressed: {
        up: false,
        down: false,
        right: false,
        left: false,
        space: false
    },
    time: {
        start: window.performance.now(),
        recentFrame: window.performance.now(),  
        normalizingConstant: 0.05
    }
}

function init() {

    // model
    model.map = {

    };

    model.player = {
        init: {
            color: color,
            radius: radius
        },
        current: {
            velocity: 5,
            direction: 'down',
            size: 1,
            position: {
                x: canvas.width / 2,
                y: canvas.height / 2
            },
            sprite: 1
        },
        spriteList: [
            'images/'
        ]
    };

    // init listeners
    addEventListener('resize', onResize);
    addEventListener('keydown', onKeyDown, false);
    addEventListener('keyup', onKeyUp, false);
    addEventListener('load', function() {
        let img = new Image();
        img.onload = function() {
            model.sprite = img;
        };
        img.src = './sprite.png';
    });

    // animation
    requestAnimationFrame(animate); 
}

function onResize() {

    model.object.forEach(function(object) {
        object.center.x *= window.innerWidth / canvas.width;
        object.center.y *= window.innerHeight / canvas.height;
    });

    model.player.center.x *= window.innerWidth / canvas.width;
    model.player.center.y *= window.innerHeight / canvas.height;

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

function onKeyDown(event) {
    switch (event.keyCode) {
        case 39: // right
            model.keyPressed.right = true;
            break;
        case 37: // left
            model.keyPressed.left = true;
            break;
        case 40: // down
            model.keyPressed.down = true;
            break;
        case 38: // up
            model.keyPressed.up = true;
            break;
        default: break;
    }
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case 39: // right
            model.keyPressed.right = false;
            break;
        case 37: // left
            model.keyPressed.left = false;
            break;
        case 40: // down
            model.keyPressed.down = false;
            break;
        case 38: // up
            model.keyPressed.up = false;
            break;
        default: break;
    }
}

function update() {

    // time
    var timeStamp = window.performance.now();
    var timeElapsed = model.time.normalizingConstant * (timeStamp - model.time.recentFrame);
    model.time.recentFrame = timeStamp;

    // objects
    model.object.forEach(function(object) {
        dx = Math.cos(degToRad(object.angle)) * object.velocity * timeElapsed;
        dy = Math.sin(degToRad(object.angle)) * object.velocity * timeElapsed;

        cx = object.center.x + dx;
        if (cx > canvas.width - object.radius || cx < object.radius) {
            // reverse x
            object.angle = (540 - object.angle) % 360;
        } else
            object.center.x = cx;

        cy = object.center.y + dy;
        if (cy > canvas.height - object.radius || cy < object.radius) {
            // reverse y
            object.angle = 360 - object.angle;
        } else
            object.center.y = cy;

        var collision = false;
        model.object.forEach(function(testObject){
            if (object != testObject) {
                var dcx = object.center.x - testObject.center.x;
                var dcy = object.center.y - testObject.center.y;
                var distance = Math.sqrt(Math.pow(dcx, 2) + Math.pow(dcy, 2));

                if (distance < object.radius + testObject.radius) {
                    collision = true;
                    return;
                }
            }
        })

        if (collision)
            object.color = 'rgba(255,100,100,0.5)';
        else
            object.color = object.init.color;
    });

    // player cursor like movement control

    cx = model.player.center.x;
    cy = model.player.center.y;
    if (model.keyPressed.down)
        cy += model.player.velocity * timeElapsed;
    if (model.keyPressed.up)
        cy -= model.player.velocity * timeElapsed;
    if (model.keyPressed.left)
        cx -= model.player.velocity * timeElapsed;
    if (model.keyPressed.right)
        cx += model.player.velocity * timeElapsed;
    if (model.player.radius < cx  && cx < canvas.width - model.player.radius)
        model.player.center.x = cx;
    if (model.player.radius < cy  && cy < canvas.height - model.player.radius)
        model.player.center.y = cy;

    // player car like movement control
    
    
}

function draw() {
    model.object.forEach(function(object) {
        ctx.fillStyle = object.color;
        drawCircle(ctx, object.center.x, object.center.y, object.radius);
    });

    if (model.sprite !== null)
        ctx.drawImage(
            model.sprite, 
            model.player.center.x - model.player.radius, 
            model.player.center.y - model.player.radius, 
            3 * model.player.radius, 
            3 * model.player.radius
        );
    else {
        ctx.fillStyle = model.player.color;
        drawCircle(ctx, model.player.center.x, model.player.center.y, model.player.radius);
    }

}

function animate() {

    // update
    update();

    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw
    draw();

    requestAnimationFrame(animate);
}

init();
console.log (jirka jespatnej);