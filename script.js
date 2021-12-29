function compute(){
    /* Create a variable called 'principal' */
        var principal = document.getElementById("principal").value;
    /*  create alert if principal is 0 or a negative number*/
        if (principal<=0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        }
        /* Create a variable called 'rate' */
        var rate = document.getElementById("rate").value;
        /* Create a variable called 'years' */
        var years = document.getElementById("years").value;
        /* variable for result of principal*years*rate/100*/
        var interest = principal * years * rate /100;
        /* convert the 'No of Years' into the actual year in the future.*/
        var year = new Date().getFullYear()+parseInt(years);
        var result = document.getElementById("result");
        result.innerHTML="If you deposit " + "<span class='highlight'>" + principal + "</span>." + ",<br/>" + "at an interest rate of" + "<span class='highlight'>" + rate + "</span>."  + ".<br/>" +"You will receive an amount of" + "<span class='highlight'>" + interest + "</span>" + ",<br/>" + "in the year" + "<span class='highlight'>" + year
    }
    
    /* function that reads the value of the range slider and displays it the */
    
    function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}