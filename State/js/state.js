class DocumentContext{
    constructor(){
        this.content = "";
        this.state = new BlankState();
    }

    setState(state){
        this.state = state;
    }

    write(text){
        this.state.write(this, text);
    }
}

// Crea contenido de un Document en blanco y modifica el estado
class BlankState{
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}

// modifica el contenido y el estado sigue igual
class WithContentState{
    write(documentContext, text){
        documentContext.content +=" " + text;
    }
}

class ApprovedState{
    write(documentContext, text){
        console.error("Documento Aprobado ya no permite Modificaciones");
    }
}

// Creamos Nuevo Documento
const doc = new DocumentContext();
// imprimo Estado
console.log(doc.state);
// Escribo en documento en blanco
doc.write("Pato");
// imprimo el contenido
console.log(doc.content);
// imprimo el estado
console.log(doc.state);
// edito el contenido
doc.write("Algo");
doc.write("mas de Texto");
// imprimo el nuevo contenido
console.log(doc.content);
// Seteamos manualmente el State
doc.setState(new ApprovedState());
console.log(doc.state);
// Intentamos Agregar Contenido
doc.write("Intento Agregar Texto");
// Prueba de que el contenido se mantiene
console.log(doc.content);
// Reseteamos Estado 
doc.setState(new WithContentState());
// Imprimo el State
console.log(doc.state);
// vuelvo a Editar
doc.write("Vuelvo a Editar");
// imprimo contenido
console.log(doc.content);