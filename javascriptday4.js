// java script validation

function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    } 
    
    // form validation

    function matchpass(){  
      var firstpassword=document.f1.password.value;  
      var secondpassword=document.f1.password2.value;  
        
      if(firstpassword==secondpassword){  
      return true;  
      }  
      else{  
      alert("password must be same!");  
      return false;  
      }  
      }  
 

      function validate(){ // form validation
        var num=document.myform.num.value;
        if (isNaN(num)){
          document.getElementById("numloc").innerHTML="Enter Numeric value only";
          return false;
        }else{
          return true;
          }
        }

        function validateemail()  // email validation
        {  
        var x=document.myform.email.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
          }  
        }  

        //Click Events
        function clickevent()  
        {  
            document.write("This is JavaTpoint");  
        }  

        function fun() {  // on click events
          alert("Welcome to the javaTpoint.com");
        }

        document.getElementById("para").onclick = function() {
          fun()
          };
          function fun() {
          document.getElementById("para").innerHTML = "Welcome to the javaTpoint.com";
          document.getElementsByTagName("body")[0].style.color = "blue";
          document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
          document.getElementsByTagName("body")[0].style.fontSize = "25px";
          document.getElementById("para").style.border = "4px solid red"; 
          }