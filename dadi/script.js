// Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.

// creo due variabili  per indicare i dadi del giocatore e del computer con un valore randomico da 1 a 6

var dadoGiocatore = Math.floor(Math.random() * 6 + 1);
console.log(dadoGiocatore)
var dadoComputer = Math.floor(Math.random() * 6 + 1);
console.log(dadoComputer)
// faccio in modo che in seguito al lancio dei dadi si determini chi sia il vincitore

if (dadoGiocatore > dadoComputer) {
  console.log("Ha vinto il giocatore")
} else if (dadoGiocatore < dadoComputer) {
  console.log("Ha vinto il computer")
} else {
  console.log("pareggio")

}
