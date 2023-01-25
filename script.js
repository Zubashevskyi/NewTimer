'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const deadline = '2023,2,20'

  function calcRemainingTime(endtime) {
    let time = Date.parse(new Date(endtime)) - Date.parse(new Date())

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(time / (1000 * 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return {
      total: time,
      days,
      hours,
      minutes,
      seconds
    }
  }


  function addZero(num) {
    if (num < 10) return `0${num}`;
    return num
  }


  function setClock(endtime) {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const inteval = setInterval(() => updateCLock(), 1000);

    updateCLock()

    function updateCLock() {
      const time = calcRemainingTime(endtime)
      days.textContent = addZero(time.days)
      hours.textContent = addZero(time.hours)
      minutes.textContent = addZero(time.minutes)
      seconds.textContent = addZero(time.seconds)

      if (time.total < 0) {
        clearInterval(inteval)
        days.textContent = '00'
        hours.textContent = `00`
        minutes.textContent = `00`
        seconds.textContent = `00`
      }
    }

  }

  setClock(deadline)
})