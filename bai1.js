let num;

function findOppositeNumber(n, inputNumber) {
    if ((n / 2) > inputNumber) {
        num = (n / 2) + inputNumber
        return num;
    } else
    if ((n / 2) < inputNumber) {
        num = (n / 2) + inputNumber - n
        return num;
    }

}

let a = findOppositeNumber(10, 6);
console.log(a);