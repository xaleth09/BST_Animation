/**
 * Created by xaleth on 7/12/2016.
 */

class DrawableObj{
    constructor(){
        if(this.constructor === DrawableObj) {
            throw new TypeError('Abstract class "drawableObj" cannot be instantiated directly.');
        }

        if(this.draw === DrawableObj.prototype.draw){
            throw new TypeError('Please implement abstract method draw()');
        }
    }

    draw(){
        throw new TypeError("Do not call abstract method draw from child.");
    }
}


//Sub-classes of DrawableObj
const RADIUS = 20;
class Leaf extends DrawableObj {
    constructor(x = canvas.width/2, y = canvas.height/10, config) {
        super();
        this.x = x;
        this.y = y;
        this.radius = RADIUS;
        this.depth;
        this.text;

        this.hover = false;

        Object.assign(this,config);

        this.color = this.chooseColor();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.hover ? "grey": this.chooseColor();
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = this.hover ? "white": "black"; // font color to write the text with
        var font = "bold " + this.radius +"px serif";
        ctx.font = font;
        ctx.textBaseline = "top";
        ctx.fillText(this.text, this.x-this.radius/2, this.y-this.radius/2);
    }

    chooseColor(){
        let color;
        switch(this.depth){
            case 0: //root
                color = "brown";
                break;
            case 1:
                color = "green";
                break;
            case 2:
                color = "orange";
                break;
            case 3:
                color = "#ffd11a";
                break;
            case 4:
                color = "red";
                break;
            case 5:
                color = "#ff9933";
                break;
            case 6:
                color = "#996633";
                break;
            default:
                color = "pink";
        }

        return color;
    }
}


class Line extends DrawableObj{
    constructor(fx = canvas.width/2,fy = 0,tx = canvas.width/2,ty = canvas.height, color = "black"){
        super();
        this.fromX = fx;
        this.fromY = fy;
        this.toX = tx;
        this.toY = ty;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.fromX,this.fromY);
        ctx.lineTo(this.toX,this.toY);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 10;
        ctx.stroke();
    }
}
