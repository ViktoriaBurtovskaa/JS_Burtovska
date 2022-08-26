for (let i =  1; i <= 10; i++ ) {
    if (i % 2 == 0){
        console.log(i);
    }
}

let i = 0
while(i < 3){
    alert( `number ${i}!` );
    i++;
}


    function ask(question, yes, no) {
  if (confirm(question)) yes()
          else no();
      }


   ask(
     "Вы согласны?",
() => alert("Вы согласились."),
() => alert("Вы отменили выполнение.")
   );




