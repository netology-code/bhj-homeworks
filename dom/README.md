# Домашнее задание к лекции «DOM»

Необходимо выполнить и предоставить на проверку следующие задачи:

1. [Появление элементов при прокрутке](./reveal/)
2. [Ротатор рекламы](./ads/)
3. [Онлайн-читалка](./book-reader/)

Все задачи обязательны к выполнению. Присылать на проверку можно только сразу все три задачи.

Работы должны соответствовать принятому [стилю оформления кода](https://github.com/netology-code/codestyle).

Любые вопросы по решению задач задавайте в чате учебной группы.

## Бонус

### Загрузка страницы

Помните, мы когда-то говорили о процессе загрузки страницы?
Самое время поговорить о критическом CSS и блокирующем JavaScript.

Статьи о критическом CSS:

1. [Разбираемся с критичным CSS](http://prgssr.ru/development/razbiraemsya-s-kritichnym-css.html)
2. [Критический CSS + прогрессивный CSS = ?](https://medium.com/web-standards/critical-and-progressive-css-d6611f034d7d)

Для ускорения страниц в настоящий момент в теге *link*
применяется дополнительный атрибут *rel* со значением *preload*.

Более подробно вы можете ознакомиться с информацией в этой статье:
[Предварительная загрузка контента при помощи rel="preload"](https://developer.mozilla.org/ru/docs/Web/HTML/Preloading_content)

JavaScript-файл, размещённый без атрибута async, может замедлить 
загрузку страницы, именно поэтому применяется атрибут *async*. Подробнее
читайте в статьях: 

1. [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)
2. [Оптимизация JavaScript для быстрой визуализации страницы](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript?hl=ru)
3. [The Cost Of JavaScript In 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4) 

Также рекоендуем изучить презентацию: [Critical JavaScript Path](https://speakerdeck.com/jonthanfielding/critical-javascript-path) 

### Узлы

Вы уже знаете, что наиболее важными узлами в DOM являются текстовые и HTML-элементы.
Реализация вообще всех узлов представлена интерфейсом [Node](https://developer.mozilla.org/ru/docs/Web/API/Node).
Текстовые узлы также представлены интерфейсом *Node*.
Реализация HTML-элементов (наследуют свойства и методы от *Node*)
представлена интерфейсом [Element](https://developer.mozilla.org/ru/docs/Web/API/Element).

Несмотря на то, что мы говорим преимущественно о 2 типах узлов, в DOM представлено
аж [12 типов](https://developer.mozilla.org/ru/docs/Web/API/Node/nodeType),
почти половина из которых порицается.

### Подробнее о DOM

Часть из этих статей вы также можете найти в конце презентации к лекции.

1. [Атрибуты и DOM-свойства](https://learn.javascript.ru/attributes-and-custom-properties)
2. [Использование data-* атрибутов](https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes)
3. [Координаты в окне](https://learn.javascript.ru/coordinates)
4. [Element.getBoundingClientRect()](https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect)
5. [Translating Viewport Coordinates Into Element-Local Coordinates Using Element.getBoundingClientRect()](https://www.bennadel.com/blog/3441-translating-viewport-coordinates-into-element-local-coordinates-using-element-getboundingclientrect.htm)
