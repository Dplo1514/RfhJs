//10개의 상품가격을 가진 배열을 생성 , for문을 이용하여 상품 가격들의 합계와 평균을 구할 것
const Price = new Array(1000 ,2000 ,3000 ,4000 ,5000 ,6000 ,7000 ,8000 ,9000 ,10000)

let sum = 0;
for(const price of Price){
    sum += price;
}

const avg = sum / Price.length;

console.log(`총 상품의 가격 합은 ${sum} , 평균 값은 ${avg}`)