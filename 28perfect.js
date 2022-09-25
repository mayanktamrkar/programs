let n = Number(prompt('enter the no'))
let sum = 0
for (let i = 1; i < n; i++) {
	if (n % i == 0) {
		sum = sum + i
	}
}
if (n == sum) {
	console.log("yes")
} else {
	console.log('no')
}
