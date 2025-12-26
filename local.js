let formValidate=()=>{


    let Name =document.querySelector('#name').value
    let Num =document.querySelector('#number').value
    let Email =document.querySelector('#email').value
    let Pass =document.querySelector('#pass').value
    let Cpass =document.querySelector('#cpass').value


    let Errname=document.querySelector('#errname')
    let ErrNum=document.querySelector('#errnumber')
    let ErrEmail=document.querySelector('#erremail')
    let ErrPass=document.querySelector('#errpass')
    let ErrCpass=document.querySelector('#errcpass')


    if(Name==""){
        Errname.innerHTML="please enter name"
        Errname.style.color="red"

        return false
    }
    else if(Num==""){
        Errname.innerHTML="please enter number"
        Errname.style.color="red"

        return false
    }
    else if(Email==""){
        Errname.innerHTML="please enter email"
        Errname.style.color="red"

        return false
    }
    else if(Pass==""){
        Errname.innerHTML="please enter pass"
        Errname.style.color="red"

        return false
    }
    else if(Cpass==""){
        Errname.innerHTML="please enter cpass"
        Errname.style.color="red"

        return false
    }


    if(Num.length !=10){
        ErrNum.innerHTML="please enter valid number ";
        return false;
    }
    else if(isNaN(Num)){
        ErrNum.innerHTML="please enter number only";
        return false;
    }
    if(!(Email.includes("@") && Email.includes(".com"))){
        ErrEmail.innerHTML="please enter valid email";
        return false;
    }
    if(!(Pass.match(/[1234567890]/) &&
        Pass.match(/[!@#$%^&*]/) &&
        Pass.match(/[A-Z]/))) {
            ErrPass.innerHTML="please enter strong password";
        }



    localStorage.setItem("name",Name)
    localStorage.setItem("number",Num)
    localStorage.setItem("email",Email)
    localStorage.setItem("password",Pass)


    location.href="login.html"
    return false
    
   //trim()

  //isNan=>alphavate=> true (answer true or false)

 //includes  !=> true=false, false=true
 
 //match /[]/ 

  
}

let Login=()=>{
    let LoginName=document.querySelector("#loginname").value
   let LoginPass =document.querySelector("#loginpass").value
   
   let Localname=localStorage.getItem("name")
   let LocalPass=localStorage.getItem("password")

   if(Localname==LoginName && LocalPass==LoginPass){
    location.href="home.html"
    return false
   }
   else{
    alert("invalid Credentials")
        return false
    
   }
}