
/*
 * Student name :Scarlett
 * Started date :
 * Ended   date :
 * 
 */


function window_calculation() {
    const ERROR = "No amount. 1 assumed";
    const MaxError = "Maximum height and width of window is 200cm."
    const MiniError = "Minimum height and width of window is 50cm."
    const MuchError = "No more than 10 equal size windows"
    let height=Number(document.getElementById("window_height").value);
    let width=Number(document.getElementById("window_width").value);
    let amount=Number(document.getElementById("window_amount").value);
    let area= (height/100)*(width/100)
    //**calculate error or correct */
    document.getElementById("error").innerHTML="";
    // document.getElementById("size").innerHTML="";
    glass1 = ((height-10)*(width-10))/10000;
    wood1 = (height-12)/100+width/100;

    let wood = wood1;
    var wood1fix= wood1.toFixed(2);
    let glass = glass1;
    var galss1fix=glass1.toFixed(2);
    
    //**error message */
    if (height > 200 || width >200) {
      document.getElementById("error").innerHTML=MaxError;
    }
    if (height <50 || width < 50) {
        document.getElementById("error").innerHTML=MiniError;
    }
    if (amount > 10) {
        document.getElementById("error").innerHTML=MuchError;
    }
    if (amount <= 0){
        document.getElementById("error").innerHTML=ERROR;   
    }

  //**the needed of wood n glass */
     document.getElementById("wood").innerHTML=wood1fix;
     document.getElementById("glass").innerHTML=galss1fix;
     document.getElementById("woods").innerHTML=wood1fix*amount;
     document.getElementById("glasses").innerHTML=galss1fix*amount;

    // **window size**//
    if (area < 0.5) {
     document.getElementById("size").innerHTML ="small window"
     }
     else if (area < 1.5) {
         document.getElementById("size").innerHTML ="medium window";
     }
     else if (area < 2.6 ) {
         document.getElementById("size").innerHTML ="large window";
     }
     else {
         document.getElementById("size").innerHTML ="huge window";
     }
}

