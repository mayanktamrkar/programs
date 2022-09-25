let str = prompt('enter the str')
for (let i in str) {
	console.log(str.charCodeAt(i), "ascii of-->", str[i])
}