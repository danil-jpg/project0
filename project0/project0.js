<<<<<<< HEAD
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

=======
"use strict";

var money = "";
var time = "";

money = +prompt("Ваш бюджет на месяц?")
time = +prompt("Введите дату в формате YYYY-MM-DD");

var moneyImp = +prompt("Введите обязательную статью расходов в этом месяце");
var moneyHow = +prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {moneyImp , moneyHow},
    optionalExpenses: "" ,
    income: [""],
    savings: false
};

let dayBud = money / 30;

alert(dayBud + " Ваш дневной бюджет!");

>>>>>>> df278d213afa4da1d8af4051148eae1cf831f7bc
console.log(appData);