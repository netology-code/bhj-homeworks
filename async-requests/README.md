# Домашнее задание к лекции «Асинхронные запросы»

Выполните задачи:

1. [Анимация загрузки данных.](./preloader) 
2. [Опрос с выбором результатов.](./poll)
3. [Загрузка больших файлов.](./progressbar)

Чтобы получить зачёт, выполните все три задачи. Пришлите на проверку все три задачи сразу, не частями.

Работы должны соответствовать принятому [стилю оформления кода](https://github.com/netology-code/codestyle).

Любые вопросы по задачам задавайте в чате учебной группы.

## Бонус

### Литература по AJAX

### Объект upload

Посмотрите, какие события есть в свойстве *upload* каждого 
экземпляра *XMLHttpRequest*: 
[XMLHttpRequest.upload](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/upload).

### События XHR

У *XHR* есть события для индикации загрузки файлов. Но когда принимаемые от сервера данные большие, есть отдельные
события индикации статуса загрузки данных:
[progress.](https://developer.mozilla.org/ru/docs/Web/Events/progress)

Посмотрите список основных событий *XHR*:

* [loadstart,](https://developer.mozilla.org/ru/docs/Web/Events/loadstart)
* [progress,](https://developer.mozilla.org/ru/docs/Web/Events/progress)
* [abort,](https://developer.mozilla.org/ru/docs/Web/Events/abort)
* [error,](https://developer.mozilla.org/ru/docs/Web/Events/error)
* [load,](https://developer.mozilla.org/ru/docs/Web/Events/load)
* [timeout,](https://developer.mozilla.org/ru/docs/Web/Events/timeout)
* [loadend,](https://developer.mozilla.org/ru/docs/Web/Events/loadend)
* [readystatechange.](https://developer.mozilla.org/ru/docs/Web/Events/readystatechange)

### Контроль запросов 

Мы можем отменять ранее запущенный запрос к серверу. Это возможно с помощью метода 
[abort().](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/abort)

А ещё с помощью свойства
[timeout](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/timeout) можно задавать таймаут соединения.

### Ответ

Обратите внимание на свойство *responseType*:
[responseType.](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/responseType)

Ответ с сервера можно получить в разном виде. На значения в свойствах ниже
влияет то, что вы запишете в *responseType*:

* [response,](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/response)
* [responseText,](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/responseText)
* [responseXML.](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/responseXML)

### Promise

Чтобы познакомиться с более современным интерфейсом асинхронных 
запросов, изучите тему *обещаний*.

Вот несколько материалов по ней, а подробнее мы рассмотрим тему в следующем курсе.

1. [Promise MDN.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [Promise.](https://learn.javascript.ru/promise)
3. [Использование промисов.](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Ispolzovanie_promisov)
4. [Промисы простыми словами.](https://medium.com/web-standards/promises-explained-caee4c9b86d0)

### Fetch

Давайте посмотрим на альтернативный вариант формирования запросов — функцию *fetch()*,
которая является частью *BOM*, как и *XMLHttpRequest*:

1. [Использование fetch.](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
2. [Fetch API.](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API)
3. [Метод fetch: замена XMLHttpRequest.](https://learn.javascript.ru/fetch)
4. [Введение в fetch.](https://habr.com/ru/post/252941/)
