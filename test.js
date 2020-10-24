
function myFunction(x){
        
    if ( ((x%100)!=0) && ( ((x%4)==0) || ((x%400)==0) ) ){
        text = "Leap Year";
    }
    else{
        text= "Not a Leap Year";
    }
    document.getElementById("demo").innerHTML=text;

}