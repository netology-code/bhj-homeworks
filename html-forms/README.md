# Домашнее задание к лекции «Работа с HTML-формами»

Выполните задачи:

1. [Текстовый чат.](./chat/)
2. [Дерево интересов.](./interests/)
3. [Выпадающий список с поиском.](./autocomplete/)

Чтобы получить зачёт, выполните все три задачи. Пришлите на проверку все три задачи сразу, не частями.

Работы должны соответствовать принятому [стилю оформления кода](https://github.com/netology-code/codestyle).

Любые вопросы по задачам задавайте в чате учебной группы.

## Бонус

У большинства полей ввода, помимо событий и свойств, есть методы,
программно вызывающие те или иные события. Прочитайте статью о свойствах по каждому элементу: 
[Формы и javascript. FORM.](https://htmlweb.ru/java/forms.php)

### Собственные события

Обратите внимание, что некоторые обработчики событий вы можете вызывать
вручную, например *blur()*, *focus()*.

### HTML-формы

На MDN (Mozilla Developer Network) есть цикл статей о HTML-тегах элементов форм: [Руководство по HTML-формам.](https://developer.mozilla.org/ru/docs/Learn/HTML/Forms)

Также посмотрите про способы навигации по элементам формы, которые имеют
атрибуты *name*: [Навигация и свойства элементов формы.](https://learn.javascript.ru/form-elements)

### :checked

В CSS есть псевдоселектор *:checked*, который позволяет получать только отмеченные элементы:

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

извлечёт все и только потом отфильтрует выбранные.
