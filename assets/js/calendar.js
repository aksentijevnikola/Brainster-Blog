const nextMonthBtn = document.querySelector('.nextMonth')
const prevMonthBtn = document.querySelector('.previousMonth')
let today = new Date();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let months = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];

function nextMonth() {
  currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  createCalendar(currentYear, currentMonth, calendarEvents)
}
function prevMonth() {
  currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
  createCalendar(currentYear, currentMonth, calendarEvents)
}
function createCalendar(year, month, events) {
  let calendarDates = document.querySelector('.calendar-dates')
  calendarDates.innerHTML = '';
  let firstDay = new Date(year, month).getDay();
  let monthDayCount = 32 - new Date(year, month, 32).getDate()
  let date = 1;
  let filteredEvents = events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month)

  let currentMonthAndYear = document.querySelector('.currentMonthAndYear')
  currentMonthAndYear.innerHTML = `${months[month]} ${year}`
  for (let i = 0; i < 6; i++) {
    let newWeek = document.createElement('div');
    newWeek.classList.add('calendar-week');
    calendarDates.appendChild(newWeek);
    for (let x = 0; x < 7; x++) {
      let dayCell = document.createElement('div');
      dayCell.classList.add('date-container');
      newWeek.appendChild(dayCell);
    }
  }
  let allCells = document.querySelectorAll('.date-container');
  for (i = firstDay; i < (monthDayCount + firstDay); i++) {
    let dateInfoContainer = document.createElement('div');
    let dayNumber = document.createElement('span');
    dateInfoContainer.classList.add('date-info');
    dayNumber.classList.add('date');
    dayNumber.innerText = `${date}`
    allCells[i].style.backgroundColor = '#F3F3F3'
    let todayEvent = filteredEvents.filter(event => event.date.getDate() == date);
    if (window.matchMedia("(min-width: 992px)").matches) {
      todayEvent.forEach(event => {
        dateInfoContainer.innerHTML += `
        <p class="date-event-name">${event.title}</p>
      <p class="date-event-time">${event.time}</p>
      <p class="date-event-part">${event.part}</p>`
        allCells[i].style.backgroundColor = `${event.bgColor}`;
        allCells[i].style.color = `${event.textColor}`;
      });
    } else if (window.matchMedia("(max-width: 991px)").matches) {
      todayEvent.forEach((event) => {
        allCells[i].style.backgroundColor = `${event.bgColor}`;
        allCells[i].style.color = `${event.textColor}`;
      });
    }
    allCells[i].appendChild(dateInfoContainer);
    dateInfoContainer.appendChild(dayNumber)
    date++
  }
  for (x = 0; x < filteredEvents.length; x++) {
    if (x % 3 && window.matchMedia("(max-width: 991px)").matches) {
      let responsiveEventWrapper = document.querySelector('.event-wrapper');
      let newResponsiveEvent = document.createElement('div');
      newResponsiveEvent.classList.add('event');
      newResponsiveEvent.style.borderLeft = `5px solid ${filteredEvents[x].bgColor}`
      responsiveEventWrapper.appendChild(newResponsiveEvent);
      newResponsiveEvent.innerHTML += `
      <p class="responsive-event-date">${filteredEvents[x].date.getDate()}/${filteredEvents[x].date.getMonth()}/${filteredEvents[x].date.getFullYear()}</p>
      <p class="responsive-event-title">${filteredEvents[x].title}</p>
      <p class="responsive-event-time">${filteredEvents[x].time}</p>
      `
    }
  }
  allCells.forEach(cell => {
    if (cell.innerHTML == '') {
      cell.style.padding = '0';
      cell.style.margin = '0';
      cell.style.height = '0';
    }
  })
}


createCalendar(currentYear, currentMonth, calendarEvents);
nextMonthBtn.addEventListener('click', nextMonth);
prevMonthBtn.addEventListener('click', prevMonth);