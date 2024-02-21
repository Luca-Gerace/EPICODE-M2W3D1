/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
}
console.log(crazySum(5,5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(num) {
    let intero = parseInt(num)
    if ((intero > 20 && intero <= 100) || intero === 400) {
        return true;
    } else {
        return false;
    }
}
console.log(boundary(24));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa1) {
    // split - divide l'array nei singoli elementi o una stringa nei singoli caratteri che la compongono  
    // reverse - inverte l'ordine degli elementi di un array
    // join - unisce gli elementi di un array
    return stringa1.split("").reverse("").join("");
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa2) {
    
    // creo variabile con split (che a sua volta crea un nuovo array) del parametro stringa ad ogni spazio " "
    let frase = stringa2.split(" ");

    // inizializzo array finale
    let risultatoFinale = [];

    // ciclo for
    for (let i = 0; i < frase.length; i++) {

        // charAt - prende un SOLO carattere della stringa, in questo caso quello in posizione 0
        let primaLetteraFrase = frase[i].charAt(0);

        // toUpperCase - rende la stringa in uppercase
        let primaLetteraUpper = primaLetteraFrase.toUpperCase();

        // slice - taglia la prima lettera della frase
        let tagliaFrase = frase[i].slice(1);

        // concateno le stringhe - prima lettera in upper + resto della parola
        let fraseFinale = primaLetteraUpper + tagliaFrase;

        // push - pusho nell'array finale le parole elaborate in precedenza
        risultatoFinale.push(fraseFinale);
    }

    return risultatoFinale.join(" ")
}
console.log(upperFirst("topolino pippo pluto paperino"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
