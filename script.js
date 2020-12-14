'use strict';
var id_date = document.getElementById('date');

function isLeap(year) {
    if (year % 400 == 0) return true;
    if (year % 100 == 0) return false;
    if (year % 4 == 0) return true;
    return false;
}

function pYear(year) {
    return (year + Math.floor(year / 4)
                 - Math.floor(year / 100)
                 + Math.floor(year / 400)) % 7;
}

function lastWeek(year) {
    if (pYear(year) == 4 || pYear(year - 1) == 3)
        return 53;
    return 52;
}

function ordinalDay(date) {
    var ordinal_table = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    if (isLeap(date.getFullYear()))
        for (var i = 2; i < ordinal_table.length; i++)
            ordinal_table[i] += 1;

    return ordinal_table[date.getMonth()] + date.getDate();
}

function getTodayLabel() {
    
    var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    
    var today = new Date().getDay();
    var todayLabel = week[today];
    
    return todayLabel;
}


출처: https://elena90.tistory.com/entry/Java-Script-오늘날짜-특정-날짜의-요일-구하기-예제-년도-월-일-요일 [오니님의짱꺤뽀]

function renderPage(date) {      
    id_date.innerText = date.toLocaleString() + getTodayLabel();
}

document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    renderPage(date);
    setInterval(function() {
        var now = new Date();
        id_date.innerText = now.toLocaleString();

        if (now.getDate != date.getDate) {
            date = now;
            renderPage(date);
        }

        id_date.innerText += getTodayLabel();
    }, 1000);
});