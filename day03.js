 //BOM-> Browser object model
//prompt-> input 
//aleart-> message show hota hai
 
 
//  function java(){
 //1st priority string
   var a=4
    var b='5'
    console.log(a+b);//45
    console.log(a-b);//-1

   // var a='4'
   // var b= null
    // console.log(a+b);//4null

//2nd priority number
   //var a=6
   //var b=true //1
    //console.log(a+b);// 7}
//java()

function aartu(){
   //BOM=> Brower Object model (alert(),prompt())

   // window.alert("hello i am aarti")   //message alert karne ke liye use kiya jata hai

    //var userans= window.prompt("how are you")     // user se input lene ke liye
   // console.log(userans) // user ka output dekhna



   //var userans= window.prompt("WHat is your age")
  // if(userans>=18){
  // window.alert("you can vote") }
  // else{
   // window.alert("you can't vote")}


   var userans= window.prompt("number")
   if(userans<0){
   window.alert(-(userans)) }
   else{
   window.alert(userans)}


}
aartu()