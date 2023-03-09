
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
        type: 'npc',
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
        spriteSpeed: 55
    },
    goat2: {
        name: 'Goat2',
        type: 'npc',
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
        spriteSpeed: 55
    },
    assasin1: {
        name: 'Assasin1',
        type: 'player',
        spriteList: {
            down: [
                {src: 'images/sprite/massasin_down_1.png', img: null},
                {src: 'images/sprite/massasin_down_2.png', img: null},
                {src: 'images/sprite/massasin_down_3.png', img: null}
            ],
            up: [
                {src: 'images/sprite/massasin_up_1.png', img: null},
                {src: 'images/sprite/massasin_up_2.png', img: null},
                {src: 'images/sprite/massasin_up_3.png', img: null}
            ],
            left: [
                {src: 'images/sprite/massasin_left_1.png', img: null},
                {src: 'images/sprite/massasin_left_2.png', img: null},
                {src: 'images/sprite/massasin_left_3.png', img: null}
            ],
            right: [
                {src: 'images/sprite/massasin_right_1.png', img: null},
                {src: 'images/sprite/massasin_right_2.png', img: null},
                {src: 'images/sprite/massasin_right_3.png', img: null}
            ]
        },
        spriteSpeed: 100
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
                {src: 'images/object/pine_tree_1.png', img: null},
                {src: 'images/object/pine_tree_2.png', img: null},
                {src: 'images/object/pine_tree_3.png', img: null}
            ]
        },
        spriteSpeed: 500
    },
    lakebb1: {
        name: 'Lakebb1',
        type: 'boundingbox',
        spriteList: {
            top: [{src: 'images/boundingbox/lakebb1.png', img: null}]
        },
        spriteSpeed: 500
    },
    lakebb2: {
        name: 'Lakebb2',
        type: 'boundingbox',
        spriteList: {
            top: [{src: 'images/boundingbox/lakebb2.png', img: null}]
        },
        spriteSpeed: 500
    },
    lakebb3: {
        name: 'lakebb3',
        type: 'boundingbox',
        spriteList: {
            top: [{src: 'images/boundingbox/lakebb3.png', img: null}]
        },
        spriteSpeed: 500
    },
    hillrbb1: {
        name: 'hillrbb1',
        type: 'boundingbox',
        spriteList: {
            top: [{src: 'images/boundingbox/hillrbb1.png', img: null}]
        },
        spriteSpeed: 500
    }
    
};

// model
var model = {
    map: {},
    object: [],
    player: {},
    npc: {},
    boundingbox:[],
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
            velocity: 3,
            direction: 'down',
            size: 110,
            position: {
                x: canvas.width / 2,
                y: canvas.height / 2
            },
            sprite: 0,
            type: objectList.assasin1,
            spriteUpdate: 0
        }
    };

    // goat NPC
    model.npc = [
        {
            state: {
                counter: 0.0,
                velocity: 2,
                direction: 'down',
                size: 70,
                position: {
                    x: canvas.width - canvas.width / 4,
                    y: canvas.height / 2
                },
                sprite: 1,
                type: objectList.goat2,
                spriteUpdate: window.performance.now() + Math.random() * objectList.goat2.spriteSpeed
            }
        },
        {
            state: {
                counter: 0.0,
                velocity: 2,
                direction: 'right',
                size: 70,
                position: {
                    x: canvas.width -  (3 * canvas.width / 4),
                    y: canvas.height / 2
                },
                sprite: 1,
                type: objectList.goat1,
                spriteUpdate: window.performance.now() + Math.random() * objectList.goat1.spriteSpeed

            }
        }
    ]
    // bounding boxes
    model.boundingbox = [
        {
            state: {
                position: {
                    x: 1140,
                    y: 976
                },
                sprite: 0,
                type: objectList.lakebb1,
                size: {
                    width: 210,
                    height: 210
                },
                direction: 'top',
                spriteUpdate: window.performance.now() + Math.random() * objectList.lakebb1.spriteSpeed
            }
        },
        {
            state: {
                position: {
                    x: 1264,
                    y: 1003
                },
                sprite: 0,
                type: objectList.lakebb2,
                size: {
                    width: 40,
                    height: 155
                },
                direction: 'top',
                spriteUpdate: window.performance.now() + Math.random() * objectList.lakebb2.spriteSpeed
            }
        },
        {
            state: {
                position: {
                    x: 1014,
                    y: 1003
                },
                sprite: 0,
                type: objectList.lakebb3,
                size: {
                    width: 43,
                    height: 155
                },
                direction: 'top',
                spriteUpdate: window.performance.now() + Math.random() * objectList.lakebb2.spriteSpeed
            }
        },
        {
            state: {
                position: {
                    x: 1175,
                    y: 889
                },
                sprite: 0,
                type: objectList.hillrbb1,
                size: {
                    width: 270,
                    height: 40
                },
                direction: 'top',
                spriteUpdate: window.performance.now() + Math.random() * objectList.hillrbb1.spriteSpeed
            }
        }
    ]

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
                spriteUpdate: window.performance.now() + Math.random() * objectList.tree1.spriteSpeed
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
                spriteUpdate: window.performance.now() + Math.random() * objectList.tree3.spriteSpeed
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
                spriteUpdate: window.performance.now() + Math.random() * objectList.tree4.spriteSpeed
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
                spriteUpdate: window.performance.now() + Math.random() * objectList.tree2.spriteSpeed
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
                spriteUpdate: window.performance.now() + Math.random() * objectList.tree2.spriteSpeed
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
                spriteUpdate: window.performance.now() + Math.random() * objectList.tree4.spriteSpeed
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

function bbTouchtof(goatnpc1){
    //lakebb1
    if (goatnpc1.state.position.x <= model.boundingbox[0].state.position.x + (model.boundingbox[0].state.size.width / 2) + 30 && goatnpc1.state.position.x >= model.boundingbox[0].state.position.x - (model.boundingbox[0].state.size.width / 2) -30 && goatnpc1.state.position.y >= model.boundingbox[0].state.position.y - (model.boundingbox[0].state.size.height / 2) - 30 && goatnpc1.state.position.y <= model.boundingbox[0].state.position.y + (model.boundingbox[0].state.size.height / 2) + 30) {
        if (goatnpc1 == model.npc[0])
            bbTouch2 = true;
        else if (goatnpc1 == model.npc[1])
            bbTouch1 = true;
    }
    //lakebb2
    if (goatnpc1.state.position.x <= model.boundingbox[1].state.position.x + (model.boundingbox[1].state.size.width / 2) + 30 && goatnpc1.state.position.x >= model.boundingbox[1].state.position.x - (model.boundingbox[1].state.size.width / 2) -30 && goatnpc1.state.position.y >= model.boundingbox[1].state.position.y - (model.boundingbox[1].state.size.height / 2) - 30 && goatnpc1.state.position.y <= model.boundingbox[1].state.position.y + (model.boundingbox[1].state.size.height / 2) + 30) {
        if (goatnpc1 == model.npc[0])
            bbTouch2 = true;
        else if (goatnpc1 == model.npc[1])
            bbTouch1 = true;
    }
    //lakebb3
    if (goatnpc1.state.position.x <= model.boundingbox[2].state.position.x + (model.boundingbox[2].state.size.width / 2) + 30 && goatnpc1.state.position.x >= model.boundingbox[2].state.position.x - (model.boundingbox[2].state.size.width / 2) -30 && goatnpc1.state.position.y >= model.boundingbox[2].state.position.y - (model.boundingbox[2].state.size.height / 2) - 30 && goatnpc1.state.position.y <= model.boundingbox[2].state.position.y + (model.boundingbox[2].state.size.height / 2) + 30) {
        if (goatnpc1 == model.npc[0])
            bbTouch2 = true;
        else if (goatnpc1 == model.npc[1])
            bbTouch1 = true;
    }
    //hillrbb1
    if (goatnpc1.state.position.x <= model.boundingbox[3].state.position.x + (model.boundingbox[3].state.size.width / 2) + 30 && goatnpc1.state.position.x >= model.boundingbox[3].state.position.x - (model.boundingbox[3].state.size.width / 2) -30 && goatnpc1.state.position.y >= model.boundingbox[3].state.position.y - (model.boundingbox[3].state.size.height / 2) - 30 && goatnpc1.state.position.y <= model.boundingbox[3].state.position.y + (model.boundingbox[3].state.size.height / 2) + 30) {
        if (goatnpc1 == model.npc[0])
            bbTouch2 = true;
        else if (goatnpc1 == model.npc[1])
            bbTouch1 = true;
    }
}

function npcMoves(goatnpc, timeElapsed1, b){
    var dx = goatnpc.state.position.x - model.player.state.position.x;
    var dy = goatnpc.state.position.y - model.player.state.position.y;
    var dxa = Math.abs(dx);
    var dya = Math.abs(dy);

    if (model.keyPressed.space) {
        goatnpc.state.counter += timeElapsed1;  
        if (goatnpc.state.counter > 87.0) {
            if (goatnpc.state.position.x < (canvas.width - 40) && goatnpc.state.position.x > (canvas.width - canvas.width + 40) && goatnpc.state.position.y > (canvas.height - canvas.height + 40) && goatnpc.state.position.y < (canvas.height - 40)) {
                if (b == false) {
                    if (Math.sqrt(dxa * dxa + dya * dya) > 300) {
                        var rand = Math.floor(Math.random() * 3) + 1;
                        if (goatnpc.state.direction == 'up') {
                            if (rand == 1) 
                                goatnpc.state.direction = 'up';
                            else if (rand == 2) 
                                goatnpc.state.direction = 'right';
                            else if (rand == 3) 
                                goatnpc.state.direction = 'left';
                        }
                        else if (goatnpc.state.direction == 'right') {
                            if (rand == 1) 
                                goatnpc.state.direction = 'down';
                            else if (rand == 2)
                                goatnpc.state.direction = 'right';
                            else if (rand == 3) 
                                goatnpc.state.direction = 'up';
                        }
                        else if (goatnpc.state.direction == 'down') {
                            if (rand == 1) 
                                goatnpc.state.direction = 'down';
                            else if (rand == 2)
                                goatnpc.state.direction = 'left';
                            else if (rand == 3) 
                                goatnpc.state.direction = 'right';
                        }
                        else if (goatnpc.state.direction == 'left') {
                            if (rand == 1) 
                                goatnpc.state.direction = 'up';
                            else if (rand == 2) 
                                goatnpc.state.direction = 'left';
                            else if (rand == 3) 
                                goatnpc.state.direction = 'down';
                        }
                        goatnpc.state.counter = 0.0;
                    }

                    if (Math.sqrt(dxa * dxa + dya * dya) < 300){
                        if (goatnpc.state.counter > 160.0) {
                            if (dxa > dya){
                                if (dx > 0) {
                                    goatnpc.state.direction = 'left';
                                    goatnpc.state.velocity = 2.5;
                                } else 
                                    goatnpc.state.direction = 'right';
                                    goatnpc.state.velocity = 2.5;
                            } else {
                                if (dy > 0) {
                                    goatnpc.state.direction = 'up';
                                    goatnpc.state.velocity = 2.5;
                                } else 
                                    goatnpc.state.direction = 'down';
                                    goatnpc.state.velocity = 2.5;
                            }
                            }
                        
                    }
                    
                }   
            }
        }
        

        if (goatnpc.state.position.x < (canvas.width - 40) && goatnpc.state.position.x > (canvas.width - canvas.width + 40) && goatnpc.state.position.y > (canvas.height - canvas.height + 40) && goatnpc.state.position.y < (canvas.height - 40) && b == false) {
            if (goatnpc.state.direction == 'up') {
                goatnpc.state.position.y -= goatnpc.state.velocity * timeElapsed1;
            } else if (goatnpc.state.direction == 'right') {
                goatnpc.state.position.x += goatnpc.state.velocity * timeElapsed1;
            } else if (goatnpc.state.direction == 'down') {
                goatnpc.state.position.y += goatnpc.state.velocity * timeElapsed1;
            } else {
                goatnpc.state.position.x -= goatnpc.state.velocity * timeElapsed1;
            }
            nmove = true;
        }

        else if (b == true) {
            if (goatnpc.state.direction == 'left'){
                goatnpc.state.direction = 'right';
                goatnpc.state.position.x += goatnpc.state.velocity * timeElapsed1;
                b = false;
            }

            else if (goatnpc.state.direction == 'right') {
                goatnpc.state.direction = 'left';
                goatnpc.state.position.x -= goatnpc.state.velocity * timeElapsed1;
                b = false;
            }

            else if (goatnpc.state.direction == 'up') {
                goatnpc.state.direction = 'down';
                goatnpc.state.position.y += goatnpc.state.velocity * timeElapsed1;
                b = false;
            }

            else if (goatnpc.state.direction == 'down') {
                goatnpc.state.direction = 'up';
                goatnpc.state.position.y -= goatnpc.state.velocity * timeElapsed1;
                b = false;
            }
        }

        if (goatnpc.state.position.x >= (canvas.width - 40)) {
            goatnpc.state.direction = 'left';
            goatnpc.state.position.x -= goatnpc.state.velocity * timeElapsed1;
        }

        else if (goatnpc.state.position.x <= (canvas.width - canvas.width + 40)) {
            goatnpc.state.direction = 'right';
            goatnpc.state.position.x += goatnpc.state.velocity * timeElapsed1;
        }

        else if (goatnpc.state.position.y <= (canvas.height - canvas.height + 40)) {
            goatnpc.state.direction = 'down';
            goatnpc.state.position.y += goatnpc.state.velocity * timeElapsed1;
        }

        else if (goatnpc.state.position.y >= (canvas.height - 40)) {
            goatnpc.state.direction = 'up';
            goatnpc.state.position.y -= goatnpc.state.velocity * timeElapsed1;
        }
    } 
    goatnpc.state.velocity = 2;
    if (model.keyPressed.space == false)
            goatnpc.state.sprite = 1;    
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
        // case 32: // space
        //     if (model.player.state.type.name == 'Goat1') {
        //         model.player.state.type = objectList.goat2;
        //         model.player.state.sprite = 0;
        //         model.player.state.size = 100;
        //     } else {
        //         model.player.state.type = objectList.goat1;
        //         model.player.state.sprite = 0;
        //         model.player.state.size = 100;
        //     }
        //     break;
            case 32: //space
                model.keyPressed.space = true;
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
        case 32: //space
            model.keyPressed.space = false;
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
    nmove = false;
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
    bbTouch1 = false;
    bbTouch2 = false;
    // pro goat2 tedy pro bilou kozu
    bbTouchtof(model.npc[0]);
    // pro goat1 tedy pro cernou kozu
    bbTouchtof(model.npc[1]);
    // pro goat2
    npcMoves(model.npc[0], timeElapsed, bbTouch2);
    // pro goat1
    npcMoves(model.npc[1], timeElapsed, bbTouch1);
      
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

    if (
        nmove && 
        timeStamp - model.npc[0].state.spriteUpdate > model.npc[0].state.type.spriteSpeed
    ) {
        model.npc[0].state.sprite = (model.npc[0].state.sprite + 1) % model.npc[0].state.type.spriteList[model.npc[0].state.direction].length;
        model.npc[0].state.spriteUpdate = timeStamp;
    }

    if (
        nmove && 
        timeStamp - model.npc[1].state.spriteUpdate > model.npc[1].state.type.spriteSpeed
    ) {
        model.npc[1].state.sprite = (model.npc[1].state.sprite + 1) % model.npc[1].state.type.spriteList[model.npc[1].state.direction].length;
        model.npc[1].state.spriteUpdate = timeStamp;
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

    // bounding boxes
        // model.boundingbox.forEach(function(item){
        //     ctx.drawImage(
        //         item.state.type.spriteList[item.state.direction][item.state.sprite].img,
        //         item.state.position.x - item.state.size.width / 2, 
        //         item.state.position.y - item.state.size.height / 2, 
        //         item.state.size.width,
        //         item.state.size.height,
        //     );
        // });

    // goat npc
    model.npc.forEach(function(item) {
        ctx.drawImage(
            item.state.type.spriteList[item.state.direction][item.state.sprite].img, 
            item.state.position.x - item.state.size / 2, 
            item.state.position.y - item.state.size / 2, 
            item.state.size,
            item.state.size
        );
    });

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