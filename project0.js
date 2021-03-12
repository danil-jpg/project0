"use strict"

// 12.03

var money = '';

let  time = ''; 

function Budj(){
while(isNaN(money) || money == null || money == ""){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
}

};



// function Budj(){
//     while(isNaN(money) || money == null || money == ""){ 
//         money = +prompt("Ваш бюджет на месяц?")
//     };
//     while(time == "" || time == null){
//         time =   prompt("Введите дату в формате YYYY-MM-DD");
//     };
// };
// В дуще не кбу почему это не работает 

console.log(money);

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "" ,
    income: [""],
    savings: false,
    chooseExpensis: function () {
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert(" Ваш дневной бюджет! " + appData.moneyPerDay);
    },    
    detectLevel: function(){
        if(appData.moneyPerDay < 200){
            console.log("Nishiy");
        }else if(appData.moneyPerDay > 200 && appData.moneyPerDay < 600){
            console.log("NeNishiy");
        }else if(appData.moneyPerDay > 600){
            console.log("Ористокраб");
        }else{
            console.log("Ошибка");
    }
    },
    SavingS: function(){
        let Quest = confirm("У вас есть сбережения?");
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
    },
    chooseOptExpenses: function(){
        let qu = "" ,
        qu1 = "",
        qu2 = "";
        qu = prompt("Статья необязательных расходов");
        qu1 = prompt("Статья необязательных расходов");
        qu2 = prompt("Статья необязательных расходов");
        appData.optionalExpenses = [qu , qu1 , qu2 ]
    },
    chooseIncome: function(){
        for(let i = 0; i < 1 ; i++){ 
            var item = prompt("Какие есть дополнительные способы заработка?перечислите через запятую");
            appData.income.push(prompt("Может что-то еще?"));
            if((typeof(item) === "string") && item != null && item != ""){ 
                appData.income = item.split(",");
                appData.income.sort();
            }
            else{
                i = i - 1;
            };
        }
        let chooseIncomeMass = [item];
        chooseIncomeMass.forEach(function(i , item , chooseIncomeMass){
            console.log("Способы доп заработка:" + i + " массив -" + chooseIncomeMass);
        }) }
        
    // Грустно,но я забыл как работает та часть цикла,которая его обновляет, i = i - 1,vspomnil,если иф = фолс ,счетчит обнуляется и в целом всё
};
for(let key2 in appData){
    console.log("Наша программа включает в себя: " + appData[key2]);
}
appData.chooseIncome();
console.log(appData);
