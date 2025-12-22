


let setdata=()=>{
    //let name="Sid"
    // let mydata={
    //     name:"sonu",
    //     age:19,
    //     city:"bhopal"
    // }
   // localStorage.setItem("Mydata",JSON strigify)

    localStorage.setItem("Myname","Sonu")//name
    localStorage.setItem("Myage",19)
    location.reload()

}

let show=document.querySelector("#okk") 

show.innerHTML=localStorage.getItem("Myname")




let remdata=()=>{
    localStorage.removeItem("Myname")
    location.reload()
}