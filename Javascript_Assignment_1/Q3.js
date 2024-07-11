function checkEmailId(str){
    checkat = false 
    checkdot = false
    for(i=0;i<str.length;i++){
        if(str[i] == '.' && checkat == false){
            return false
        }
        if(str[i] == '@'){
            checkat = true
        }
        if(checkat == true){
            if(str[i] == '.'){
                checkdot = true
            }
        }
    }
    if(checkat == true && checkdot == true){
        return true
    }
    return false
}

let email = "hpatel156@hawk.iit.edu"
let email1 = "h.patel156@hawk.iit.edu"
let email2 = "hetpatel"

let res = checkEmailId(email)
let res1 = checkEmailId(email1)
let res2 = checkEmailId(email2)

console.log(res)
console.log(res1)
console.log(res2)
