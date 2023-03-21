// // task 1 = Number: odd


// let num = Number(prompt("Введите число"))

// if (isNaN(num)) {
//     alert("вы ввели не число")
// } else {
//     if (num % 2 === 0) {
//         alert("вы ввели чётное число");
//     } else {
//         alert("Вы ввели нечётное число");
//     }
// }


// // task 2 = String: lexics
// let lexics = prompt("Не говори блядь")

// if (lexics.includes("блядь")) {
//     alert("ну я же просил")
// } else {
//     alert("Слава Б-гу ты не один из этих")
// }

// // Boolean

// let keks = confirm("Будеш кексик?")

// // Boolean: if

// let keks = confirm("Будеш кексик?")

// if (keks === true) {
//     alert("приятного")
// } else {alert("сам съем")}

// // Comparison: sizes
// let ourSize = prompt("введите ваш размер верхней одежды, платьев или брюк от 40 до 54")

// if (ourSize < 40) {
//     alert("ваш размер меньше S. Питайтесь лучше")
// } else {
//     if (ourSize <= 40) {
//         alert("Ваш размер S!")
//     } else {
//     if (ourSize <= 42) {
//         alert("Ваш размер M!")
//     } else {
//     if (ourSize <= 46) {
//         alert("Ваш размер L!")
//     } else {
//     if (ourSize <= 50) {
//         alert("Ваш размер XL!")
//     } else {
//     if (ourSize <= 54) {
//         alert("Аларм! Ваш размер XXL!")
//     } else {
//     if (ourSize > 54) {
//         alert("Щось ви гоните, пан(і)")
//     }
//     }}}}}}


//     // Ternary

//     let sex = confirm("Чоловік?") ? alert("Ви чоловік") : alert("Ви жінка")

//     //Prompt: or

// let firstYear = prompt ('Ваш год рождения') || alert("по людски же попросил");
// let currentYear = new Date().getFullYear();
// let yourAge = currentYear - firstYear;

// if (isNaN(yourAge)) {   
//      alert("всё давай до свидания")
// } else {
//     alert(`Ваш возраст: ${yourAge} лет! Хрена себе`);

// }

// // Confirm: or this days
// confirm("Го шоппинг") || alert("ти - бяка")

// //Confirm: if this days

// let shopping = confirm("Го шоппинг")

// if (shopping) {
//     alert("го")
// } else {
//     alert("ти - бяка")
// }

// // Default: or

// let name = prompt("Назви ім'я або будеш Іван") || "Іван"
// let middleName = prompt("Назви по-батькові або будеш Батькович") || "Батькович"
// let surname = prompt("Назви прізвище або будеш Призовник") || "Призовник"

// alert(`Ну, на сьогодні ти ${name} ${middleName} ${surname}, з чим і вітаю`)

// // Default: if
// let name = prompt("Назви ім'я або будеш Іван") 
// if (name) { 
// } else {
//     name = "Іван"
// }

// let middleName = prompt("Назви по-батькові або будеш Батькович") 
// if (middleName) { 
// } else {
//     middleName = "Батькович"
// }


// let surname = prompt("Назви фамілію або будеш Призовник") 
// if (surname) { 
// } else {
//     surname = "Призовник"
// }

// alert(`Ну, на сьогодні ти ${name} ${middleName} ${surname}, з чим і вітаю`)


//Login and password

let login = prompt("введите логин")

if (login === "admin") {
let password = prompt("введите пароль")


if (password === "qwerty") {
    alert(`Добро пожаловать, ${login}!`)
} else {
    alert(`пароль неверный. вы точно ${login}?`)
}
}
else {
    alert("Такого пользователя не существует")
}

