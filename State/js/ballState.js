// Patrón de Diseño State Muy usado en Video Juegos
// Resumiendo Se realiza una Acción dependiendo del State(estado)

// Declaramos el Objeto Cambas para editarlo
const ctx = canvas.getContext("2d");
// Decimos en que color será negro
ctx.fillStyle="black";

// clase Ball
class Ball{
    // Obtenemos el objeto en el Constructor
    // Asignamos valores por default inicial
    constructor(ctx, canvas, ballSize){
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ballSize = ballSize;
        // posición 0
        this.positionX = 0;
        this.positionY = 0;
        // Iniciamos la imágen con el state1
        this.state = new State1();
    }

    // Recibimos los estados y lo asignamos
    setState(state){
        this.state = state;
    }

    // Imprime la imágen
    print(){
        this.state.print(this);
    }
}

//#region Estados
// En el State1
// Mueve la imágen a la derecha
class State1{    
    print(ball){
        // Hacemos una limpieza de la pantalla y su tamaño
        ball.ctx.clearRect(0,0, ball.width, ball.height);
        // pintamos en Negro el cuadrado     
        ball.ctx.fillRect(
            ball.positionX, 
            ball.positionY,
            ball.ballSize,
            ball.ballSize
            );     
            // Movemos el cuadrado de Izquierda a derecha
            // hasta el borde
        if(ball.positionX < ball.width - ball.ballSize)
            ball.positionX += ball.ballSize;
        else          
            ball.setState(new State2());
            ctx.fillStyle="black";
    }
}

// En el State2
// Mueve la imágen de Arriba hacia abajo
class State2{
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height);
        ball.ctx.fillRect(
            ball.positionX, 
            ball.positionY,
            ball.ballSize,
            ball.ballSize
            );
        
            // Movemos el cuadrado de Arriba hacia abajo
            // hasta el borde
        if(ball.positionY < ball.height - ball.ballSize)
            ball.positionY += ball.ballSize;
        else
        ball.setState(new State3());
        ctx.fillStyle="red";
    }
}

// En el State3
// Mueve la imágen de Arriba hacia abajo
class State3{
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height);
        ball.ctx.fillRect(
            ball.positionX, 
            ball.positionY,
            ball.ballSize,
            ball.ballSize
            );
        
            // Movemos el cuadrado de Derecha a Izquierda
            // hasta el borde
        if(ball.positionX > 0)
            ball.positionX -= ball.ballSize;
        else
        ball.setState(new State4());
        ctx.fillStyle="blue";
    }
}

// En el State3
// Mueve la imágen de Arriba hacia abajo
class State4{
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height);
        ball.ctx.fillRect(
            ball.positionX, 
            ball.positionY,
            ball.ballSize,
            ball.ballSize
            );      
            // Movemos el cuadrado de Derecha a Izquierda
            // hasta el borde
        if(ball.positionY > 0)
            ball.positionY -= ball.ballSize;
        else
        ball.setState(new State1());
        ctx.fillStyle="yellow";
    }
}
//#endregion

// Dibujamos el canvas enviamos con su tamaño 20px
 const ball = new Ball(ctx, canvas, 10);
 //ball.print();

// intervalo para generar el movimiento cada 
//100 Milisegundos manejamos la velocidad
setInterval(()=>ball.print(), 10);