

//Function to make new columns



//use moment to get current date for header(works!)
function dateHeader(){
    var currentDateHeader= moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentDateHeader);
}

dateHeader();

//display the current hour of the day (works!)

function getCurrentTime(){
    var currentTime = moment().format('H');
    console.log(currentTime);
}
getCurrentTime();

//make new row from 9am-6pm




