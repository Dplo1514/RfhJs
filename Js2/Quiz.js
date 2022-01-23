//색깔 가격 사이즈를 나타내는 의류쇼핑몰 클래스

class shop {
    name;
    size;
    price;
    constructor(name  , size , price){
        this.name = name;
        this.size = size;
        this.price = price;
    }

    priceInfo(){
        console.log(`옷의 이름은 ${this.name} 사이즈는 ${this.size} 가격은 ${this.price}원 입니다.`);
    }
}

let i = new shop("코트" , "free" , 200000);

i.priceInfo()