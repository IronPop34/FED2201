function daysDifference() {  
   
    var dateI1 = document.getElementById("dateInput1").value;  
    var dateI2 = document.getElementById("dateInput2").value;  

 
    var date1 = new Date(dateI1);  
    var date2 = new Date(dateI2);  

  
    var time_difference = date2.getTime() - date1.getTime();  

     
    var result = time_difference / (1000 * 60 * 60 * 24);  

    return document.getElementById("result").innerHTML =    
         result + " days between both dates. ";  
               } 