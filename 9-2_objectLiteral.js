const macBook = {
    name: "Macbook Pro", //객체리터럴에서 변수에 바로 객체 지정시 변수명: 으로 속성 지정
    price: 2000000,

    printInfo: function() {
        console.log(`이름은 : ${this.name} 가격은 : ${this.price}`)
    }
}

macBook.printInfo()