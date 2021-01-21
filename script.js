

//Function to make new columns



//use moment to get current date for header
function dateHeader(){
    var currentDateHeader= moment().format("MMMM Do YYYY");
    $("#currentDay").append(currentDateHeader);
}

dateHeader();

