let arr= []
let al=Number(prompt('enter array length'))
for(let i=0;i<al;i++){
    let a=Number(prompt('enter the element'))
    arr.push(a)
}


for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp

        }

    }

}
console.log(arr[arr.length-2])