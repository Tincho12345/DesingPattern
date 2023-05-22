// class SaleContext{
//     constructor(strategy){
//         this.strategy = strategy;
//     }
//     setStrategy(strategy){
//         this.strategy = strategy;
//     }
//     calculate(amount){
//         return this.strategy.calculate(amount);
//     }
// }

// class RegularSaleStrategy{
//     constructor(tax){
//         this.tax = tax;
//     }
//     calculate(amount){
//         return amount + (amount * this.tax);
//     }
// }

// class DiscountStrategy{
//     constructor(tax, discount){
//         this.tax = tax;
//         this.discount = discount;
//     }

//     calculate(amount){
//         return amount + (amount * this.tax) - this.discount;
//     }
// }

// class ForeingSaleStrage{

//     calculate(amount){
//         return amount * this.getDollarPrice();
//     }
//     getDollarPrice(){
//         return 15;
//     }
// }

// const regularSale = new RegularSaleStrategy(0.21);
// const discountSale= new DiscountStrategy(0.21,3);
// const foreingSale= new ForeingSaleStrage();

// const sale = new SaleContext(regularSale);

// console.log(sale.calculate(10));
// sale.setStrategy(discountSale);
// console.log(sale.calculate(10));
// sale.setStrategy(foreingSale);
// console.log(sale.calculate(10));

const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Erdinger Pikantus Para algunas personas, Erdinger Weissbier Pikantus cerveza bock oscuraes " + 
        "un manjar para disfrutar en los meses más fríos del año.Para los amantes de la cerveza fuerte, " +
        "sin embargo, la temporada para Pikantus dura un total de meses. Con 7,3% de alcohol, esta especialidad " +
        "de cerveza de trigo tiene un contenido de alcohol considerablemente mayor que otras variedades producidas " +
        "por Erdinger Weissbräu.",
        img:"https://imag.bonviveur.com/botella-de-erdinger-pikantus-junto-a-dos-copas-de-cerveza.webp"
    },
    {
        name: "Corona",
        country: "México",
        info: "Corona es el nombre de una marca de cerveza mexicana fundada en 1926 muy popular en todo el mundo, ​ elaborada por el Grupo Modelo, que a su vez forma parte de la multinacional belga AB Inbev. Es una bebida del tipo pilsener que comenzó a elaborarse en el año de 1925, en la planta de la Cervecería Modelo",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/448/812/products/fotos-bebidas-281-6ea96ced2f679a333116312263575185-640-0.png"
    },
    {
        name: "Brahama",
        country: "Argentina",
        info: "Brahma es una cerveza brasileña lanzada en 1888 cuando el suizo Joseph Villiger, radicado en Río de Janeiro, decidió fabricar su propia cerveza para satisfacer su exigente paladar por medio de la cervecería Manufactura de Cerveja Brahma Villiger & Companhia.",
        img:"https://superlago.com.ar/wp-content/uploads/2022/10/7792798009756_02.png"
    }
];

class InfoContext{
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                </div>
            <hr>`;
        }, "");
    }
}

class DetailedListStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                    <p>${beer.info}</p>
                </div>
            <hr>`;
        }, "");
    }
}

class ListWithImageStrategy{
    show(data, element){
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac + `<div>
                    <h2>${beer.name}</h2>
                    <img width="10%" src="${beer.img}">   
                    <p>${beer.country}</p>
                    <p>${beer.info}</p>
                </div>
            <hr>`;
        }, "");
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
]

const info = new InfoContext(new ListStrategy(),
data, content);
info.show();

slcOptions.addEventListener('change',(event) => {
    const op = event.target.value;
    info.setStrategy(strategies[op]);
    info.show();
});
