

function check() {

        let idNumber = document.getElementById("idcode").value;
        
        if (idNumber.length < 11 || idNumber.length > 11) 
        {
            document.getElementById("error").innerHTML = "The Id number needs to be 11 charactor. "
            return;
        }
        
        var firstSixNumber = idNumber.substring(0, 6);
        var checkNumber = idNumber.substring(10, 11);
        
        if (isNaN(firstSixNumber)) 
        {
            document.getElementById("error").innerHTML = "ID code must have 6 number at first"
            return;
        }
        
        var sevenNumber = idNumber.substring(6, 7);
        var bornInCentry = "";
        if (sevenNumber === "-"|| sevenNumber=== "+" || sevenNumber=== "A" )
        {
            
            switch(sevenNumber)
            {
                case "-":
                    bornInCentry = "1900-1999";
                    break;
                case "+":
                    bornInCentry = "1800-1899";
                    break;
                case "A":
                    bornInCentry = "2000-2099"
                    break;
            }
            document.getElementById("error").innerHTML =  "" ;
        }
        else
        {
            document.getElementById("error").innerHTML = "The century mark must be +, - or A."
            return;
        }

        let lasThreeNumber = idNumber.substring(7, 10);
        
        if (isNaN(lasThreeNumber)) 
        {
            document.getElementById("error").innerHTML = "Order number must be a number."
            return;
        }

        let errorMsg = checkDate(firstSixNumber, sevenNumber);

        if (errorMsg) {
            document.getElementById("error").innerHTML = errorMsg;
        }

        let personAge = calculateAge(firstSixNumber, sevenNumber);
        let sexNumber = findSex  (parseInt(lasThreeNumber)) ;
        let calculatedCheckMark = calculateCheckMark (firstSixNumber, lasThreeNumber) ;
        if (checkNumber == calculatedCheckMark) 
        {
            document.getElementById("error").innerHTML = "Identification code is right.";
        }
        else 
        {
            document.getElementById("error").innerHTML = "Identification code is not right. Calculated control character is " + calculatedCheckMark;
        }
        
        document.getElementById("sex").innerHTML= sexNumber;
        document.getElementById("age").innerHTML= personAge;
    }
    
    function checkDate (idNumber, century) 
    {
        let dayNumber = parseInt(idNumber.substring(0, 2));
        let monthNumber = parseInt(idNumber.substring(2, 4));
        let yearNumber = parseInt(idNumber.substring(4, 6));
        let current_year = new Date().getFullYear();

        if (dayNumber <0 || dayNumber > 31) 
        {
            return "Day must be 1 ... 31.";
        }
        if (monthNumber < 0 || monthNumber > 12) 
        {

            return "Month must be 1 ... 12.";
        }
        if (century === "A") 
        {
            let compareYear = yearNumber + 2000;
            if (compareYear > current_year)
                return "Year is too big.";
        }

        return
    }

    function calculateAge(idNumber, century) 
    {
        let current_year = new Date().getFullYear();
        let yearNumber = parseInt(idNumber.substring(4, 6));
        if (century === "-")
        {
           yearNumber = yearNumber + 1900;
        }
        if (century === "+")
        {

            yearNumber = yearNumber + 1800;
        }
        if (century === "A")
        {
           
            yearNumber = yearNumber + 2000;
        }
         return current_year - yearNumber;
    }

    function findSex (lasThreeNumber) 
    {
        if (lasThreeNumber % 2 ===000 )
        {
            return "female"
        }
        else
        {
            return "male"
        }

    }

    function calculateCheckMark (firstSixNumber, lasThreeNumber)
    {
        let checkMarks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        let idCode = firstSixNumber + lasThreeNumber;
        let checkNumber = idCode % 31;
        return checkMarks.charAt(checkNumber);

    }


