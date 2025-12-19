// 4. Prompt for a number and alert whether it is positive,negative or zerro...............

      function salu(){
     var ans= prompt("enter number")
    if(ans>0){
     alert("Positive")
       }
     else if(ans<0)
     {
   alert("Negative")
       }
      else{
     alert('Zero')}
     }
     salu()

//**************************************************************** */
//1. Ask the user for their age using prompt() and show an alert'You can vote' if age>=18 else 'Too young'.
     function ram(){
     var userans= window.prompt("WHat is your age")
      if(userans>=18){
      window.alert("You can vote") 
     }
      else{
      window.alert("Too young")
     } }
     ram()
//****************************************************************  */

//2. Prompt the user for a password and check it against a hardcoded value; alert' Access granted or
//'Access denied'
    
    function sita(){
    var user_pas= window.prompt("enter your password")
     if(user_pas==1234){
      window.alert("Access granted") 
     }
      else{
           window.alert("Access denied")
     }
     }
//**************************************************************** */

//3. Create a grade checker.prompt for marks(0-100)and use if-else-if to alert Grade A/B/C/F.
   
    function puja(){
    var user_mark= window.prompt("enter your marks(0-100)")
     if(user_mark >= 90){
     window.alert("Grade A")
      }
    else if(user_mark >=80){
     window.alert("Grade B")
     }
    else if(user_mark >=60){
             window.alert("Grade C")
      }
     else if(user_mark >=45){
     window.alert("Grade D")
     }
     else{
    window.alert("fail")
      }
    }













