class Form{
    constructor(controls, action){
        this.controls = controls;
        this.action = action;
    }

    getContent(){
        return `<form method="post" action="${this.action}">
            ${this.controls.reduce((ac, c) =>{
                return ac + `<div>
                        ${this.getLabel(c)}
                        ${this.getInput(c)}
                </div>`
            }, "")}  
            <button type="Submit">Enviar</button>    
        </form>`;
    }

    getLabel(control){
        return `<label>${control.text}</label>`;
    }

    getInput(control){
        return `<input type="${control.type}"
            id="${control.name}"
            name="${control.name}"   
        />`;
    }
}

class FormBuilder{
    constructor(){
        this.reset();
    }
    reset(){
        this.action= "";
        this.controls = [];
    }

    setAction(action){
        this.action = action;
        return this;
    }

    setText(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "text"
        });
        return this;
    }

    setEmail(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "email"
        });
        return this;
    }

    setCheckBox(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "checkbox"
        });
        return this;
    }

    setColor(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "color"
        });
        return this;
    }

    build(){
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;      
    }
}

class FormDirector{
    constructor(formBuilder){
        this.setBuilder(formBuilder);
    }
    setBuilder(formBuilder){
        this.formBuilder = formBuilder;
    }

    // Director para el Tipo Persons
    createPeopleForm(){
        // Reseteamos el form
        this.formBuilder.reset();
        // Asignamos los encadenamientos
        this.formBuilder
            .setText("firstName", "Nombre")
            .setText("lastName", "Apellido");
    }

    createContactForm(){

        // Reseteamos el form
        this.formBuilder.reset();
        // Asignamos los encadenamientos
        this.formBuilder
            .setText("nombreInteresado", "Nombre Interesado")
            .setEmail("email", "Correo electrónicos")
            .setText("message", "Mensaje");
    }
}

// Instanciamos al objeto
const frmBuilder = new FormBuilder();
//Create the form
const formPeople = frmBuilder.setAction("add.php")
                                .setText("firstName", "Nombre")
                                .setText("lastName", "Apellidos")
                                .setCheckBox("dancer", "Ud Baila?")
                                .setColor("favoriteColor", "Color Favorito")
                                .build();
form1.innerHTML = formPeople.getContent();

const formMail = frmBuilder.setAction("send.php")
    .setText("name","Nombre")
    .setEmail("email","Correo electrónico")
    .build();
form2.innerHTML = formMail.getContent();

//Implementa FormDirector
const director = new FormDirector(frmBuilder);

director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();

director.createPeopleForm();
form4.innerHTML = frmBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = frmBuilder.build().getContent();