var $timeRows = $(".time-block");
var $scheduleArea = $(".schedule");
var $textbox = $(".textbox");

//i looked this one up, for moment 
var currentHour = moment().format("H");
var currentDate = moment().format("dddd, MMMM Do");

//updating current date onto page
console.log(currentDate);
$(".currentDay").append(currentDate);

//function for rendering te time
function renderColorTime() {

    $textbox.each(function () {
        //get time id for each row
        var blockHour = parseInt($(this).attr("hour-id"));
        console.log(blockHour);

        //sets appropriate colors for each cell
        if (blockHour == currentHour) {
            $(this).addClass("present")
            $(this).removeClass("past future");
        }
        if (blockHour < currentHour) {
            $(this).addClass("past")
            $(this).removeClass("present future");
        }
        if (blockHour > currentHour) {
            $(this).addClass("future")
            $(this).removeClass("past present");
        }

    });
};

//creating object
toDoObjArray = [];

//putting each object that we have so far into our object
function objectSchedule() {

    $textbox.each(function () {
        var blockHour = parseInt($(this).attr("hour-id"));

        var toDoObjects = {
            time: blockHour,
            text: ""
        }

        //this function puts our objects into the array we made
        toDoObjArray.push(toDoObjects);
    });
    localStorage.setItem("todos", JSON.stringify(toDoObjArray));
}

//saves the data locally
function localStorage() {

    //see which item we need to update based on the hour of the button clicked matching
    for (var j = 0; j < toDoObjArray.length; j++) {
        if (toDoObjArray[j].hour == hourToUpdate) {
            //set its text to what was added to textarea
            toDoObjArray[j].text = itemToAdd;
        }
    }
    localStorage.setItem("todos", JSON.stringify(toDoObjArray));
    renderSchedule();
}

//gets our stuff READY and runs Necessary functions!
$(document).ready(function () {
    //does the color thing
    renderColorTime();
    //sets our d/te for us
    $("#currentDay").text(currentDate);

    //checks to see if the local storage is Empty!@
    if (!localStorage.getItem("todos")) {
        objectSchedule()
    }
    
});