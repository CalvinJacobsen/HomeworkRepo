var $currentDay = $("currentDay");
var $timeRows = $(".time-block");
var $scheduleArea = $(".schedule");
var $textbox = $(".textbox");

var toDoItems = [];
var currentHour = moment().format("H");
var currentDate = moment().format("dddd, MMMM Do");

function initializeSchedule() {






}

function renderColorTime() {

    $textbox.each(function () {
        //get time id for each row
        var blockHour = parseInt($(this).attr("hour-id"));
        console.log(blockHour);

        //sets appropriate colors for each cell
        if (blockHour == currentHour) {
            $(this).addClass("present").removeClass("past future");
        }
        if (blockHour < currentHour) {
            $(this).addClass("past").removeClass("present future");
        }
        if (blockHour > currentHour){
            $(this).addClass("future").removeClass("past present");
        }
    
    });
};



renderColorTime();
initializeSchedule();