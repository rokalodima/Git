////////// Примеры на уроке

// console.log("The lesson one");
// alert("Hello");
// let age = prompt("сколько тебе лет");
// console.log("age", age);
// let isBoss = confirm("Ты здесь главный?");
// console.log("isBoss", isBoss);

/////////// Привет мир!

// alert("Я JavaScript!");
// alert("Hello");
// alert("world!");
// alert(3 + 1 + 2);

////// Работа с переменными

// 1.
// let admin;
// let name = "Джон";
// admin = name;
// alert(admin);

//2.
// let ourPlanet = "Земля";
// let userName = "Дима";

//3.

// const BIRTHDAY = "18.04.1982"; // true
// const AGE = someCode(BIRTHDAY); // false

/////// Типы данных

// let name = "Dima";
// alert(`Hello, ${name}`);
// let isGreater = 4 > 8;
// alert(isGreater);

// let name = "Ilya";

// alert(`hello ${1}`); // hello 1

// alert(`hello ${"name"}`); // hello name

// alert(`hello ${name}`); // hello Ilya

//////// Преобразование типов
// alert(Boolean("0")); //true так как любое содержание строк верно
// alert(Boolean("")); //false
// alert(Boolean(" ")); //true так как есть пробел
// alert(Boolean(0)); //false так как 0 это пустое знвчение
/////////////////////////////////////
// let name = "1";
// let user = "5";
// // alert(+user + +name);
// alert(Number(name) + Number(user));
///////////////////////////////////
// let name = 5;
// let a = name++; // присваивает предыдущее значение
// alert(a);
////////////////////////////////////
// let a = 5;
// ++a;
// a++;
// alert(a);
////////////////////////////////////
// let a = 5;
// a++;
// alert(a * 2);
////////////////////////////////////
// let a = 5;
// a += 5;
// alert(a);
/////////////////////////////////////
// let a = 1,
//   b = 1;

// let c = ++a; //2
// let d = b++; // 1

// alert(c);
// alert(d);
//////////////////////////////////////
// let a = 2;

// let x = 1 + (a *= 2);

// alert(a); //4
// alert(x); //5

//////////////////////////////////////
5 > 4; //true
"ананас" > "яблоко"; //false
"2" > "12"; //true
undefined == null; //true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false

////////////////////////////////////////

// let age = prompt("Сколько тебе лет?", 100);

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!
/////////////////////////////////////////
// let a = confirm("ты тут?");
// alert(a);
//////////////////////////////////////////
// let name = prompt("Ваше имя", "");
// alert(`Ваше имя ${name}`);
//////////////////////////////////////////

// let name = prompt("Какое официальное название у JavaScript");
// if (name == "ECMAScript") {
//   alert("Верно");
// } else {
//   alert("Не знаете? ECMAScript!");
// }
//////////////////////////////////////////////////
// let a = prompt("Напишите число");
// if (a > 0) {
//   alert(1);
// } else if (a < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
///////////////////////////////////////////////

// let message = prompt("Введите логин", "");
// message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";
/////////////////////////////////////////////////
// let age = prompt("Введите число от 14 до 90");
// if (age >= 14 && age <= 90) {
//   alert("Верно");
// } else {
//   alert("не верно");
// }
///////////////////////////////////////////////////
//

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

// let login = prompt("Введите логин", "");
// if (login == "Админ") {
//   let password = prompt("Введите пароль");
//   if (password == "Я главный") {
//     alert("Здравствуйте");
//   } else if (password == "" || password == null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (login == "" || login == null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }