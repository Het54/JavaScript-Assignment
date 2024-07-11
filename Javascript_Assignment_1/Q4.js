function truncate(str, maxlength){
    if(str.length>maxlength){
        let newstr = str.slice(0,maxlength-1);
        str = newstr + "...";
        return str
    }
    return str
}

s = truncate("What I'd like to tell on this topic is:", 20);
s1 = truncate("Hi everyone!", 20)
console.log(s);
console.log(s1)