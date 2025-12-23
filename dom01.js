let satya=()=>{
    let NewTag=document.querySelector('#okk')
    let Btn=document.querySelector('#btn')

    if(NewTag.style.display=="none"){
        NewTag.style.display="block"
        Btn.innerHTML="Hide"
    }
    else{

        NewTag.style.display="none"
        Btn.innerHTML="Show"

    }
}

// ####################  reverse method array


// let arr=[1,2,3,4,5]
// let newarr=[]
// for(let i=arr.length-1; i>=0;i--){
//     newarr.push(arr[i])
//      }

//console.log(newarr)