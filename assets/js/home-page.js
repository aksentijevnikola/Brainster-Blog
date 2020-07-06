

const educationTextContainer = document.querySelector('.education-text-container');
const coworkingBtnContainer = document.querySelector('.coworking-buttons')
const coworkingBtn = document.querySelector('.coworking-btn')
const coworkingAlert = document.querySelector('.coworking-alert')
let coworkingBtnStatus = true;

function homeCardRender() {
  let aboutUsCardContainer = document.querySelector('.about-us-cards-container');
  aboutUsCards.forEach(el => {
    aboutUsCardContainer.innerHTML += homepageCard(el.id, el.href, el.title, el.desc, el.img, el.alt)
  });
  let eventsCardContainer = document.querySelector('.events-cards-container')
  eventCards.forEach(el => {
    if (el.id == "partner-form"){
      eventsCardContainer.innerHTML += homepageCard(el.id, el.href, el.title, el.desc, el.img, el.alt)
    }
    else if (el.id == "innovations-form") {
      eventsCardContainer.innerHTML += homepageCard(el.id, el.href, el.title, el.desc, el.img, el.alt)
    }
    else{
      eventsCardContainer.innerHTML += homepageCard(undefined, el.href, el.title, el.desc, el.img, el.alt)
    }
  });
};

function showCompaniesCaption() {
  educationTextContainer.innerHTML = "";
  educationTextContainer.innerHTML = `
  <p class="education-title title">Компании</p>
  <p class="education-desc" style="margin: 1.5rem 0">Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија.</p>
  <p class="education-desc" style="margin: 1.5rem 0">Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building?</p>
  <p class="education-desc" style="margin: 1.5rem 0">Бо Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи и адаптира сподели својата експертиза со денешните потреби на компаниите</p>
  <div class="education-buttons">
      <button class="btn-reverse showAcademies education-btn" style="margin-right: 10px">АКАДЕМИИ</button>
      <button class="btn-primary showCompanies education-btn">ЗА КОМПАНИИ</button>
  </div>`
}

function showEducationCaption() {
  educationTextContainer.innerHTML = "";
  educationTextContainer.innerHTML = `<p class="education-title title">Едукација</p>
  <p class="education-desc">Дали си подготвен да одговориш на потребите на иднината. Вистинските
      курсеви,
      академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг,
      дизајн,
      програмирање и Data Science.</p>
  <div class="education-buttons">
      <button class="btn-primary showAcademies education-btn">АКАДЕМИИ</button>
      <button class="btn-reverse showCompanies education-btn">ЗА КОМПАНИИ</button>
  </div>
  `
}

function coworkingWarning() {
  if (coworkingBtnStatus == true) {
    coworkingBtnStatus = false;
    coworkingBtnContainer.innerHTML += `
    <div class="coworking-alert">
      <div class="arrow-up"></div>
      <div class="arrow-left"></div>
      <span class="circle-bg"></span>
      <i class="fa fa-info-circle" aria-hidden="true"></i>
      <p class="coworking-alery-txt">Местата се распродадени</p>
    </div>`
  } else if (coworkingBtnStatus == false) {
    coworkingBtnStatus = true;
    document.querySelector('.coworking-alert').remove()
  }
}

homeCardRender();



