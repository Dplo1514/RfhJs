let shoesPrice = 50000;
console.log(`신발의 가격은 ${shoesPrice}원 입니다`) //템플릿 리터럴 벡틱으로 감싼 후 ${변수}를 할당하여 출력

let count = 1;
const preIncrement = ++count //count+1 -> count에 재할당 후 preInclement에 할당
console.log(`count: ${count} preIncrement: ${preIncrement}`)

let count1 = 1;
const preIncrement1 = count1++ //count1을 preInclement1에 할당 후 count1에 count +1을 재할당
console.log(`count1: ${count1} preIncrement1: ${preIncrement1}`)
