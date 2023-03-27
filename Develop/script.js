$(function () {

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".description").each(function () {
    var key = $(this).parent().attr("id");
    var savedInput = localStorage.getItem(key);
    if (savedInput !== null) {
      $(this).val(savedInput);
    }
  });

  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val().trim();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, userInput);
  });

  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
});

console.log(dayjs().hour());