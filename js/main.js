




document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs
    .send("service_pda6h4n", "template_3rou9x8", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      time: new Date().toLocaleString(),
    })
    .then(() => {
      alert("Your message has been sent successfully");
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      alert("Sending failed" + JSON.stringify(err));
    });
});