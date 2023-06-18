// Базовый метод GET мы рассмотрели, в данном файле мы уже научимся записывать данные через метод POST: 

const BASE_URL = 'http://localhost:4040';

// const newBook = {
//     title: 'Моя книга о React',
//     author: 'Виталий Кожа',
//     genres: ['All about React'],
//     rating: 9.5,
// };

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newBook),
//   };

// fetch('http://localhost:4040/books', options)
//     .then(res => res.json())
//     .then(console.log);


// Оформим через функцию:

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook({
//   title: 'Моя первая книга по React',
//   author: 'Vitalii Kozha',
//   genres: ['React'],
//   rating: 9.99,
// })
  
// addBook({
//   title: 'Бестселлер по Node.js',
//   author: 'Vitalii Kozha',
//   genres: ['Node.js'],
//   rating: 9.45,
// })

// и далее если записи корректно добавились на бекенд(т.е.бекенд вернул ответ 201), рендерим нашу книгу(для этого для
// приера напише простенькую функцию) и допишем наш запрос добавив then с функцией


addBook({
  title: 'Моя первая книга по React',
  author: 'Vitalii Kozha',
  genres: ['React'],
  rating: 9.99,
})
  .then(renderBook)
  .catch(error => console.log(error));

addBook({
  title: 'Бестселлер по Node.js',
  author: 'Vitalii Kozha',
  genres: ['Node.js'],
  rating: 9.45,
}).then(renderBook);


function renderBook(book) {
  console.log('Пришел ответ от бекенда можно рисовать');
  console.log(book);
}
