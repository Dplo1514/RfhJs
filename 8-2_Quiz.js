function calculationAvg (price1 , price2 , price3){
    sum = price1 + price2 +price3;
    console.log(`상품1:${price1}원  상품2:${price2}원  상품3:${price3}원의 합은 ${sum}원 입니다.`)
    const avg = sum / 3;
    return console.log(`상품1:${price1}원 상품2:${price2}원 상품3:${price3}원의 평균은 ${avg}원 입니다.`)
}

const priceA = 1000;
const priceB = 2000;
const priceC = 3000;
let avg1 = calculationAvg(priceA , priceB , priceC)
console.log(avg1)