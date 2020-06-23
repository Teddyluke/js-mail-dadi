
// Per quello delle mail far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide. Dare all'utente un messaggio opportuno.
// costruisco l'arrey con le mail ammesse
var mails = ["luca.maglie@gmail.com", "master@gmail.com", "admin@nerdingaround.com"];
var btn = document.getElementById('btn');

// costruisco la funzione adatta

btn.addEventListener("click", function () {
  var mailbox = document.getElementById('mailBox').value;
  console.log(mailbox);
  for (var i = 0; i < mails.length; i++) {
    if (mails[i] == mailbox ) {
      console.log("accesso consentito");
    }
    else {
      console.log("accesso negato");
    }
  }
});
