let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}

let max=-Infinity
let min=Infinity

for(let i of arr){
    if(i>max){
        max=i
    }
}
for(let i of arr){
    if(i<min){
        min=i
    }
}
console.log(min, max)