document.addEventListener('DOMContentLoaded', function(){
//Declaring Array
var paycheckArray = [];

//Declaring Input Variables
var paycheck = document.getElementById('income');
var radioButtons = document.getElementsByName('payRadio');

//Declaring Output Variables
var infoEntered = document.getElementById('infoEntered');
var avgCheck = document.getElementById('avgCheck');
var payFrequency = document.getElementById('payFrequency');
var otherCalc = document.getElementById('otherCalc');
var highestLowest = document.getElementById('highestLowest');

//Declaring Buttons
var addButton = document.getElementById('add');
var calcButton = document.getElementById('calculate');
var startOverButton = document.getElementById('startOver');

//PAY FREQUENCY
radioButtons.forEach(radio => { //Displays a message depending on which radio is clicked
    radio.addEventListener('click', () => {
        if(radio.id === 'weeklyPay'){
            payFrequency.innerHTML = "You get paid weekly.<br><br><h4 style='text-decoration: underline';>Your Paychecks So Far:</h4>";
        }
        else if(radio.id === 'biweeklyPay'){
            payFrequency.innerHTML = "You get paid bi-weekly.<br><br><h4 style='text-decoration: underline';>Your Paychecks So Far:</h4>";
        }
        else if(radio.id === 'monthlyPay'){
            payFrequency.innerHTML = "You get paid monthly.<br><br><h4 style='text-decoration: underline';>Your Paychecks So Far:</h4>";
        }
    });
});

//ADD
function addPaycheck(){
    var paycheckAmount = paycheck.value.trim();

    if(paycheck.trim === ''){ //Throws alert if field is empty
        alert("Paycheck amount cannot be empty");

        paycheck.value = '';
        paycheckArray.pop(); //Clears field and removes last array element
    }
    else if(isNaN(paycheckAmount)){ //Throws alert if paycheck is not numeric
        alert("Paycheck amount must be a valid numeric value.");

        paycheck.value = '';
        paycheckArray.pop();
    }
    else{
        var radioChecked = false;
        radioButtons.forEach(radio => {
            if(radio.checked){
                radioChecked = true;
            }
        });
    }
    
    if(!radioChecked){ //Throws alert if no pay frequency has been selected
        alert("Please select a pay frequency before adding paycheck values.");

        paycheck.value = '';
        paycheckArray.pop();
        }
        else{ //Adds array element as long as no errors are found
            paycheckArray.push(parseFloat(paycheckAmount));
            paycheck.value = '';
        } 
    }


function displayPaychecks(){//Displays the paycheck values to the HTML page
    var listHTML = '<ul>';
    for (var i = 0; i < paycheckArray.length; i++){
        listHTML += '<h4>$' + paycheckArray[i] + '</h4>';
    }
    listHTML += '</ul>'
    console.log('Paycheck:', listHTML); //For debugging
    infoEntered.innerHTML = listHTML;
}

function AddButtonClick(){
    addPaycheck();
    displayPaychecks();
}
addButton.addEventListener('click', AddButtonClick);

//CALCULATE
function calculateSum(){
    var sum = 0;
    for (var i = 0; i < paycheckArray.length; i++){
        sum += paycheckArray[i];
    } //Find the sum of all paychecks

    return sum;
}

function calculateAverage(){
    var average = calculateSum() / paycheckArray.length;

    return average //Divide the sum by the number of paychecks
}

function displayAverages(){//Display the average of all paychecks to the HTML page
    var selectedRadio = null; 
    var daily = '';
    var weekly = '';
    var biweekly = '';
    var monthly = '';
    var annual = '';

    for (var i = 0; i < radioButtons.length; i++){ //Find the selected radio
        if (radioButtons[i].checked){
            selectedRadio = radioButtons[i];
            break;
        }
    }

    if (selectedRadio){ //Determine the value of "frequency"
        if(selectedRadio.id === 'weeklyPay'){
            daily = calculateAverage() / 7;
            weekly = calculateAverage() * 1;
            biweekly = calculateAverage() * 2.1725;
            monthly = calculateAverage() * 4.345;
            annual = calculateAverage() * 52;
        }
        else if(selectedRadio.id === 'biweeklyPay'){
            daily = calculateAverage() / 14;
            weekly = calculateAverage() * 0.5;
            biweekly = calculateAverage() * 1;
            monthly = calculateAverage() * 2.1725;
            annual = calculateAverage() * 26;
        }
        else if(selectedRadio.id === 'monthlyPay'){
            daily = calculateAverage() / 30.437;
            weekly = calculateAverage() * 0.2301496;
            biweekly = calculateAverage() * 0.46029919;
            monthly = calculateAverage() * 1;
            annual = calculateAverage() * 12;
        }
    }
    
    //Display average based on the user's pay frequency
    avgCheck.innerHTML = "<h4>Average Paycheck: $" + calculateAverage().toFixed(2) + "</h4>";
    otherCalc.innerHTML="<h4>Daily: $" + daily.toFixed(2) + "<br>Weekly: $" + weekly.toFixed(2) + "<br>Bi-Weekly: $" + biweekly.toFixed(2) + "<br>Monthly: $" + monthly.toFixed(2) + "<br>Annual: $" + annual.toFixed(2) + "</h4>";
} 

function highestLowestDisplay(){
    var highest = Math.max(...paycheckArray);
    var lowest = Math.min(...paycheckArray);

    highestLowest.innerHTML = "Highest Paycheck to Date: $" + highest.toFixed(2) + "<br>" + "Lowest Paycheck to Date: $" + lowest.toFixed(2);
}

function CalculateButtonClick(){
    calculateSum();
    calculateAverage();
    displayAverages();
    highestLowestDisplay();
}
calcButton.addEventListener('click', CalculateButtonClick);

//START OVER
function confirmStartOver(){
    var confirmed = window.confirm("Are you sure you want to start over? Your information cannot be recovered.");
        if(confirmed){
            location.reload();
        }
}
function StartOverButtonClick(){
    confirmStartOver();
}    
startOverButton.addEventListener('click', StartOverButtonClick);

});