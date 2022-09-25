let c=Number(prompt('enter the no'))
let n=c
let result=0
while(n){
	let a=n%10
	n=Math.floor(n/10)
	result=result+a*a*a
	
}
if(result==c){
	console.log("number is armstrong")
	
}else{
	console.log('number is not armstrong')
}
