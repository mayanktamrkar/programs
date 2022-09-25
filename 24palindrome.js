let n = Number(prompt("enter the no."))
let t = n
let a = 0
while (t) {
	let b = t% 10
	t = Math.floor(t / 10)
	a = a * 10 + b
	console.log(a)

}
if (a == n) {
	console.log('palindrome')
} else {
	console.log('not palindrome')
}