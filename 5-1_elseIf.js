const shoesPrice = 40000;
// if(shoesPrice < 40000){
//     console.log("이 신발을 사겠습니다.")
// }else{
//     console.log("너무 비싸요")
// } //if의 조건이 충족하지 않을 때 실행되는 코드블럭 else{}

if(shoesPrice < 40000){
    console.log("이 신발을 사겠습니다.")
}else if(shoesPrice <= 40000) {
    console.log("고민 좀 해볼게요")
}else {
    console.log("너무 비싸요")
}