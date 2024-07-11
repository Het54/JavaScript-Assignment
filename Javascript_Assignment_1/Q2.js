let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    let length = Object.keys(obj).length

    for(i=0;i<length;i++){
        if(typeof menu[Object.keys(obj)[i]] == "number"){
            menu[Object.keys(obj)[i]] *= 2 
        }
    }

}

multiplyNumeric(menu)

console.log(menu.width)
console.log(menu.height)
console.log(menu.title)