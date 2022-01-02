//논리 연산자 && = and 둘 다 트루여야 true , || = or 둘 중에 하나만 True여도 true, ! = not true를 flase로 flase를 true로 

let isOnSale = true;
let isDiscountItem = true;
let isNotSale = false;

console.log(isOnSale && isDiscountItem) //두 변수 다 true 이기에 and 연산자로 true
console.log(isOnSale && isNotSale) //두 변수 다 true가 아니기에 and 연산자로 flase
console.log(isOnSale || isNotSale) //두 변수 중 하나가 true 이기에 or 연산자로 true
console.log(!isOnSale) //not 연산은 변수 앞에 붙혀서 사용 true이면 flase로 flase이면 true로



