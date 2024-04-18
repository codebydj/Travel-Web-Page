document
  .getElementById("subscriptionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var Email = document.getElementById("EmailInput").value;
    if (Email.trim() === "") {
      alert("Invalid input");
    } else {
      alert("Subscribed.");
    }
  });


