class Notebook { //클래스의 객체 정의
    constructor (name , price , company){ //매개 변수를 받아 객체의 속성을 정의해줄 생성자
        this.name = name;
        this.price = price;
        this.company = company;
    }
}

const notebook1 = new Notebook("Macbook" , 10000000 , "Apple")
console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.price)
console.log(notebook1.company)