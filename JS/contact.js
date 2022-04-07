document.getElementById("contactform").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = getValue("name");
  let mail = getValue("mail");
  let object = getValue("object");
  let message = getValue("message");

  sendEmail(name, mail, object, message);
});

function getValue(id) {
  return document.getElementById(id).value;
}

function sendEmail(name, mail, object, message) {
  $.ajax({
    url: "https://formsubmit.co/ajax/adb.graph@gmail.com",
    method: "POST",
    data: {
      name: name,
      mail: mail,
      object: object,
      message: message,
    },
    success: (data) => console.log(data),
    error: (err) => console.log(err),
  });
}
