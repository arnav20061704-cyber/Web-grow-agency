
<script>
function sendDetails(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let plan = document.getElementById("plan").value;

  let message = 
    "Website Booking Details%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Email: " + email + "%0A" +
    "Selected Plan: " + plan;

  // Gmail
  window.open(
    "mailto:arnav20061704@gmail.com?subject=Website Booking&body=" + message
  );

  // WhatsApp
  window.open(
    "https://wa.me/91" + phone + "?text=" + message,
    "_blank"
  );
}
</script>
