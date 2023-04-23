// Client facing scripts here
$(document).ready(() => {

  $('.reg-form').on('submit', function(e) {
    e.preventDefault();

    // Send a POST request to the backend
    $.ajax({
      url: '/register',
      method: 'POST',
      data: $(this).serialize(),
      success: function(response) {

        alert(response);
        window.location.href = "http://localhost:8080/index";

      },
      error: function(error) {

        alert(error.responseText);
      }
    });
  });

  ////WELCOME PAGE
  // HIDE REGISTER AND LOGIN FORMS
  $(".sig-form").hide();
  $(".reg-form").hide();
  $(".taskForm").hide();
  $(".update").hide();
});

// SLIDE TOGGLES FOR REGISTER AND LOGIN
$(".sig").on("click", () => {
  $(".sig-form").slideDown(600);
  $(".reg-form").hide();
});
$(".reg").on("click", () => {
  $(".reg-form").slideDown(600);
  $(".sig-form").hide();
});

////HOME PAGE
// SLIDE TOGGLE FOR NEW TASK INPUT
$("#new-task-plus").on("click", () => {
  $(".taskForm").slideToggle(400);
});


// SLIDE TOGGLE FOR NEW TASK FORM
$("#plusSign").on("click", () => {
  if ($(".update").is(":hidden")) {
    $(".taskForm").slideToggle(400);
    $("#pushPlus").slideToggle(400);
  }
  if ($(".update").is(":visible")) {
    $(".taskForm").slideToggle(400);
    $(".update").slideUp();
  }
});

// SLIDE TOGGLE FOR UPDATE PROFILE
$("#updateBt").on("click", () => {
  if ($(".update").is(":hidden")) {
    $("#pushPlus").slideUp();
    $(".taskForm").slideUp();
    $(".update").slideDown(400);
  }
});

// RESET NEW TASK FORM WHEN UPDATED PROFILE
$(".sub").on("submit", () => {
  $("textarea").empty();
  $(".update").hide();
});
