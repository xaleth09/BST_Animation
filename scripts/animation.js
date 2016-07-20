/**
 * Created by xaleth on 6/30/2016.
 */

//animate search
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var play = false;
var id;

document.addEventListener("mousemove", function(evt){
    var rect = canvas.getBoundingClientRect();
    var mouse = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };

    for(let n of tree.bfsArray){
        if(mouse.x > n.leaf.x-n.leaf.radius && mouse.x < n.leaf.x+n.leaf.radius && mouse.y < n.leaf.y + n.leaf.radius && mouse.y > n.leaf.y - n.leaf.radius){
            n.leaf.hover = true;
        }else{
            n.leaf.hover = false;
        }
    }


});

document.addEventListener("click", function(evt){
    for(let n of tree.bfsArray){
        if(n.leaf.hover){
            tree.remove(n.key);
        }
    }
});


let tree;
function setUp(){

    tree = null;
    tree = BST.randomBSTgen();

    playNpause();
}

function playNpause(){
    play = true;
    draw();
}

function draw(){
    if(!play){
        cancelAnimationFrame(id);
    }else{
        ctx.clearRect(0,0, canvas.width, canvas.height);

        tree.draw();
        id = requestAnimationFrame(draw);
    }
}



class Animator{
    constructor(canvasID, config){
        this.canvas = document.getElementById(canvasID);
        this.ctx = canvas.getContext("2d");

        this.play = false;
        this.frameID = null;

        this.drawables = []; //DrawableObj array

        object.assign(this,config);
    }

    playNpause(){
        this.play = !this.play;
        this.draw();
    }

    draw(){
        if(!this.play){
            cancelAnimationFrame(this.frameID);
        }else{
            this.ctx.clearRect(0,0, canvas.width, canvas.height);

            for(let obj of this.drawables){
                obj.draw();
            }

            this.frameID = requestAnimationFrame(draw);
        }
    }
}