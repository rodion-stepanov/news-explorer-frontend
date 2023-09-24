# NewsExplorer
------------------

## Описание
Фронтенд дипломного проекта NewsExplorer.
Сайт для поиска новостей и сохранения их в личном кабинете.

Работает в связке с собственным бэкэндом: https://github.com/rodion-stepanov/news-explorer-api 

## Технологии
Проект сделан на React. 
Роутинг, защищенный авторизацией маршрут, валидация форм, работа с локальным хранилищем с последним поисковым запросом и jwt токеном, модальные окна авторизации и регистрации, адаптивная верстка, переиспользование блоков, flexbox, grid. На личной странице настроен подсчет сохраненных статей по ключевым словам для поиска и отображение ключевых слов в зависимости от их количества.
Используется стороннее API (NewsApi) для поиска новостей, собственный бэкэнд для авторизации, регистрации и сохранения понравившихся статей. 

## Установка 
1. Клонировать этот репозиторий:
    + git clone https://github.com/rodion-stepanov/news-explorer-frontend.git
2. Клонировать репозиторий с бэкэндом:
    + git clone https://github.com/rodion-stepanov/news-explorer-api.git
2. Установить зависимости в каждом проекте:
    + npm install
3. Запустить каждый проект: 
    + npm run start
