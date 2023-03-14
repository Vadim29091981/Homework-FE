/*Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа*/

const num = +prompt("Введите число")
console.log(num * 10 / 100)

/*Написать программу, которая получает два числа и выводит наименьшее
const firstNum = +prompt("Write first number")
const secondNum = +prompt("Write second number")*/

if (firstNum > secondNum) {
 console.log(secondNum)
} else {
    console.log(firstNum)
 }

/* Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
const num = +prompt("Введите число")*/

if (num < 100) {
console.log('Число меньше 100')
} else if (num > 100) {
     console.log('Число больше 100')
} else {
    console.log('Число равно 100')
}

/*Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.*/

const userName = prompt("Write your name")
 const userAge = +prompt("Write your age")

if (userAge >= 18) {
     console.log("Hello, " + userName) // concatenation
     console.log(`Hello, ${userName}`) // interpolation
 } else {
    console.log(`Hi, ${userName}`)
 }