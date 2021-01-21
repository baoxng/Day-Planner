
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
// running header and local storage
dateHeader();

//Variables
    var saveBtn = $(".saveBtn");
    var time = moment();

// give data attribute to the following elements
//follow by the moment for each
var hour9= $("#9hr")
var hour10= $("#10hr")
var hour11= $("#11hr")
var hour12= $("#12hr")
var hour1= $("#13hr")
var hour2= $("#14hr")
var hour3= $("#15hr")
var hour4= $("#16hr")
var hour5= $("#17hr")
var hour6= $("#18hr")

saveBtn.on("click", function(){
    var hour= $(this).parent().attr("id");
    var userInput= $(this).siblings(".user-input").val();
    localStorage.setItem(hour, userInput);
});

//set class of past/present/future to planner

function scheduleEvent(){
    var hour = time.hour();
    $(".time").each(function(){
        var currentHour= parseInt($(this).attr("id"));

        if (currentHour === hour){
            $(this).addClass("present");
        }
        else if(currentHour < hour){
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }
    })
    console.log(hour);
}

//run function
scheduleEvent();

