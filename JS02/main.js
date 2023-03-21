// // Task 1  evaluation

// var a = 5;  
// var b, c;

// b = (a * 5);  
// b = (c = b/2); 

// b = a * 5; //прибрав дужки
// b = (c = (b/2));  // додав дужки

// b = a * 5; //
// b = c = b/2; // прибрав дужки


// Task 2 Number:age

// let firstYear = prompt ('Ваш год рождения');
// let currentYear = new Date().getFullYear();
// let yourAge = currentYear - firstYear;

// alert(`Ваш возраст: ${yourAge} лет! Хрена себе`);

// Task 3 Number: temperature

// let tCelsius = prompt ('Температура в градусах цельсия');
// const tFarenheit = (tCelsius * 1.8) + 32;
// alert(`Температура по фаренгейту: ${tFarenheit}`);


// Task 3 Number: divide


// let dividend = prompt ('Введите делимое');
// let divisor = prompt ('введите делитель');
// let preResult = dividend / divisor;
// let result = Math.floor(preResult);

// alert(`Результат: ${result}`);


// Task 4 Number: currency

// let usd = prompt('Введите количество доллара');
// const rate = 38.5
// let preResult = usd * rate;
// let result = preResult.toFixed(2);

// alert(`Ви отримаєте ${result} гривень`);

// Task 5 Number: RGB

// let red = prompt ('Введите номер красного');
// let green = prompt ('Введите номер зеленого');
// let blue = prompt ('Введите номер голубого');

// let redString = Number(red).toString(16);
// let greenString = Number(green).toString(16);
// let blueString = Number(blue).toString(16);

// let rgbNumber = redString + greenString + blueString;

// alert(`Ваш RGB цвет:#${rgbNumber}`);


// Task 6 Number: flats
//убил весь мозг ((( ))) 
//макс количество квартир в падике для округления = кол-во квартир на этаж*кол-во этажей
//искомый подъезд = если превышает макс кол-во квартир в подъезде = следующий подъезд
// искомый этаж = количество квартир в подъезде 
