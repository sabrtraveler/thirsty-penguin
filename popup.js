let selectElement = document.querySelector('[name="dropdown"]');

// When it changes, call the function setReminder with the value of the selector
selectElement.addEventListener("change", (event) =>
  setReminder(event.target.value)
);

// Our workhorse method
function setReminder(numberOfHours) {
  if (numberOfHours == 1) {
    setTimeout(() => alert("1 hour is up"), 500);
    // start(event); // Youre passing in the whole event here which may
  } else if (numberOfHours == 3) {
    setTimeout(() => alert("3 hour is up"), 1000);
  } else if (numberOfHours == 5) {
    setTimeout(() => alert("5 hour is up"), 20000);
  }
}

// SO HOW DO WE CALL THE DANG METHOD FROM THE START???
// EASY... WE JUST CALL THE DANG THING

setReminder(selectElement.value);
