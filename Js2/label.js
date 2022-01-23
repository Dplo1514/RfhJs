//짝수 , 홀수 리스트를 생성하는 반복문 => 만들어진 리스트를 더하는 반복문


plus:
for (let i =0 ; i < 10 ; i++) {
    let odd = [];
    odd.push(i);
    console.log(odd)
    
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0){
                continue plus;
            }
        }
}


   