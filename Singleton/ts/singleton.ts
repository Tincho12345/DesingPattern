class SingletonTs{
    private static instance: SingletonTs;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTs{
        if(!this.instance){
            this.instance = new SingletonTs();
        }
        return this.instance;
    }
}

const singletonTs = SingletonTs.getInstance();
const singletonTs1 = SingletonTs.getInstance();
console.log(singletonTs);
console.log(singletonTs1);