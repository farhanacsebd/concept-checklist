let DressPrice = 1500;
let phonePrice = 35530;
let laptopPrice = 50000;
let ChocolatePrice = 500;
let myBudget = 10000;

if (DressPrice < myBudget && PhonePrice <= myBudget) {
    console.log('I will buy both types of product')
}
else if (laptopPrice < myBudget || myBudget > ChocolatePrice) {
    console.log("Buy only chocolate")
}
else {
    console.log('Hawa khao')
}