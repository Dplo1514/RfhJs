class cloth {
    constructor (color , size , price){
        this.color = color;
        this.size = size;
        this.price = price;
    }

    printInfo(){
        console.log(`이 옷의 색깔은 : ${this.color} , 이 옷의 사이즈는 : ${this.size} , 이 옷의 가격은 ${this.price}원 입니다.`)
    }
}

const coat = new cloth("검정색" , "XL" , 30000)
coat.printInfo()