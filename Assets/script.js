// add event listener on save button. 

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
  
        localStorage.setItem(time, text);
    })
  });

//  Applies the past, present, or future class to each time block by comparing the id to the current hour. 

function timeIndicator() {
    let currentTime = dayjs().hour();

    $(".time-block").each(function () {
        let timeBlockEl = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlockEl > currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        else if (timeBlockEl === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");

        }
    })
}

// Gets user input that was saved in local storage and sets the values of the textarea elements. 

$("#9.description").val(localStorage.getItem("nineHour"));
$("#10.description").val(localStorage.getItem("tenHour"));
$("#11.description").val(localStorage.getItem("elevenHour"));
$("#12.description").val(localStorage.getItem("twelveHour"));
$("#13.description").val(localStorage.getItem("oneHour"));
$("#14.description").val(localStorage.getItem("twoHour"));
$("#15.description").val(localStorage.getItem("threeHour"));
$("#16.description").val(localStorage.getItem("fourHour"));
$("#17.description").val(localStorage.getItem("fiveHour"));
$("#18.description").val(localStorage.getItem("sixHour"));

timeIndicator();

// code to display current date in the header

let today = dayjs().format('MMM D, YYYY, dddd, hh:mm a');
$('#currentDay').text("Today is " + today)

// I seem to be missing some functionality. The past, present, future feature does not seem work properly.