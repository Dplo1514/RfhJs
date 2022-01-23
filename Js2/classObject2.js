class Product {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }

    printInfo(){
        console.log(`${this.name}은 ${this.price}원 입니다`);
    }
}

let product = new Product("맥북" , 20000000);
product.printInfo()