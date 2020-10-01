const calcForm = document.forms[0];

function timeDiff(startTime, endTime) {
  var start =
    parseFloat(startTime.split(":")[0]) +
    parseFloat(startTime.split(":")[1] / 60);
  var end =
    parseFloat(endTime.split(":")[0]) + parseFloat(endTime.split(":")[1] / 60);

  if (isNaN(start)) {
    return 0;
  } else if (end < start) {
    return 24 - start + end;
  } else {
    return end - start;
  }
}

calcForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  var workTime = timeDiff(
    document.getElementById("start-time").value,
    document.getElementById("end-time").value
  );
  var lunchTime = timeDiff(
    document.getElementById("lunch-start-time").value,
    document.getElementById("lunch-end-time").value
  );
};


