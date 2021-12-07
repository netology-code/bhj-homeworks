# Домашнее задание к лекции «Работа с HTML-формами»

Необходимо выполнить и предоставить на проверку следующие задачи:

1. [Текстовый чат](./chat/)
2. [Дерево интересов](./interests/)
3. [Выпадающий список с поиском](./autocomplete/)

Все задачи обязательны к выполнению. Присылать на проверку можно только сразу все три задачи.

Работы должны соответствовать принятому [стилю оформления кода](https://github.com/netology-code/codestyle).

Любые вопросы по решению задач задавайте в чате учебной группы.

## Бонус

У большинства полей ввода, помимо событий и свойств, есть методы,
программно вызывающие те или иные события. Посмотрите статью, где вы откроете
для себя ещё больше свойств по каждому элементу: 
[Формы и javascript. FORM](https://htmlweb.ru/java/forms.php)

### Собственные события

Обратите внимание, что некоторые обработчики событий вы также можете вызывать
вручную, вроде *blur()*, *focus()*.

### Освежая знания

На MDN (Mozilla Developer Network) есть замечательный цикл статей, которые
освежат память в HTML-тегах элементов форм и расскажут подробно, как
их использовать: [Руководство по HTML-формам](https://developer.mozilla.org/ru/docs/Learn/HTML/Forms)

Также посмотрите про способы навигации по элементам формы, которые имеют
атрибуты *name*: [Навигация и свойства элементов формы](https://learn.javascript.ru/form-elements)

### :checked

В CSS есть замечательный псевдоселектор *:checked*, который позволяет
удобно получать только отмеченные элементы:

```html
<input type="checkbox" checked name="interests[]" class="interest">
<input type="checkbox" value="Коты" name="interests[]" class="interest">
<input type="checkbox" checked value="Собаки" name="interests[]" class="interest">
```

```javascript
const selectedInterests = document.querySelectorAll( '.interest:checked' );
```

Такой подход извлечёт только нужные элементы, в то время как более
«дедовский»

```javascript
const selectedInterests = [...document.querySelectorAll( '.interest' )]
  .filter( el => el.checked );
```

извлечёт сначала все, и только потом отфильтрует выбранные
