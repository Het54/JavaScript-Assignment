let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let length = Object.keys(salaries).length;
let sum = 0
for(i=0;i<length;i++){
    sum += salaries[Object.keys(salaries)[i]]
}
console.log(sum)

