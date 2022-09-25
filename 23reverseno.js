let n=Number(prompt('enter the no.'))
let a=0
while(n){
    let b=n%10
    n=Math.floor(n/10)
    a=a*10+b

}
console.log(a)