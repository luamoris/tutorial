# GitBook книга на GitHub

> Бесплатная программа GitBook позволяет писать книги высокого качества на языке разметки Markdown.

Данный материал предоставит руководство по созданию своей первой книги с использованием GitBook, и интеграции GitHub для хранения и публикации книги в интернете.



Технологии:
[`Markdown`][markdown],
[`Node JS`][nodejs],
[`NPM`][npm],
[`GitBook`][gitbook],
[`Gulp`][gulp],
[`Git`][git]
.

Среда разработки:
[`Visual Studio Code`][vsc]
.



<h2 align="center">Контент</h2>

### Подготовка

#### Настройка инструментов разработки
Необходимо установить Node JS, NPM и Git ("Технологии/Установка").
> + дополнительно [`Технологии`][article-technologies]

#### Настройка среды разработки
Необходимо установить любой редактор кода, например Visual Studio Code. 
> + дополнительно [`Среда Разработки`][article-dev-environment]


### Настройка проекта


#### 1. Создать директорию проекта
Необходимо создать директорию с названием, которое обязательно должно соответствует таким правилам:
+ название на английском языке
+ в названии не должно быть пробелов
+ доступные знаки: `-`, `_`

> В моем случае директория будет иметь название `book`.

###### Структура
```bash
|- book
```


#### 2. Инициализация проекта

Открываем консоль в редакторе кода или консоль вашей операционной системы, после чего переходим
в папку вашего проекта.

Инициализируем проект командой:

{% label %}Console INPUT{% endlabel %}
```bash
npm init
```

И вводим данные, который просит npm, либо используем флаг `-y` для автоматического заполнения.

{% label %}Console INPUT{% endlabel %}
```bash
npm init -y
```

{% label %}Console OUTPUT{% endlabel %}
```bash
PS C:\path\book> npm init -y
Wrote to C:\path\book\package.json:

{
  "name": "book",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

PS C:\path\book>
```

> + дополнительно [`npm`][article-npm]

###### Структура
```bash
|- book
	|- package.json
```

##### Лицензия MIT `Необязательный шаг`

Необходимо создать файл с названием `LICENSE`. 
Затем Подставьте в шаблон ниже год и свое полное имя (вы можете выбрать другую лицензию).

{% label %}LICENSE{% endlabel %}
```txt
MIT License

Copyright (c) <YEAR> <FULL NAME>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

###### Структура
```bash
|- book
	|- package.json
	|- LICENSE
```

##### Настройка файла `package.json`
После настройки файл должен иметь такой вид.

{% label %}package.json{% endlabel %}
```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "My first book using gitbook",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": " your-full-name <your-email>",
  "license": "MIT"
}
```

Необходимо отредактировать такие поля:

|поле|описание|
|:-|:-|
|`name`|название проекта|
|`description`|описание проекта|
|`author`|имя и почта автора|
|`license`|название лицензии, котороя используется|




---


#### Полезные ссылки
+ `ссылка`: 

#### Наши статьи
+ [__`Технологии`__][article-technologies]
+ [__`Среда Разработки`__][article-dev-environment]
+ [__`Markdown`__][article-markdown]
+ [__`NPM`__][article-npm]
+ [__`Git`__][article-git]


[article-technologies]: https//
[article-dev-environment]: https//
[article-markdown]: https//
[article-git]: https//
[article-npm]: https//


---


### Создатели

<p align="left">
	<a href="https://github.com/luamoris">
		<img width="50" src="https://cutt.ly/mc9ZDPN" alt="Iosif Luamoris"/>
	</a>
</p>




[markdown]: https://ru.wikipedia.org/wiki/Markdown
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[gitbook]: https://www.gitbook.com/
[gulp]: https://gulpjs.com/
[git]: https://git-scm.com/

[vsc]: https://code.visualstudio.com/