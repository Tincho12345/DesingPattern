
// Crear Herramienta para Pintar un div

//define abstracción
class Editor{
    constructor(implementor){
        this.implementor = implementor;
    }

    // Método (Ancho, Alto, Color)
    print(width, height, color){
        this.implementor.setWidth(width);
        this.implementor.setHeigth(height);
        this.implementor.setColor(color);
        this.implementor.print();
    }
}

// Clase canvas
class CanvasPainter{

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.width = 1;
        this.height = 1;
        this.color = "#000000";
    }

    setWidth(width){
        this.width = width;
    }

    setHeigth(height){
        this.height = height;
    }

    setColor(color){
        this.color = color;
    }

    print(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.color;
        // Pintamos el alto y ancho
        this.ctx.fillRect(0,0, this.width, this.height);
    }
}

// Clase Implementation puede usarse sin el bridge
class HtmlPainter{
    constructor(container){
        this.container = container;
        this.width = "1px";
        this.height = "1px";
        this.color = "#000000";
    }

    setWidth(width){
        this.width = width +"px";
    }
    // concatenamos px para que no tenga que ser enviados
    setHeigth(height){
        this.height = height +"px";
    }

    setColor(color){
        this.color = color;
    }

    print(){
        this.container.innerHTML = `<div
            style="width:${this.width};height:${this.height};
            background:${this.color};"
        >        
        </div>`
    }
}

// const editor = new Editor(new HtmlPainter(content));
const editor = new Editor(new CanvasPainter(canvas));

range.addEventListener("input", (e) =>{
    const width = e.target.value;
    const height = e.target.value;
    const color = editorColor.value;
    editor.print(width, height, color);
});

editorColor.addEventListener("input", (e) =>{
    const width = range.value;
    const height = range.value;
    const color = e.target.value;
    editor.print(width, height, color);
});
