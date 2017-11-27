# dsgn-2018

***
##### Коротко о главном
`Fixed layout for native 1500px + BEM-nameing + gulp + flexbox + Bootstrap4-beta.2 + svg-sprites + jquery + stylus + git + custom-parallax + 60FPS`
***

## Сборка :checkered_flag:

Порядок запуска:
+ Запускаем таск сборки доработаных под себя bootstrap стилей с помощью команды `gulp sass` и только после
	+ Запускаем DEVтаск для беглого осмотра `gulp dev`
		+ ИЛИ
	+ Запускаем PRODтаск для компилированния в полностью готовое состояние `gulp build`   

Таким образом папке css появится 4 файла:
1. style.css — не сжатый и без префиксов стили, полученные из скомп. stlye файла
2. prefix.css — не сжатые, но с добавлением префиксов стили 
3. style.min.css —  сжатые и с расставленными префиксами стили
4. custombs4.css — доработанные под свой проект bootstrap4-beta2 стили

---

Проект состоит из index.html

1. Раскладка страницы выполнена целиком на Flexbox
2. Без сбоев работает кроссбраузерно в (all Chromium engine), FF, IE+11, Edge
4. Валидация HTML и CSS соблюдена, испытания велись на [w3c](https://validator.w3.org/nu/ 'Перейти в этом окне')
5. Ключевые особенности формирующие dsgn
	* Написан простой, но в то же время не тормозящий эффект-паралакс, которые срабатывает при скроле страницы и изменяет у нужных объектов позицию как по X так и по Y, с помощью свойства transform:translate3d(x,x,x)
	* Вся сетка построена в строгом соответствии Bootstrap4, использовано множество "components" из данного css-фреймворка:  
		* `buttons`
		* `carousel`
		* `modal`
		* `navs`
		* `и достаточное количество Utilities`
	* Интересный прием используется в секции .project__l0 для неупорядоченного списка `<ul>`, а точнее при клике на ссылку благодаря псевдоклассу `:target` становится видимым SVG-иконка и элемент становится активным, так же стоит отметить о ловком исправлении скачка к так называемому #якорю, с помощью дополнительного тега `<i>` у которого заданы display:none; и position:fixed; такое поведение работет без JS, о возможностях недооцененного `:target` можно почитать у [Ire Aderinokun](https://bitsofco.de/the-target-trick/ 'The :target Trick') 
	* Используется 4 начертания шрифта "Roboto Condensed" в формате .woff2
	* Применяется семантическая разметка с соблюдением современных стандартов и правильным БЭМ именованием классов, папок, файлов.
	* Отдельное внимание стоит уделить веб графики — SVG, все иконки в векторе, построены на symbols-SVG-спрайте который подключается как внешний (#external) файл, это дает возможность создание неограниченного количества слепков нужных иконок и управлением стилями через CSS, но для работы в любимом всеми IE используется библиотека svg4everybody, если нужно обойтись без JS нужно использовать другой способ  #fragment identifiers связанный с встраиванием в тело html символьного спрайта с последующим обращением к нему через `<use>` thx SaraSoueidan :thumbsup:
	* Normalize.css лучше Reset.css, а <a href="https://getbootstrap.com/docs/4.0/content/reboot/">Reboot.scss</a> от Bootstrap4 еще доработанней, все файлы .css правильно минифицированны

![maket-image1](https://github.com/Oxenz/dsgn-2018/blob/master/img/0pre/index-desktop-dsgn-2018.jpg "Макет главной страницы index.html")
