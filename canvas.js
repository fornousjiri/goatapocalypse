
// canvas
var canvas = document.getElementById('canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

var objectList = {
    background1 : {
        name: 'Background1',
        type: 'map',
        spriteList: {
            top: [{src: 'images/map/background.png', img: null}]
        }
    },
    goat1 : {
        name: 'Goat1',
        type: 'player',
        spriteList: {
            down: [
                {src: 'images/sprite/bgoat_down_1.png', img: null},
                {src: 'images/sprite/bgoat_down_2.png', img: null},
                {src: 'images/sprite/bgoat_down_3.png', img: null},
                {src: 'images/sprite/bgoat_down_4.png', img: null}
            ],
            up: [
                {src: 'images/sprite/bgoat_up_1.png', img: null},
                {src: 'images/sprite/bgoat_up_2.png', img: null},
                {src: 'images/sprite/bgoat_up_3.png', img: null},
                {src: 'images/sprite/bgoat_up_4.png', img: null}
            ],
            left: [
                {src: 'images/sprite/bgoat_left_1.png', img: null},
                {src: 'images/sprite/bgoat_left_2.png', img: null},
                {src: 'images/sprite/bgoat_left_3.png', img: null},
                {src: 'images/sprite/bgoat_left_4.png', img: null}
            ],
            right: [
                {src: 'images/sprite/bgoat_right_1.png', img: null},
                {src: 'images/sprite/bgoat_right_2.png', img: null},
                {src: 'images/sprite/bgoat_right_3.png', img: null},
                {src: 'images/sprite/bgoat_right_4.png', img: null}
            ]
        },
        spriteSpeed: 50
    },
    goat2: {
        name: 'Goat2',
        type: 'player',
        spriteList: {
            down: [
                {src: 'images/sprite/w_goat_down_1.png', img: null},
                {src: 'images/sprite/w_goat_down_2.png', img: null},
                {src: 'images/sprite/w_goat_down_3.png', img: null}
            ],
            up: [
                {src: 'images/sprite/w_goat_up_1.png', img: null},
                {src: 'images/sprite/w_goat_up_2.png', img: null},
                {src: 'images/sprite/w_goat_up_3.png', img: null}
            ],
            left: [
                {src: 'images/sprite/w_goat_left_1.png', img: null},
                {src: 'images/sprite/w_goat_left_2.png', img: null},
                {src: 'images/sprite/w_goat_left_3.png', img: null}
            ],
            right: [
                {src: 'images/sprite/w_goat_right_1.png', img: null},
                {src: 'images/sprite/w_goat_right_2.png', img: null},
                {src: 'images/sprite/w_goat_right_3.png', img: null}
            ]
        },
        spriteSpeed: 50
    },
    tree1: {
        name: 'Tree1',
        type: 'object',
        spriteList: {
            top: [
                {src: 'images/object/asep_1.png', img: null},
                {src: 'images/object/asep_2.png', img: null}
            ]
        },
        spriteSpeed: 500
    },
    tree2: {
        name: 'Tree2',
        type: 'object',
        spriteList: {
            top: [
                {src: 'images/object/big_tree_1.png', img: null}
            ]
        },
        spriteSpeed: 500
    },
    tree3: {
        name: 'Tree3',
        type: 'object',
        spriteList: {
            top: [
                {src: 'images/object/pink_tree_1.png', img: null}
            ]
        },
        spriteSpeed: 500
    },
    tree4: {
        name: 'Tree4',
        type: 'object',
        spriteList: {
            top: [
                {src: 'images/object/pine_tree_1.png', img: null}
            ]
        },
        spriteSpeed: 500
    }
};

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
    },
    state: {
        loading: true
    }
};

function init() {

    // map
    model.map = {
        state: {
            sprite: 0,
            type: objectList.background1,
            spriteUpdate: 0
        }
    };

    // player
    model.player = {
        state: {
            velocity: 5,
            direction: 'down',
            size: 100,
            position: {
                x: canvas.width / 2,
                y: canvas.height / 2
            },
            sprite: 0,
            type: objectList.goat2,
            spriteUpdate: 0
        }
    };

    // objects
    model.object = [
        {
            state: {
                position: {
                    x: 600,
                    y: 300
                },
                sprite: 0,
                type: objectList.tree1,
                size: 150,
                direction: 'top',
                spriteUpdate: 0
            }
        },
        {
            state: {
                position: {
                    x: 100,
                    y: 300
                },
                sprite: 0,
                type: objectList.tree3,
                size: 300,
                direction: 'top',
                spriteUpdate: 0
            }
        },
        {
            state: {
                position: {
                    x: 1000,
                    y: 700
                },
                sprite: 0,
                type: objectList.tree4,
                size: 300,
                direction: 'top',
                spriteUpdate: 0
            }
        },
        {
            state: {
                position: {
                    x: 300,
                    y: 500
                },
                sprite: 0,
                type: objectList.tree2,
                size: 300,
                direction: 'top',
                spriteUpdate: 0
            }
        },
        {
            state: {
                position: {
                    x: 600,
                    y: 600
                },
                sprite: 0,
                type: objectList.tree2,
                size: 200,
                direction: 'top',
                spriteUpdate: 0
            }
        },
        {
            state: {
                position: {
                    x: 1200,
                    y: 600
                },
                sprite: 0,
                type: objectList.tree4,
                size: 300,
                direction: 'top',
                spriteUpdate: 0
            }
        },
    ]

    // init listeners
    addEventListener('resize', onResize);
    addEventListener('keydown', onKeyDown, false);
    addEventListener('keyup', onKeyUp, false);
    addEventListener('load', onLoad, false);

    // animation
    requestAnimationFrame(animate); 
}

function onResize() {

    // model.object.forEach(function(object) {
    //     object.center.x *= window.innerWidth / canvas.width;
    //     object.center.y *= window.innerHeight / canvas.height;
    // });

    // model.player.center.x *= window.innerWidth / canvas.width;
    // model.player.center.y *= window.innerHeight / canvas.height;

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
        case 32: // space
            if (model.player.state.type.name == 'Goat1') {
                model.player.state.type = objectList.goat2;
                model.player.state.sprite = 0;
                model.player.state.size = 100;
            } else {
                model.player.state.type = objectList.goat1;
                model.player.state.sprite = 0;
                model.player.state.size = 100;
            }
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

function onLoad() {
    
    // loading
    model.state.loading = true;

    let count = 0; 
    Object.entries(objectList).forEach(function([key, object]) {
        Object.entries(object.spriteList).forEach(function([key, list]){
            count += list.length;
        });
    });
    let current = 0;

    Object.entries(objectList).forEach(function([key, object]) {
        Object.entries(object.spriteList).forEach(function([key, list]){
            list.map(function(item){
                item.img = loadImage(item.src);
            });
        });
    });

    function loadImage(src) {
        let img = new Image();
        img.onload = function() {
            current++;
            if (current == count) model.state.loading = false;
        };
        img.src = src;
        return img;
    }
}

function update() {

    // time
    var timeStamp = window.performance.now();
    var timeElapsed = model.time.normalizingConstant * (timeStamp - model.time.recentFrame);
    model.time.recentFrame = timeStamp;

    // // objects
    // model.object.forEach(function(object) {
    //     dx = Math.cos(degToRad(object.angle)) * object.velocity * timeElapsed;
    //     dy = Math.sin(degToRad(object.angle)) * object.velocity * timeElapsed;

    //     cx = object.center.x + dx;
    //     if (cx > canvas.width - object.radius || cx < object.radius) {
    //         // reverse x
    //         object.angle = (540 - object.angle) % 360;
    //     } else
    //         object.center.x = cx;

    //     cy = object.center.y + dy;
    //     if (cy > canvas.height - object.radius || cy < object.radius) {
    //         // reverse y
    //         object.angle = 360 - object.angle;
    //     } else
    //         object.center.y = cy;

    //     var collision = false;
    //     model.object.forEach(function(testObject){
    //         if (object != testObject) {
    //             var dcx = object.center.x - testObject.center.x;
    //             var dcy = object.center.y - testObject.center.y;
    //             var distance = Math.sqrt(Math.pow(dcx, 2) + Math.pow(dcy, 2));

    //             if (distance < object.radius + testObject.radius) {
    //                 collision = true;
    //                 return;
    //             }
    //         }
    //     })

    //     if (collision)
    //         object.color = 'rgba(255,100,100,0.5)';
    //     else
    //         object.color = object.init.color;
    // });

    // player cursor like movement control

    cx = model.player.state.position.x;
    cy = model.player.state.position.y;
    move = false;
    if (model.keyPressed.down) {
        cy += model.player.state.velocity * timeElapsed;
        model.player.state.direction = 'down';
        move = true;
    } else if (model.keyPressed.up) {
        cy -= model.player.state.velocity * timeElapsed;
        model.player.state.direction = 'up';
        move = true;
    } else if (model.keyPressed.left) {
        cx -= model.player.state.velocity * timeElapsed;
        model.player.state.direction = 'left';
        move = true;
    } else if (model.keyPressed.right) {
        cx += model.player.state.velocity * timeElapsed;
        model.player.state.direction = 'right';
        move = true;
    }
        
    if (model.player.state.size / 2 < cx  && cx < canvas.width - model.player.state.size / 2)
        model.player.state.position.x = cx;
    if (model.player.state.size / 2 < cy  && cy < canvas.height - model.player.state.size / 2)
        model.player.state.position.y = cy;
    if (
        move && 
        timeStamp - model.player.state.spriteUpdate > model.player.state.type.spriteSpeed
    ) {
        model.player.state.sprite = (model.player.state.sprite + 1) % model.player.state.type.spriteList[model.player.state.direction].length;
        model.player.state.spriteUpdate = timeStamp;
    }
    model.object.forEach(function(item){
        if (timeStamp - item.state.spriteUpdate > item.state.type.spriteSpeed) {
            item.state.sprite = (item.state.sprite + 1) % item.state.type.spriteList[item.state.direction].length;
            item.state.spriteUpdate = timeStamp;
        }
    });
}

function draw() {
    if (model.state.loading)
        return;

    // background
    ctx.drawImage(
        model.map.state.type.spriteList.top[model.map.state.sprite].img, 
        0, 
        0, 
        canvas.width,
        canvas.height
    );

    // player
    ctx.drawImage(
        model.player.state.type.spriteList[model.player.state.direction][model.player.state.sprite].img, 
        model.player.state.position.x - model.player.state.size / 2, 
        model.player.state.position.y - model.player.state.size / 2, 
        model.player.state.size,
        model.player.state.size
    );
    
    // objects
    model.object.forEach(function(item) {
        ctx.drawImage(
            item.state.type.spriteList[item.state.direction][item.state.sprite].img, 
            item.state.position.x - item.state.size / 2, 
            item.state.position.y - item.state.size / 2, 
            item.state.size,
            item.state.size
        );
    });
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