/* MDC de dois numeros */

function MCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return MCD(b, a % b);
    }
}

var numero1 = 680;
var numero2 = 100;

var mcd = MCD(numero1, numero2);
console.log("O maximo divisor comum de:", numero1, "e", numero2, "è", mcd);


module.exports = MCD;