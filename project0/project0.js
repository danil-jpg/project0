"use strict";

var money = "";
var time = "";

function Budj(){
    while(isNaN(money) || money == null || money == ""){ 
        money = +prompt("Ваш бюджет на месяц?")
    };
    while(time == "" || time == null){
        time =   prompt("Введите дату в формате YYYY-MM-DD");
    };
};

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "" ,
    income: [""],
    savings: false
};

let dayBud = money / 30;

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


function The34question(){ 
for(let i = 0;i < 2;i++){
    let a =  prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
        if((typeof(a) === "string") && a != null && b != null 
         && a != '' && b!= '' && a.length < 50){
         appData.expenses[a] = b;
        }else{
            i = i - 1;
        }  
    }   
}


function SavingS(){
    let Quest = confirm("У вас есть збережения?");
    let question = "",
        question2 = "",
        answer = "";
    if(Quest == true){
        appData.savings = true;
        question = +prompt("Сколько именно?");
        question2 = +prompt("Под какой процент?");
        answer = (question/100/12*question2).toFixed();
        alert("Ваш депозит приносит " + answer + " в год " + "и "
        + (answer/30).toFixed() + " в месяц."  );
    }
}

function detectLevel(){
    if(appData.moneyPerDay < 200){
        console.log("Nishiy");
    }else if(appData.moneyPerDay > 200 && appData.moneyPerDay < 600){
        console.log("NeNishiy");
    }else if(appData.moneyPerDay > 600){
        console.log("Ористокраб");
    }else{
        console.log("Ошибка");
}
}

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert(" Ваш дневной бюджет! " + appData.moneyPerDay);
}

function chooseOptExpenses(){
    let qu = "" ,
        qu1 = "",
        qu2 = "";
        qu = prompt("Статья необязательных расходов");
        qu1 = prompt("Статья необязательных расходов");
        qu2 = prompt("Статья необязательных расходов");
        appData.optionalExpenses = [qu , qu1 , qu2 ]
    
}

The34question();

Budj();

detectDayBudget();


detectLevel();

SavingS();

chooseOptExpenses();

console.log(appData);