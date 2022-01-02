const rainBow = new Array("빨" , "주" , "노" , "초" , "파" , "남" , "보")
console.log(rainBow[0]) //배열의 엘리먼트 위치값을 이용하여 인덱스
console.log(rainBow.length) //배열의 엘리먼트 갯수 반환

for (let index = 0; index < rainBow.length; index++) {
    const element = rainBow[index];
    console.log(element)
}