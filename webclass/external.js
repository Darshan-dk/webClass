
        console.log("welcome to javascript")

        //how to declare the variable and initialization
        var a;
        console.log(a)

        var a=20;
        console.log(a)
        //we can declare the variable multiple times
        var a=50;
        console.log(a)

        //type of -determine the data Type

        var b="darshan"
        console.log(typeof(b))

        //loop

        for(var i=0;i<5;i++)
        console.log("for loop"+i)

        //function

        function basic()
        {
            console.log("basic functiom")
        }
        basic()    //calling the function

        //returning the values from function
        function basic()
        {
           return("basic functiom")
        }
        console.log(  basic())

        //pasiing the values to the function
         function add(a,b){
             console.log(a+b)
         }
         add(10,50)

        var res= function sub(a,b){   //another way of calling the function
             console.log(a-b)
         }
         res(10,50)

         //the popup box in javascript
        //  alert("alert box")
        //  confirm("confirm")
        //  prompt("promt")

        // var res=confirm("do you want welcome message ")
        // if(res)
        //      alert("succesfull")
        //  else
        //      alert("unable to delete")    



             document.write("welcome to javascript")
             document.write("<h1>welcome to javascript</h1>")

        var anonymous= function()    {
             console.log("anonymous fumction calling")
         }

          anonymous();
          function submit(num1 ,num2){
              console.log("submit is working")
              var num1=parseInt(document.getElementById("n1").value)
              var num2=parseInt(document.getElementById("n2").value)
            //   console.log(num1)
            //   document.getElementById("span").innerHTML=num1
            
              document.getElementById("span1").innerHTML= (`the sum is${num1 + num2}`)
              //appling the css property to the js
              document.getElementById("span1").style.fontSize="30px"
              document.getElementById("span1").style.color="blue"
          }
      

          function multiply(a,b){
              
          var num3= parseInt(document.getElementById("n3").value)
          var num4= parseInt(document.getElementById("n4").value)
              document.getElementById("span2").innerHTML=(`the pdt is${num3 * num4}`)
              document.getElementById("span2").style.fontSize="30px"
              document.getElementById("span2").style.color="blue"
          }
        function displaydate(){
            document.getElementById("date").innerHTML=Date();
            document.getElementsByClassName("mydate")[0].innerHTML=Date();
        }