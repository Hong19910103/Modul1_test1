class Rectangle{
    constructor(x,y,withd,height,color) {
        this._x = x;
        this._y = y;
        this._with = withd;
        this._height = height;
        this.color = color;
    }
    renderRectangle(){
      let  paper = document.getElementById("myCanvas");
        let ctx = paper.getContext("2d");
        ctx.beginPath();
        ctx.fillRect(this._x, this._y,this._with,this._height)
        ctx.strokeStyle(this.color);
    }
}
let  rec1=new Rectangle(10,10,200,100,"#00000");
    rec1.renderRectangle();

