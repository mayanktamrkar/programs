let str= prompt('enter string')
let bag=''
for(let i=str.length-1;i>=0;i--)
{
  bag=bag+str[i]
}
if(str==bag){
	console.log('String is palindrome')
	
}else{
	console.log('string is not palindrome')
}
