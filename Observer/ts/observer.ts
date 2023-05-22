interface IObserver<T>{
    refresh(value: T):void;
}

interface ISubject<T>{

    observers: IObserver<T>[];

    subsribe(observer: IObserver<T>) : void;
    unsubsribe(observer: IObserver<T>) : void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T>{
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }
    subsribe(observer: IObserver<T>): void {
        throw new Error("Method not implemented.");
    }

    subscribe(observer: IObserver<T>){
        this.observers.push(observer);
    }

    unsubsribe(observer: IObserver<T>) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(e=>{
            e.refresh(value);
        });
    }
}

class Observer<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    };

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n)=>{
    console.log(`Hello ${n}`);
});
const obs2 = new Observer<number>((n)=>{
    console.log(`Hola ${n}`);
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);
subject.notify(32);
//Trabajando con Strings
const subjectString = new Subject<string>();
const obs1String = new Observer<string>((s)=>{
    console.log(`Hola ${s.toUpperCase()}`);
});

const obs2String = new Observer<string>((s)=>{
    console.log(`Hola ${s.toLowerCase()}`);
});

subjectString.subscribe(obs1String);
subjectString.subscribe(obs2String);
subjectString.notify("Carlos");
subjectString.notify("Martín Espíndola");
