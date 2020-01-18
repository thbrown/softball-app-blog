function initCommentSubmitActions() {
  $(".js-form").removeAttr('onsubmit').submit(function(e) {
    e.preventDefault();
    var form = this;

    $(form).addClass("form--loading");

    $.ajax({
      type: $(this).attr("method"),
      url: $(this).attr("action"),
      data: $(this).serialize(),
      contentType: "application/x-www-form-urlencoded",
      success: function(data) {
        showModal(
          "Data submitted",
          "Thanks for your comment! It will show on the site once it has been approved."
        );
        $(form).removeClass("form--loading");
        console.log(form);
        form.reset();
      },
      error: function(err) {
        console.log(err);
        showModal("Error", "Sorry, there was an error with the submission!");
        $(form).removeClass("form--loading");
      }
    });

    return false;
  });

  $(".js-close-modal").click(function() {
    $("body").removeClass("show-modal");
  });

  function showModal(title, message) {
    $(".js-modal-title").text(title);
    $(".js-modal-text").html(message);

    $("body").addClass("show-modal");
  }
}

function init() {
  //var $comments = $(".js-comments");
  initCommentSubmitActions();

  // Background
  particlesJS.load('particles-js', '/json/particles.json', function() {});

  // Link the title to the home page
  var titleLink = document.getElementById("project_title");
  titleLink.onclick = function() {
    document.location.href = "/";
  };

  // Convert timestamps to local time
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let dates = document.getElementsByClassName("date");
  for (let i = 0; i < dates.length; i++) {
    var jsDate = new Date(parseInt(dates[i].innerHTML));
    var ampm = jsDate.getHours() >= 12 ? "pm" : "am";
    dates[i].innerHTML =
      monthNames[jsDate.getMonth()] +
      " " +
      jsDate.getDate() +
      ", " +
      jsDate.getFullYear() +
      ", " +
      formatAMPM(jsDate);
  }
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
}