// Сумма свойств объекта
//             // У нас есть объект, в котором хранятся зарплаты нашей команды:


//             let salaries = {
//                 John: 100,
//                 Ann: 160,
//                 Pete: 130
//               }
//               Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
      
//               Если объект salaries пуст, то результат должен быть 0.


let salaries = {
    John: 100,
     Ann: 160,
     Pete: 130
         }

let sumOfSalaries = 0;
for (const key in salaries) {
sumOfSalaries += salaries[key];
    }
    
console.log(sumOfSalaries);










      
//       Second level:             Умножаем все числовые свойства на 2
//                   Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//                   
    
//               Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//               P.S. Используйте typeof для проверки, что значение свойства числовое.


//почему тут возвращает undefined? условие, как мне кажется, верное

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//     };


//  function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] === "number") {
//             obj[key] *= 2;
//  }
//     }
//  }
//  multiplyNumeric(menu)
//  console.log(multiplyNumeric(menu));