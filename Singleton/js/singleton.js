class Tapa{
    static getInstance(){
        return Tapa.instance;
    }


    constructor(){       
        if(Tapa.instance){
            return Tapa.instance;
        }else{
            this.color=this.random;
            Tapa.instance = this;
        }            
    }
}

const Tapa1 = new Tapa();
const Tapa2 = new Tapa();
const Tapa3 = Tapa.getInstance();

// console.log(Tapa1);
// console.log(Tapa2);
// console.log(Tapa3);

class WeekDays{
    daysEs = ["Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"];
    daysEn = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"];

    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays(){
        return this.lang === "es" ? this.daysEs:this.daysEn;  
    }
}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays();
console.log(weekDays.getDays());
console.log(weekDays2.getDays());