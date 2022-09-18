
const getFibnacci = (n) => {
    const result = [0,1];

    for (let i = 1; i <= n; i++){
        result.push(result[i - 1] + result[i]);

    }

    return result.join(`\n`)
}





console.log(getFibnacci(15))


function fibinacciSeries(n) {

    const newArry = []
    for (let i = 0; i < n; i+newNum){
        const newNum = i
      newArry.push(i)
    }
}


// fibinacciSeries(10)











