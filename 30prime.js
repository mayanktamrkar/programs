let n=Number(prompt('enter the no'))
let flag=0
for(let i=2;i<n;i++){
    if(n%i==0){
        flag=1
		//console.log(i)
    }
}
if(flag==0){
    console.log('number is prime')
}else{
    console.log('number is not prime')
}
