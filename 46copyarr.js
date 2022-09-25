let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}


let sarr=[]
for(i of arr){
    sarr.push(i)
}
console.log(sarr)