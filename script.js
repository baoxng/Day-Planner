
//use moment to get current date for header(works!)
function dateHeader(){
    var currentDateHeader= moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDateHeader);
    
    $(".time").each(function(){
        var id= $(this).attr("id");
        //get stored user-input and populate it to page.
        var userInput = localStorage.getItem(id);
        if (userInput !== null){
            $(this).children(".user-input").val(userInput);
        }
    })

}

dateHeader();

//display the current hour of the day and time (works!)
    var currentHour = moment().format('LT');
    var currentHourInt = parseInt(currentHour);
    console.log(currentHourInt);

//Variables
    var saveBtn = $(".savebtn");

// give data attribute to the following elements
//follow by the moment for each
var hour1= $("#9hr")
var hour2= $("#10hr")
var hour3= $("#11hr")
var hour4= $("#12hr")
var hour5= $("#1hr")
var hour6= $("#2hr")
var hour7= $("#3hr")
var hour8= $("#4hr")
var hour9= $("#5hr")
var hour10= $("#6hr")

saveBtn.on("click", function(){
    var hour= $(this).parent().attr("id");
    var userInput= $(this).siblings(".user-input").val();
    localStorage.setItem(hour, userInput);
});

//set class of past/present/future to planner

function scheduleEvent(){
    hour =time.hours();
    $("")
}


/*

$(document).ready(function(){

plans();

//make a class past, present or future

for( var i = 0; i <= 12; i++){
    var inputHour = $("#" + i + "row").attr("data-time");
    var inputHourInt = parseInt(inputHour);

    if (currentHourInt === inputHourInt){
        $("#" + i + "row").addClass("present");
    }
    if (currentHourInt > inputHourInt){
        $("#" + i + "row").addClass("past");
    }
    if (currentHourInt < inputHourInt){
        $("#" + i + "row").addClass("future");
    }
}

//on click button event
saveLocalBtn.on("click", function(){
    var hours = $(this).attr("data-hour");
    var dailyPlan = $("#" + hours + "row").val(); //user input for daily plan
    localStorage.setItem(hours, dailyPlan);
});

// need to get the stored user input
function plans(){
    for(var j=0; j <= 12; j++){
        $("#" + j + "row").val(localStorage.getItem(j));
    }
}
});

*/


