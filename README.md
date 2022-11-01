# Домашние задания по курсу «Базовый JavaScript в браузере»

## Блок 1. Основы разработки интерфейсов

#### 1.1. [Возможности JavaScript в браузере.](./js-features/)  

#### 1.2. [Способы поиска нужного HTML-элемента.](./element-search/)

#### 1.3. [Объект события.](./event-object/)

## Блок 2. Работа с DOM

#### 2.1. [DOM.](./dom/)

#### 2.2. [Работа с HTML-формами.](./html-forms/)

#### 2.3. [Изменение структуры HTML-документа.](./document-structure/)

## Блок 3. Работа с состоянием

#### 3.1. [Асинхронные запросы.](./async-requests/)

#### 3.2. [Хранение состояния на клиенте.](./client-state)

## Требования

* браузер;
* редактор кода, например [Sublime Text][1] или [Visual Studio Code][2];
* аккаунт на [GitHub.][0] [Инструкция по регистрации на GitHub][3];
* система контроля версий [Git][4], установленная локально. [Инструкция по установке Git][5].

## Начало работы

1. Создайте репозиторий на [GitHub][0]. Параметры репозитория:
* Repository name: `bhj-homeworks`;
* Access level: Public;
* Initialize this repository with a README: No;
* Add .gitignore: None;
* Add a license: None.

После нажатия на кнопку `Create repository`, вы попадёте на страницу созданного репозитория.
URL-адрес страницы будет URL-адресом вашего репозитория.
Пример URL-адреса репозитория: `https://github.com/username/bhj-homeworks`, где `username` — имя вашего профиля GitHub, `bhj-homeworks` — название репозитория. Далее адрес вашего репозитория будет иметь обозначение: `%repo-url%`.

2. Создайте директорию на вашем компьютере, в которой вы будете выполнять домашние задания.
3. Откройте созданную директорию с помощью терминала или командной строки вашей операционной системы.
4. Клонируйте репозиторий с домашними заданиями с помощью команды `git clone https://github.com/netology-code/bhj-homeworks` в открывшемся терминале или командной строке.
5. Перейдите в директорию склонированного репозитория `cd ./bhj-homeworks`.
6. Добавьте репозиторий в проект `git remote add homeworks %repo-url%`, где `%repo-url%` — адрес созданного репозитория.

## Решение задач
1. Перейдите в папку задания, например, для первого задания `cd ./js-features`.
2. Откройте файл `main.js` в редакторе кода и выполните задание.
3. Откройте файл `index.html` в браузере и с помощью консоли DevTools убедитесь, что результаты выводятся правильно.
4. Добавьте файл `main.js` в индекс git с помощью команды `git add %file-path%`, где `%file-path%` — путь до целевого файла, например, для первого задания `git add main.js`.
5. Сделайте коммит, используя команду `git commit -m '%comment%'`, где %comment% — это произвольный комментарий к вашему коммиту, например, для первого задания `git commit -m 'first commit variables'`.
6. Опубликуйте код в репозиторий homeworks с помощью команды `git push -u homeworks master`. 
7. Прикрепите ссылку на репозиторий в личном кабинете на сайте [Нетологии][6].


[0]: https://github.com/
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/blob/master/github/README.md
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/README.md
[6]: https://netology.ru/
