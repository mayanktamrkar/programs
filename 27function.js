let a=String(prompt('enter the name '))
let b=a.indexOf(' ')

if(a.length<=20){
	console.log(a)
    

}else{
	let c=a.substr(0,b)
    console.log(c)
}