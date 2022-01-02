class Product { //클래스 선언
    constructor(name , price){ //생성자
        this.name = name;
        this.price = price;
    }

    printInfo() { //메소드를 정의
        console.log(`상품명: ${this.name} , 상품가격 : ${this.price}`)
    }
}

//객체 생성
const apple = new Product("사과" , 30000)
//메서드 호출
apple.printInfo()