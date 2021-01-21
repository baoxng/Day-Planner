
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
    var saveBtn = $(".savebtn");
    var time= moment();

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
}

//run function
scheduleEvent();

