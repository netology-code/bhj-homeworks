# Домашнее задание к лекции «Возможности JavaScript в браузере»

Выполните задачи:

1. [Таймер обратного отсчёта.](./countdown/)
2. [Игра-кликер.](./cookie-clicker/)
3. [Игра «Убей кротов».](./mole-game/)

Чтобы получить зачёт, выполните все три задачи. Пришлите на проверку все три задачи сразу, не частями.

Проследите, чтобы работа соответствовала [стилю оформления кода](https://github.com/netology-code/codestyle).

Любые вопросы по задачам задавайте в чате учебной группы.

## Примечание

В этих задачах и далее по курсу вам нужно будет выводить сообщения с помощью
диалоговых окон. Функции *alert*, *prompt* и *confirm* — часть BOM.
Почитать о том, как их использовать, можно на ресурсах:

1. [Взаимодействие с пользователем: alert, prompt, confirm.](https://learn.javascript.ru/uibasic)
2. [Window.confirm().](https://developer.mozilla.org/ru/docs/Web/API/Window/confirm)
3. [Window.prompt().](https://developer.mozilla.org/ru/docs/Web/API/Window/prompt)
4. [Window.alert().](https://developer.mozilla.org/ru/docs/Web/API/Window/alert)

## Бонус

### Книги на курс

1. [DOM Enlightenment.](http://domenlightenment.com)
2. [Eloquent JavaScript.](https://eloquentjavascript.net)
3. [DOM Scripting: Web Design with JavaScript and the Document Object Model.](http://xahlee.info/js/scripting_web_index.html)
4. Николас Закас. JavaScript для профессиональных веб-разработчиков.

### Скорость загрузки страницы

На лекции мы говорили о принципах построения страницы браузером и двух объектных
моделях: DOM и CSSOM.

Для детального понимания рекомендуем пройти два бесплатных курса 
на Udacity от Google на английском:

1. [Browser Rendering Optimization.](https://classroom.udacity.com/courses/ud860)
2. [Website Performance Optimization.](https://classroom.udacity.com/courses/ud884)

Илья Григорик, соавтор этих курсов, а также автор большого числа материалов
портала [developers.google.com](https://developers.google.com/web/fundamentals), 
выпустил книгу в 2013 году. Она доступна в онлайн-формате бесплатно по ссылке
[High Performance Browser Networking](https://hpbn.co). Книга рассказывает про
основы сетевого взаимодействия в JavaScript и способы повышения
скорости загрузки сайта. Она будет актуальна до тех пор, пока мы 
используем протокол HTTP версии 1. Для понимания книги вам
понадобится материал всего нашего курса, так как там применяется технология AJAX
(объект XMLHttpRequest) и содержится информация, которую вам расскажут
в следующих курсах Нетологии по JavaScript.

На портале [developers.google.com](https://developers.google.com/web/fundamentals)
вы найдёте массу справочной информации, которая поможет ускорить загрузку ваших сайтов.

### События, обработчики событий

Для следующего параграфа вам потребуется больше навыков в задании обработчиков 
событий. О них мы поговорим на следующих лекциях. Но вы уже можете почитать статьи по теме:

1. [Введение в события DOM.](https://frontender.info/an-introduction-to-dom-events/)
2. [Введение в браузерные события.](https://learn.javascript.ru/introduction-browser-events)
3. [AddEventListener vs onclick.](https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick/6348597#6348597)

### Вызов события программно 

Событие *click* можно вызвать вручную. Для этого у найденного элемента есть
отдельный метод *click*:

```html
<button id="push-me">And then just touch me</button>
```

```javascript
const button = document.getElementById( 'push-me' );

button.onclick = () => alert( 'Till i can get my satisfaction' );

button.click(); // Вызовет обработчик click
```

Подробнее смотрите: [HTMLElement.click().](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/click)

### Defer или async?

На лекции вы познакомились с двумя атрибутами тега *script* — *defer* и *asymc*.
Чтобы разобраться, какой из них в каком случае применять, прочтите статьи. Они помогут больше понять смысл атрибутов и расскажут
о событиях загрузки страницы:

1. [\<script> async, defer, async defer, module, nomodule, src, inline.](https://gist.github.com/jakub-g/385ee6b41085303a53ad92c7c8afd7a6)
2. [Running Your Code at the Right Time.](https://www.kirupa.com/html5/running_your_code_at_the_right_time.htm)
