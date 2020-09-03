console.log("welcome")
function register(){
   console.log("welcome function")
   var name=document.getElementById("name").value
   console.log(name)

   console.log(name.length)
   if(name.length==""){
       document.getElementById("ename").innerHTML="pleace enter the value";
       document.getElementById("ename").style.color="white"
       
   }
   
   var password=document.getElementById("pwd").value
   var errorpwd=document.getElementById("epwd")
   var egender=document.getElementById("egen")
   var ecity=document.getElementById("ecity")
  //for validation of array type or predifined values we need follo anothe type of validation
  //docoment.formname.controlname.value

  console.log(document.registrationform.gender[0].checked)
  console.log(document.registrationform.gender[1].checked)

//printing the value of the gender in the console
console.log(document.registrationform.gender.value)

  if(document.registrationform.gender[0].checked==false&&
  document.registrationform.gender[1].checked==false)
  {
        egender.innerHTML="please select the gender"
        egender.style.color="white"
  }
  if (document.registrationform.city.value==0){
    ecity.innerHTML="please select the city"
    document.getElementById("ecity").style.color="white"

  }
  var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var email1 = document.getElementById("email");
    var eemail=document.getElementById("eemail")
    console.log(email1)//printing the email in console

    if (regexEmail.test(email1.value)) {
     
    } else {
        eemail.innerHTML="please enter the valid email"
        document.getElementById("eemail").style.color="white"

        }


   console.log(password)
   if(password.length==""){
       document.getElementById("epwd").innerHTML="pleace enter the password";
       document.getElementById("epwd").style.color="white"

   }
       else if( password.length<4){
        errorpwd.innerHTML="password is weak"
        document.getElementById("epwd").style.color="white"
       }
      


     

   
}