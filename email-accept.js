

// email collect
function reciveFromMyWeb() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ibro.aliwa1@gmail.com",
    Password: "6D45B7FB2466B51E173E9EA810E81B4ACF0A",
    To: "ibro.aliwa@gmail.com",
    From: "ibrahimwebportifolio@gmail.com",
    Subject: document.querySelector(".email-subject").value,
    Body: `Name:\u00A0\u00A0${
      document.querySelector(".full-name").value
    }<br>
          Email Address:\u00A0\u00A0${
            document.querySelector(".email-address").value
          }<br>
          Mobile Number:\u00A0\u00A0${
            document.querySelector(".mobile-number").value
          }<br><br>
          Message:\u00A0\u00A0${
            document.querySelector(".users-message").value
          }`,
  }).then(/* (message) => alert(message), */ openPopup());
};

// email popup 
const popUp = document.getElementById("pop-up");

function openPopup() {
  popUp.classList.add("open-up");
}
function closePopup() {
  popUp.classList.remove("open-up");
};