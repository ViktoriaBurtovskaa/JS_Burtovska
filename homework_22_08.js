const number = 1;
const str = '1';
console.log(number == str);
console.log(number == !str);

//У нас есть 100 (создать константу)
//Цена помидоров на рынке - 10 (создать константу)
//Цена огурцов на рынке - 5 (создать константу)
//Цена яблок на рынке - 15 (создать константу)
//Оставшиеся деньги потратим на орехи (создать переменную)

//Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
//оставшиеся деньги потратили на орехи (присвоить значение переменной)
//сколько денег мы потратили на орехи? (вывести переменную в консоль)
//на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)
//в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
//выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

const budget = 100;
const priceOfTomatoes = 10;
const priceOfCucumbers = 5;
const priceOfApples = 15;
let moneyForNuts;

let amountOfTomatoes = 2;
let amountOfCucumbers = 2;
let amountOfApples = 2;
let costOfOurPurchase = (amountOfApples * priceOfApples) + (amountOfCucumbers * priceOfCucumbers) + (amountOfTomatoes * priceOfTomatoes);
moneyForNuts = budget - costOfOurPurchase;
console.log("We spent on buying nuts: " + moneyForNuts)
console.log(moneyForNuts > costOfOurPurchase || moneyForNuts < costOfOurPurchase);

if(moneyForNuts < costOfOurPurchase){
    console.log("Больше потратили на фрукты и овощи")
}else{
    console.log("Больше потратили на орехи")
}



