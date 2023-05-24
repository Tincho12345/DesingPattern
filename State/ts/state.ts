interface State{
    // Estos métodos debes implementarse en las clases 
    // que se implementen esta interface
    next(ticket: Ticket): number | null;
    // método para agregar que recibe una cantidad
    // no regresa nada es void
    add(ticket: Ticket, quantity: number): void;
}

// Contexto
class Ticket{
    private state: State;
    // Cantidad restante
    quantity: number;
    // límites
    readonly limit: number;
    // indice contador de números
    private number: number;

    constructor(limit: number){
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        // asignamos Estado
        this.state = new EmptyState();
    }

    // regresa el número que va el contador incrementando en 1 GETTER
    get getNumber(): number{
        return this.number++;
    }

    // Método que pueda cambiar sus estados SETTER
    set setState(state: State){
        this.state = state;
    }

    // GETTER DEL STATE
    get getState(){
        return this.state;
    }

    next(): number | null{
        return this.state.next(this);
    }

    // funcionalidad para agregar nuevos cupos sin superar a limit
    add(quantity: number): void {
        this.state.add(this, quantity);    
    }
}

// Estado Vacío
class EmptyState implements State{
    next(ticket: Ticket): null {
        return null;
    } 
    add(ticket: Ticket, quantity: number): void{
        if(quantity < ticket.limit){
            ticket.quantity = quantity;
            ticket.setState = new WithDataState();
        }else if(quantity === ticket.limit){
            ticket.quantity = quantity;
            ticket.setState = new FullState();
        }

    } 
}

// Estado con info pero no está lleno
class WithDataState implements State{
    next(ticket: Ticket): number {
        // Reducimos la cantidad
        ticket.quantity --;
        if(ticket.quantity <=0){
            ticket.setState = new EmptyState();
        }
        return ticket.getNumber;
    }

    add(ticket: Ticket, quantity: number): void{
        if((ticket.quantity + quantity) < ticket.limit){
            ticket.quantity += quantity;
        }else if((ticket.quantity + quantity) === ticket.limit){
            ticket.quantity += quantity;
            ticket.setState = new FullState();
        }
    } 
}

// Estado lleno
class FullState implements State{
    next(ticket: Ticket): number {
        // Reducimos la cantidad
        ticket.quantity --;
        if(ticket.quantity <=0){
            ticket.setState = new EmptyState();
        }else{
            ticket.setState = new WithDataState();
        }
        return ticket.getNumber;
    }

    add(ticket: Ticket, quantity: number): void {
        console.error("Ticket lleno");
    }
}

// Ejecución
const ticket = new Ticket(5); // Establecemos límite de 5
console.log(ticket.getState);
console.log(ticket.next());
// intento agregar 6 sin modificar su límite 5
ticket.add(6);
// imprimo el Estado
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(4); // no esta lleno falta 1
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3); // con 3 queda lleno en 5
console.log(ticket.getState);
ticket.add(1); // no se agregan ya que está lleno
console.log(ticket.next());
console.log(ticket.getState);