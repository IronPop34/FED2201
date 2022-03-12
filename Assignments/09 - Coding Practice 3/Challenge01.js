function countingDown() {  
   
    var date1 = new Date().getTime();  
    var date2 = new Date("Jan 1, 2030").getTime();  

    var time_difference = date2 - date1;  
    
    var result = Math.round(time_difference/ (1000 * 60 * 60 * 24));
        
    return document.getElementById("result").innerHTML =    
         result + " days until Jan 1, 2030.";  
               } 