//거리를 의미하는 변수를 선언하고 원하는 숫자값 (단위는 km라고 가정) 을 할당합니다. 2km 미만이면 "걸아가자"를,
// 2km 이상이고 5km 미만이면 "택시를 타자"를, 그 외에는 "기차를 타자"를 출력해봅니다.
    
let km = 4;

if (km < 2){
    console.log("걸어가자")
}else if(km > 2 && km <5){
    console.log("택시를 타자")
}else{
    console.log("기차를 타자")
}