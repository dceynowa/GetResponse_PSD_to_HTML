"use strict";
window.onload = function () {

    var slider = document.getElementsByClassName('slider')[0],
        weeks = slider.getElementsByTagName('li'),
        counter = 0,
        nextButton = slider.getElementsByClassName('next')[0],
        prevButton = slider.getElementsByClassName('prev')[0];


    function showWeek(index) {
        for (var i = 0; i < weeks.length; i += 1) {
            weeks[i].className = 'hideWeek';
        }
        weeks[index].className = 'showWeek';
    }


    function nextWeek() {
        if (counter < weeks.length - 1) {
            counter += 1;
        } else {
            counter = 0;
        }

        showWeek(counter);
    }

    function prevWeek() {
        if (counter > 0) {
            counter -= 1;
        } else {
            counter = weeks.length - 1;
        }
        showWeek(counter);
    }

    nextButton.onclick = nextWeek;
    prevButton.onclick = prevWeek;

    showWeek(counter);

};