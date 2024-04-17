function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    document.getElementById("name").focus();
    return;
  }

  if (!message) {
    document.getElementById("message").focus();
    return;
  }

  var whatsappUrl = `https://wa.me/5521971422068?text=${encodeURIComponent(
    "Olá me chamo " + name + " e minha dúvida é: " + message
  )}`;

  window.open(whatsappUrl, "_blank");
}
