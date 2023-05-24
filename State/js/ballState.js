class Ball{
    constructor(ctx, canvas, ballSize){
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.ballSize = ballSize;
        this.positionX = 0;
        this.positionY = 0;

        // Iniciamos la imágen con el state1
        this.state = new State1();
    }

    // Recibimos los estados
    setState(state){
        this.state = state;
    }

    // Imprime la imágen
    print(){
        this.state.print(this);
    }
}

// En el State1
// Mueve la imágen a la derecha
class State1{
    print(ball){
        ball.ctx.clearRect(0,0, ball.width, ball.height);

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
    }
}

const ctx = canvas.getContext("2d");
ctx.fillStyle="black";
const ball = new Ball(ctx, canvas, 50);
setInterval(()=>ball.print(), 100);