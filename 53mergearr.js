let arr1=[10,40,60,70]
let arr2=[20,30,50,65,25]
let arr3=[]
let i=0,j=0,k=0

while(i<arr1.length && j<arr2.length){
    if(arr1[i]>arr2[j])
{
    arr3[k]=arr1[i]
    k++
    i++
}else{
    arr3[k]=arr2[j]
    k++
    j++
}


}

console.log(arr3)
