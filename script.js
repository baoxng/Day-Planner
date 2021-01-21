
//use moment to get current date for header(works!)
function dateHeader(){
    var currentDateHeader= moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDateHeader);
}

dateHeader();

//display the current hour of the day and time (works!)
    var currentHour = moment().format('HH');
    var currentHourInt = parseInt(currentHour);

//Variables
    var saveLocalBtn = $(".localbtn");

// give data attribute to the following elements
//follow by the moment for each
$("#9hr").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10hr").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11hr").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12hr").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1hr").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2hr").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3hr").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4hr").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5hr").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
$("#6hr").attr("data-time", moment("6:00 pm", "h:mm a").format("HH"));

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