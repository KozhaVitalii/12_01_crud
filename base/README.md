# js-22

- Пакет [json-server](https://github.com/typicode/json-server)
- Postman/Postwoman/Insomnia и т. д.
- Работа с приватным API
  - **C**reate
    - Метод POST
    - Тело
    - Заголовки
    - Ответ
  - **R**ead
    - Метод GET
    - Ответ
  - **U**pdate
    - Методы PUT и PATCH
    - Тело
    - Заголовки
    - Ответ
  - **D**elete
    - Метод DELETE
    - Ответ
- Цикл запрос-ответ

{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}