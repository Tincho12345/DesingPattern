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

    build(){
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;      
    }
}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder.setAction("add.php")
                                .setText("firstName", "Nombre")
                                .setText("lastName", "Apellidos")
                                .build();
form1.innerHTML = formPeople.getContent();