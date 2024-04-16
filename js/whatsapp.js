document
  .getElementById("whatsapp-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var message = document.getElementById("message").value.trim();

    var whatsappUrl = `https://wa.me/5521971422068?text=${encodeURIComponent(
      "Olá me chamo " + name + " e minha dúvida é: " + message
    )}`;

    window.open(whatsappUrl, "_blank");
  });
