

var arr = ["James", "Brennie"];
console.log(arr)
arr.push("Robert")
console.log(arr)
var length = arr.length;
let middle = -1
if(length%2 != 0){
    middle = Math.floor(length/2)
    arr[middle] = "Calvin"
    console.log(arr)
}
arr.shift()
console.log(arr)
arr.unshift("Rose","Regal")
console.log(arr)