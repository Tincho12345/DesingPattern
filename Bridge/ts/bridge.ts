interface ListImplementor{
    elements: number[];

    add(number: number): void;
    getElements(): number[];
}

class OrderedList implements ListImplementor{
    elements: number[] = [];

    public add(number: number): void{
        this.elements.push(number);
        this.elements.sort();
    }
    public getElements(): number[]{
        return this.elements; 
    }
}

class UniqueList implements ListImplementor {
    elements: number[] = [];
    public add(number: number): void{
        if(!this.elements.includes(number)){
            this.elements.push(number);
        }
    }

    public getElements(): number[]{
        return this.elements; 
    }
}

interface DataAbstraction{
    implementor: ListImplementor;
    add(number: number): void;
    get(): number[];
    operation(fn: (n: number)=>number): number[];
}

class DataRefinedAbstraction implements DataAbstraction{
    implementor: ListImplementor;

    constructor(implementor: ListImplementor){
        this.implementor = implementor;
    }

    public add(number: number): void{
        this.implementor.add(number);
    }

    public get(): number[]{
        return this.implementor.getElements();
    }

    public operation(fn: (n: number)=>number): number[]{
        return this.implementor.getElements().map(fn);
    }    
}

const uniqueData =new DataRefinedAbstraction(new UniqueList());
const orderedData =new DataRefinedAbstraction(new OrderedList());

uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(2);
uniqueData.add(5);
uniqueData.add(5);
uniqueData.add(4);
uniqueData.add(6);
console.log(uniqueData.get());
console.log()

const uniqueItems = uniqueData.operation((e: number) => e*2)
console.log(uniqueItems);

const listaOrdenada = new DataRefinedAbstraction(new OrderedList());

const orderedItems = uniqueData.operation((e: number) => e*3);
console.log(uniqueItems);
console.log(orderedItems.sort());
