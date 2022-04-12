var date = new Date();

function getMonthName(date) {
  let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август','сентябрь','октябрь','ноябрь','декабрь'];

  return months[date.getMonth()];
}

function getWeekDay(date) {
  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];
}

function formatDate(date){

    let d = date;
  d = [
    '0' + d.getDate(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
    '0' + d.getSeconds()
  ].map(component => component.slice(-2));

  return getWeekDay(date)+' , '+date.getFullYear()+' - '+d.slice(0,1).join(' ')+' - '+getMonthName(date)+' '+d.slice(1).join(' : ')
}



let message = document.querySelector('.data_things');
function realTime(){
  message.textContent = formatDate(new Date())
}
setInterval(realTime, 1000);