const eventScrollBtn = document.querySelector('.event-space-btn')
const eventHostContainer = document.querySelector('.event-host')
eventScrollBtn.addEventListener('click', function(){
    eventHostContainer.scrollIntoView({behavior: 'smooth',  block: 'center'});
})