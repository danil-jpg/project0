"use strict";

var money = "";
var time = "";

money = +prompt("Ваш бюджет на месяц?")
time =   prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "" ,
    income: [""],
    savings: false
};

let dayBud = money / 30;

// for(let i = 0;i < 2;i++){
//    let a =  prompt("Введите обязательную статью расходов в этом месяце"),
//        b = +prompt("Во сколько обойдется?");
//        if((typeof(a) === "string") && a != null && b != null 
//         && a != '' && b!= '' && a.length < 50){
//         appData.expenses[a] = b;
//        }else{
//            i=0;
//        }
//     }
    // var i = 0;
// while(i < 2){
//     let a =  prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//         i++;            
//         if((typeof(a) === "string") && a != null && b != null 
//         && a != '' && b!= '' && a.length < 50){         
//         appData.expenses[a] = b;
        
//     }else{
//         i=0;
//     }
// }

// do{
//     let a =  prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//         i++;            
//         if((typeof(a) === "string") && a != null && b != null 
//         && a != '' && b!= '' && a.length < 50){         
//         appData.expenses[a] = b;
        
//     }else{
//         i=0;
//     }
//     i++;
// }while(i < 2);

for(let i = 0;i < 2;i++){
    let a =  prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
        if((typeof(a) === "string") && a != null && b != null 
         && a != '' && b!= '' && a.length < 50){
         appData.expenses[a] = b;
        }else{
            i=0;
        }
    }

appData.moneyPerDay = appData.budget/30;

if(appData.moneyPerDay < 200){
    console.log("Nishiy");
}else if(appData.moneyPerDay > 200 && appData.moneyPerDay < 600){
    console.log("NeNishiy");
}else if(appData.moneyPerDay > 600){
    console.log("Ористокраб");
}else{
    console.log("Ошибка");
}


alert(" Ваш дневной бюджет! " + appData.moneyPerDay);

console.log(appData);