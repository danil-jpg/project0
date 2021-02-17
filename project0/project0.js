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

console.log(appData);