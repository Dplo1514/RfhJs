function calculateAvg(price1 , price2){ //function 함수는 function 함수명 (매개변수) {동작} 으로 구성
    const sum = price1 + price1;
    console.log(`두 상품의 총 합은 : ${sum}원 입니다.`)
    avg = sum / 2;
    return console.log(`두 상품의 평균 값은 : ${avg}원 입니다.`)
}

const priceA = 10000;
const priceB = 10000;
const avg1 = calculateAvg(priceA , priceB)
console.log(avg1)
