// ДЗ Функция cut принимает на вход строку, режет её посередине 
// и возвращает первую половину. Если в строке нечётное число
// символов, то округлить в меньшую сторону
function cut1(str) {
   let res;
   if (str.length % 2 !== 0) {
     res = str.slice(0,Math.floor(str.length/2));
    return res;
   }
   res = str.slice(0,str.length/2)
   return res;
}
console.log(cut1("Ура, сегодня пятница!"));
console.log(cut1("Ура, сегодня пятница"));
console.log(cut1("Ура, сегодня пятница!!!"));

function cut(str) {
    let strHalfLength;
    if (str.length % 2 == 0) {
        strHalfLength = str.length / 2;
    }else{
        strHalfLength = Math.floor(str.length / 2);
    }
    return str.substring(0,strHalfLength);
}


 // ДЗ Функция kingSaid принимает на вход строку str и добавляет к 
// её началу фразу "Король сказал: ". Если строка уже начинается
// с фразы "Король сказал: ", то ничего добавлять не надо.
// пример: kingSaid("хочу банан") -> "Король сказал: хочу банан"
//         kingSaid("Король сказал: я устал, я ухожу") -> "Король сказал: я устал, я ухожу"

function kingSaid(str) {
    const re = /Король сказал:/g;
    if (str.match(re)) {
        return str;
    }
    return `Король сказал: ${str}`;
}


// ДЗ Функция isItFridayToday возвращает строку "Пятница будет 
// через N дней", "Пятница уже завтра!", "Ура, сегодня пятница!" 
// или "Пятница была вчера :(" в зависимости от текущего дня недели

function isItFridayToday() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    let fridayWillBein;
    if (currentDay === 5) {
        return "Ура, сегодня пятница!";
    }
    if (currentDay === 6) {
        return "Пятница была вчера :(";
    }
    if (currentDay === 4) {
        return "Пятница уже завтра!";
    }
    if (currentDay === 0) {
        fridayWillBein = Math.abs(currentDay - 5);
   return `Пятница будет через ${fridayWillBein} дней`
    }
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        fridayWillBein = Math.abs(currentDay - 5);
   return `Пятница будет через ${fridayWillBein} дня`
    }
}

console.log(isItFridayToday());