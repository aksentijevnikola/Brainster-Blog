let months = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
function academyCardRender() {
    const academiesCardContainer = document.querySelector('.academies-card-container');
    academyCardList.forEach(el => {
      academiesCardContainer.innerHTML += academyCard(el.href, el.img, el.title, el.freeSpace, el.enrollmentDate, el.profession, el.numberOfMonths, el.numberOfPartners)
    })
}
academyCardRender();