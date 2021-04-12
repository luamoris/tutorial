# Создание плагина для GitBook

> Полезные ссылки:
> + [Пример][exp]
> + [Инструкция][2]
> + [Локальная проверка плагина][1]

[exp]: https://github.com/azu/gitbook-plugin-include-codeblock
[1]: https://coderoad.ru/30897205/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%D1%82%D0%B5-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD-gitbook-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BD%D0%B5-%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D1%83%D1%8F-%D0%B5%D0%B3%D0%BE

[2]: https://snowdreams1006.github.io/gitbook-official/en/plugins/create.html


```js
// example JavaScript code
const welcome = (name) => `Hello World, Hello ${name}!`; 
const name = "Friend";
/*
* multiline
* comment
*/
console.log(welcome(name)); // Hello World, Hello Friend!
```

```bash
npm init -y
npm install good-mood -D
```


```ruby
#!/usr/bin/ruby -w

puts "Hello, Ruby!"


=begin
This is a multiline comment and con spwan as many lines as you
like. But =begin and =end should come in the first line only.
=end
```


```json
"gitbook": {
	"properties": {
		"cloneButton": {
			"type": "boolean",
			"default": true,
			"description": "Button for copying the content of the block with the code."
		},
		"lineNumber": {
			"type": "boolean",
			"default": true,
			"description": "Numbering each line of code."
		},
		"cloneButtonStyle": {
			"type": "object",
			"default": {
				"color": "#c1c7cd",
				"color-hover": "#c1c7cd",
				"bg": "transparent",
				"bg-hover": "transparent"
			},
			"description": "Few styles for the copy button."
		},
		"cloneButtonIcon": {
			"type": "object",
			"default": {
				"clone": "fa-clone",
				"check": "fa-check"
			},
			"description": "Copy and copy context icons."
		}
	}
}
```

Плагин для форматирования блоков кода на страницах gitbook. Плагин умеет добавлять нумерацию строк кода и необычный маркер для строк кода в консоли, добавлять кнопку для копирования содержимого блока и форматирования книпки.

# Block Code
### `Gitbook Plugin`

> My first package in npm. I would be grateful for any. 

#### Plugin for formatting blocks of code in gitbook pages.

#### Plugin abilities:
* Adds numbering for lines of code.
* Adds a special marker for the code block in the console.
* Adds a button to copy the contents of the code block.
* Formatting the copy button.

### Summary

+ [__`Install`__](#install)
+ [__`Plugin Config`__](#plugin-config)

### Install

#### `book.json`
```json
{
	"plugins": [
		"block-code"
	]
}
```

#### `console`
```bash
gitbook install
```

#### or

#### `console`
```bash
npm install gitbook-plugin-block-code
```


### Plugin Config


All basic settings are default.

#### `book.json`
```bash
{
	"pluginsConfig": {
		"block-code": {
			"cloneButton": true,
			"lineNumber": true,
			"cloneButtonStyle": {
				"color": "#c1c7cd",
				"color-hover": "#c1c7cd",
				"bg": "transparent",
				"bg-hover": "transparent"
			},
			"cloneButtonIcon": {
				"clone": "fa-clone",
				"check": "fa-check"
			}
		}
	}
}
```

#### Properties

|property|default|description|
|:-:|:-:|:-|
--- 

```json
{
	"cloneButtonIcon": {
		"clone": "fa-paint-brush"
	}
}
```