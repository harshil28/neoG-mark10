var ba = document.querySelector("#bill-amount");
var cg = document.querySelector("#cash-given");
var errorMessage = document.querySelector("#error-message");
var checkButton = document.querySelector("#check-button");
var notesCount = document.querySelectorAll(".notes-count");

var notes = [2000, 500, 200, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmount() {
  var billAmount = Number(ba.value);
  var cashGiven = Number(cg.value);
  hideMessage();
  if (billAmount > 0) {
    console.log(billAmount);
    console.log(cashGiven);
    if (cashGiven >= billAmount) {
      var amountToBeReturned = cashGiven - billAmount;
      calculation(amountToBeReturned);
    } else {
      showMessage("Dish dho lo bhai..");
    }
  } else {
    showMessage("Please enter value greater than 0");
  }
});

function calculation(amountToBeReturned) {
  for (var i = 0; i < notes.length; i++) {
    var noOfNotes = Math.trunc(amountToBeReturned / notes[i]);
    // showMessage(noOfNotes);
    amountToBeReturned %= notes[i];
    notesCount[i].innerText = noOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}
