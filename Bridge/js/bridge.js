// METODO BRIDGE O PUENTE SIMULANDO DECODIFICADORES.-
//Creamos un Codificador texto
class EncoderTextAbstraction{

    // nuestra simulación de API
    constructor(encoder){
        this.encoder = encoder;
    }

    // Método para Codificar
    encode(str){
        return this.encoder.encode(str);
    }

    // Método para Decodificar
    decode(str){
        return this.encoder.decode(str);
    }
}

// casos de implementadores
// Ejemplo codificar en Base64
class Base64CodecImplementor{
    // Recibe el string para codificar
    encode(str){
        // retorna codificado
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str){
        return decodeURIComponent(escape(window.atob(str)));
    }
}

// Transformamos nuestro texto a HTML document
class HTMLEncoderImplementor{
    encode(str){
        // Generamos un array con split en el punto
        // con reduce recorremos el array acumulando en ac con arrow function
        return str.split(".").reduce((ac, e)=>{
            // utilizamos literal con comillas inglesas (alt +96)
            // con trim() eliminamos los espacios
            return ac + `<p>${e.trim()}</p>`;
        }, "");
    }

    decode(str){
        // Generamos un array con split en "</p>"
        // con reduce recorremos el array acumulando en ac con arrow function

        return str.split("</p>").reduce((ac, e)=>{
            // Reemplazando "<p>" por ". " utilizamos ternario para la primer iteración.
            return ac + (ac != ""? e.replace("<p>",". ") : e.replace("<p>","")) ;
        }, "");
    }
}
// Encoder/Decoder para Base64
const encoder1 = new EncoderTextAbstraction( new Base64CodecImplementor());
console.log(encoder1.encode("perro")); // Codificamos a Base64
console.log(encoder1.decode("cGVycm8=")); // Decodificamos d Base64

// Encoder/Decoder para HTML
const encoder2 = new EncoderTextAbstraction( new HTMLEncoderImplementor());
console.log(encoder2.encode("Esto es un Texto. y aquí comienza otro. y Aquí hay otro"));
console.log(encoder2.decode("<p>Esto es un Texto</p><p>y aquí comienza otro</p><p>y Aquí hay otro</p>"));