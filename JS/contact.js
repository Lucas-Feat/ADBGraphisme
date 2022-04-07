let messagesRef = firebase.database().ref("messages");

document.getElementById("contactform").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = getValue("name");
  let mail = getValue("mail");
  let object = getValue("object");
  let message = getValue("message");

  saveMessage(name, mail, object, message);
});

function getValue(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, mail, object, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    mail: mail,
    object: object,
    message: message,
  });
}
