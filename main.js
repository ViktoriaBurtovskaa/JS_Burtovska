// Функция randomPhone возвращает случайно сгенерированный номер телефона в формате "ххх-ххх", где х - цифра от 0 до 9. Номер телефона не может начинаться с 0.

function randomPhone() {
    let x1 = String(Math.ceil(Math.random() * 9));
    let x2 = String(Math.round(Math.random() * 9));
    let x3 = String(Math.round(Math.random() * 9));
    let x4 = String(Math.round(Math.random() * 9));
    let x5 = String(Math.round(Math.random() * 9));
    let x6 = String(Math.round(Math.random() * 9));

    let randomLeftPart = x1 + x2 + x3;
    let randomRightPart = x4 + x5 + x6;
    return `${randomLeftPart}-${randomRightPart}`
}
console.log(randomPhone());


function randomPhone1() {
    let x1 = Math.ceil(Math.random() * 9);
    let x2 = Math.round(Math.random() * 9);
    let x3 = Math.round(Math.random() * 9);
    let x4 = Math.round(Math.random() * 9);
    let x5 = Math.round(Math.random() * 9);
    let x6 = Math.round(Math.random() * 9);
    return `${x1}${x2}${x3}-${x4}${x5}${x6}`
}
console.log(randomPhone1());



// Функция isCube принимает на вход число a и возвращает true, если а - это куб какого-то числа
function isCube(a) {
    let p = 0;
    while (Math.pow(3,p) <= a) {
        if (Math.pow(3,p) === a) {
         return true;
        } 
         p++;
     }
     return false;
 }
 console.log(isCube(81));
console.log(isCube(4));
console.log(isCube(3));


//Функция triangleSquare принимает стороны треугольника a, b и c и возвращает его площадь. Для расчёта площади можно воспользоваться формулой Герона.
function triangleSquare(a,b,c) {
    let p = ( a + b + c) / 2;
    return Math.pow(p*( p -a)* (p - b)* (p - c), 0.5)
}
console.log(triangleSquare(3,4,5));


//Функция getDistance принимает x1, y1, x2, y2 (координаты двух точек в Евклидовом пространстве) и возвращает расстояние между ними

//step by step
// function getDistance(x1, y1, x2,y2) {
//     let n1 = Math.pow((x1 - y1),2);
//     let n2 = Math.pow((x2 - y2),2);
//     let d = Math.pow((n1 + n2),0.5);
//     return d;
// }

function getDistance(x1, y1, x2,y2) {
    return Math.pow((Math.pow((x1 - y1),2) + Math.pow((x2 - y2),2)),0.5);
}
