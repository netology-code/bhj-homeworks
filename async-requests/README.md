# Домашнее задание к лекции «Асинхронные запросы»

Необходимо выполнить и предоставить на проверку следующие задачи:

1. [Анимация загрузки данных](./preloader)
2. [Опрос с выбором результатов](./poll)
3. [Загрузка больших файлов](./progressbar)

Все задачи обязательны к выполнению. Присылать на проверку можно только сразу все три задачи.

Работы должны соответствовать принятому [стилю оформления кода](https://github.com/netology-code/codestyle).

Любые вопросы по решению задач задавайте в чате учебной группы.

## Бонус

### Литература по AJAX

### Объект upload

Обязательно посмотрите, какие события имеются в свойстве *upload* каждого 
экземпляра *XMLHttpRequest*: 
[XMLHttpRequest.upload](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/upload).

### События XHR

Помимо того, что у *XHR* есть события для индикации загрузки файлов,
для случаев, когда принимаемые от сервера данные большие, есть отдельные
события индикации статуса загрузки данных:
[progress](https://developer.mozilla.org/ru/docs/Web/Events/progress)

Посмотрите список основных событий *XHR*:

1. [loadstart](https://developer.mozilla.org/ru/docs/Web/Events/loadstart)
2. [progress](https://developer.mozilla.org/ru/docs/Web/Events/progress)
3. [abort](https://developer.mozilla.org/ru/docs/Web/Events/abort)
4. [error](https://developer.mozilla.org/ru/docs/Web/Events/error)
5. [load](https://developer.mozilla.org/ru/docs/Web/Events/load)
6. [timeout](https://developer.mozilla.org/ru/docs/Web/Events/timeout)
7. [loadend](https://developer.mozilla.org/ru/docs/Web/Events/loadend)
8. [readystatechange](https://developer.mozilla.org/ru/docs/Web/Events/readystatechange)

### Контроль запросов 

Третий пункт косвенно говорит о том, что мы можем даже отменять ранее
запущенный запрос к серверу! Да, это возможно с помощью метода 
[abort()](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/abort)

А в шестом пункте скрыта информация о том, что мы можем даже 
задавать таймаут соединения! Это возможно с помощью свойства 
[timeout](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/timeout)

### Ответ

Обратите пристальное внимание на свойство *responseType*:
[responseType](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/responseType)

Ответ с сервера можно получить в разном виде. На значения в свойствах ниже
влияет то, что вы запишете в *responseType*:

1. [response](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/response)
2. [responseText](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/responseText)
3. [responseXML](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/responseXML)

### Promise

Для того, чтобы познакомиться с более современным интерфейсом асинхронных 
запросов, вам необходимо познакомиться с темой *обещаний*.

Всё это должно быть у вас в следующем курсе, поэтому сейчас мы будем
забегать вперёд.

1. [Promise MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [Promise](https://learn.javascript.ru/promise)
3. [Использование промисов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Ispolzovanie_promisov)
4. [Промисы простыми словами](https://medium.com/web-standards/promises-explained-caee4c9b86d0)

### Fetch

А теперь посмотрим на альтернативный вариант формирования запросов, функцию *fetch()*,
являющейся частью *BOM* (как и *XMLHttpRequest*):

1. [Использование Fetch](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
2. [Fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API)
3. [Метод fetch: замена XMLHttpRequest](https://learn.javascript.ru/fetch)
4. [Введение в fetch](https://habr.com/ru/post/252941/)
