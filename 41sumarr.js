let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}
let sum=0
for(let i of arr){
    sum=sum+i
}
console.log(sum)