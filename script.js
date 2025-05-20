function generateQR() {
  const text = document.getElementById("text").value;
  const qrCodeContainer = document.getElementById("qrcode");

  qrCodeContainer.innerHTML = "";

  if (text.trim().length === 0) {
    alert("Please enter some text or a URL.");
    return;
  }

  new QRCode(qrCodeContainer, {
    text: text,
    width: 200,
    height: 200,
  });
}
