// ДЗ функция countWordPrice принимает на вход слово word и массив prices вида
// { letter: <буква>, price: <число> } и возвращает стоимость слова
function countWordPrice(word, prices) {
    let res = [];
    const arrWord = word.split("");
arrWord.forEach(function (item) {
    const findLetter = prices.find(function (elem) {
        return elem.letter === item;
    });
    res.push(findLetter.price);
});
return res.reduce(function (acc, value) {
    return acc + value;
}, 0);
};


console.log(countWordPrice("волк", [
    { letter: "о", price: 1 },
    { letter: "л", price: 1 },
    { letter: "к", price: 2 },
    { letter: "в", price: 5 },
])); // 9




// ДЗ функция whoTakeABook принимает на вход массив читателей, массив книг,
// массив билетов и название книги. Возвращает имя читателя, который взял
// книгу

function whoTakeABook(readers, books, records, bookName) {
    const book = books.find((item) => item.bookName === bookName);
    if (book) {
      const currentRecord = records.find((item) => item.book === book.id);
      return currentRecord.reader;
    }
    return null;
  };


console.log(whoTakeABook(
    [ "Петя", "Вася", "Коля" ],
    [ 
        { id: 1, bookName: "Сказка о золотой рыбке" },
        { id: 2, bookName: "Чёрный обелиск" },
        { id: 3, bookName: "Норвежский лес" }
    ],
    [ 
        { reader: "Петя", book: 2 }, // Петя взял "Чёрный обелиск"
        { reader: "Петя", book: 1 }, // Петя взял "Сказка о золотой рыбке"
        { reader: "Коля", book: 3 }, // Коля взял "Норвежский лес"
    ],
    "Чёрный обелиск"
)); // Петя


// ДЗ* Функция solveEquasion принимает на вход строку вида
// x <знак операции> <число> = <число> и возвращает значение x
function solveEquasion(str) {
const arr = str.split(" ");//"x","+","5","=","9"
const a = +arr[arr.length - 1]; //9
const b = +arr[2] // 5
const operation = arr[1]; // +
if (operation === "+") {
    return `x = ${a - b}`
}
if (operation === "-") {
    return `x = ${a + b}`
}
if (operation === "*") {
    return `x = ${a / b}`
}
if (operation === "/") {
    return `x = ${a * b}`
}
return 0;
};

console.log(solveEquasion("x + 5 = 9")); // 4
console.log(solveEquasion("x * 5 = 30")); // 6