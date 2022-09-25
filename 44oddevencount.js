let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}

let countodd=0
let counteven=0
for(i of arr){
    if(i%2==0){
        counteven++
        
    }else{
        countodd++
    }
}
console.log("count even-->",counteven,"count odd-->",countodd)