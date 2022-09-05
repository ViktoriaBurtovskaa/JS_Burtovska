// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';




function camelize(str) {
    
    let strSplit = str.split("-")
    let strArray = [];
    for (let i = 0; i < strSplit.length; i++) {
        const element = strSplit[i];
        if (element != "") {
        strArray.push(element);
        }
    }
    let strArrayMapped = strArray.map(function (word,i) {
        if (i === 0) {
            return word
        }else{
            let firstLetter = word[0].toUpperCase() ;
            let restLetters = word.slice(1);
            let changedWord = firstLetter + restLetters;
            return changedWord;
        }
    
    })
    return strArrayMapped.join("");
}
let str = "webkit-transition"; 
 console.log(camelize(str));






// Задача: написать функцию, принимающую массив чисел
//     и возвращающую сумму всех его положительных элементов и отрицательных 
//     чисел отдельно в виде нового массива


//     например функция принимает как аргумент следующий массив
//     arr = [1, -2, 3, 4, -9]

//     и должна вернуть [8, -11]
//     Сохраняйте вызов этой функции через деструктурирующее присваивание
//     Деструктурирующее присвоение означает, что возвращаемый результат функции (return) возвращает 
//     массив из двух элементов и соответственно его нужно сохранить в переменную и вывести в консоль

let arr = [1, -2, 3, 4, -9]

function sum(arrayOfNumbers) {
    let newArr = []
    let sumOfPos = 0
    let sumOfNeg = 0
    for (let i = 0; i < arr.length; i++) {
        let elements = arr[i]
        if (elements >= 0) {
            sumOfPos+=elements
        } else{
            sumOfNeg+=elements
        }
    } 
return newArr.concat(sumOfPos,sumOfNeg)
}
console.log(sum(arr));