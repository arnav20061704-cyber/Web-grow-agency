function sendWhatsApp() {
  event.preventDefault();

  let shop = document.getElementById("shop").value;
  let owner = document.getElementById("owner").value;
  let mobile = document.getElementById("mobile").value;
  let city = document.getElementById("city").value;
  let type = document.getElementById("type").value;

  let message = `New Website Booking:%0A
Shop: ${shop}%0A
Owner: ${owner}%0A
Mobile: ${mobile}%0A
City: ${city}%0A
Website: ${type}`;

  window.location.href =
   "https://wa.me/916306470595?text=" + message;

