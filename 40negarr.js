let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}

for(let i of arr){
    if(i<0){
        console.log(i)
    }
}