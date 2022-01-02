for(let temperature = 2; temperature <= 10; temperature++){
    if(temperature % 2 === 0){
        console.log(`${temperature} It's odd`)
    }else if(temperature % 2 === 1){
        console.log(`${temperature} It's even`)
    }else{
        console.log("fail")
    }
}