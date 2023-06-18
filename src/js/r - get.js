
// По дефолту метод fetch имеет GET запрос, т.е. чтение содержимого источника данных на бекенде:

// fetch('http://localhost:4040/books')
//     .then(res => res.json())
//     .then(console.log);

// Запишем это в функцию получения всех элементов массива:
// function fetchBooks() {
//   return fetch('http://localhost:4040/books').then(res => res.json()).then(console.log);
// }
// fetchBooks();

// // или в функцию получения одного элемента по id:
// function fetchBookById(bookId) {
//   return fetch(`http://localhost:4040/books/${bookId}`).then(res => res.json());
// }

// fetchBookById(2);
// fetchBookById(4);

// Записав обращение к бекенду в функции мы сделали переиспользуемый код, т.е.не должны быть голые фетчи они должны
// быть помещены в функции, которые при необходимости можно будет вызывать, в случае с id с указанием параметров
// Выносить такие функции необходимо в отдельные файлы(здесь имеется в виду что get функции в одном файле, post, delate,
// patch в других) и разделять на отдельные методы(здесь имеется в виду у нас две функции одна получает вес массив, вторая
// по конкретному id)


// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => res.json());
// }

// Перепишем гаши функции, выделив базовый URL в переменную, которую будем подставлять в наши запросы:

const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

// По сути все просто. На это все.