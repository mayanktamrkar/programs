let arr=[10,20,13,40,12,7,14,3]
let arrodd=[]
let arreven=[]
for(i of arr){
    if(i%2==0){
        arreven.push(i)
    }
    else{
        arrodd.push(i)
    }
}
console.log(arrodd,arreven)