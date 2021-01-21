
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





