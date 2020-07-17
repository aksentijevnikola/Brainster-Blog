let popupState = true;
let checkNavState = false
let brainsterSidebar = document.getElementById("brainster-sidebar");
const openBtn = document.querySelector(".openBtn");
const barOne = document.querySelector(".bar-1");
const barTwo = document.querySelector(".bar-2");
const barThree = document.querySelector(".bar-3")
function openNav() {
  if (window.matchMedia("(max-width: 991px)").matches) {
    if (checkNavState == false) {
      checkNavState = true;
      brainsterSidebar.style.cssText = "height: 35vh; padding: 2rem 0;";
      openBtn.style.padding = '20.5px';
      barOne.classList.remove('bar-1-x');
      barTwo.classList.remove('bar-2-x');
      barThree.classList.remove('bar-3-x');
      barOne.classList.add('bar-1-y');
      barTwo.classList.add('bar-2-y');
      barThree.classList.add('bar-3-y');

      if (window.matchMedia("(max-width: 767px)").matches) {
        brainsterSidebar.innerHTML += `<a><button class="sidebtn-join join-form btn-reverse">+ ПРИКЛУЧИ СЕ</button></a>`
        brainsterSidebar.style.cssText = "height: 60vh; padding: 2rem 0;";
      }
    } else {
      brainsterSidebar.style.cssText = "height: 0; padding: 0;";
      openBtn.style.padding = '20.5px';
      barOne.classList.remove('bar-1-y');
      barTwo.classList.remove('bar-2-y');
      barThree.classList.remove('bar-3-y');
      barOne.classList.add('bar-1-x');
      barTwo.classList.add('bar-2-x');
      barThree.classList.add('bar-3-x');
      if (window.matchMedia("(max-width: 767px)").matches) {
        document.querySelector(".sidebtn-join").parentElement.remove()
      }
      checkNavState = false;
    }
  }
}

openBtn.addEventListener('click', openNav);
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('showAcademies')) {
    showEducationCaption()
  }
  if (e.target.classList.contains('showCompanies')) {
    showCompaniesCaption()
  }
  if (e.target.classList.contains('coworking-btn')) {
    coworkingWarning()
  }
  if (e.target.classList.contains('filterBtn')) {
    filterNavigationDesktop()
  }
  if (e.target.classList.contains('openFilter')) {
    filterNavigationMobile()
  }
  if (e.target.classList.contains('form-close')) {
    e.preventDefault()
    document.querySelector('.modal').classList.add('modal-slide-out');
    setTimeout(function () {
      document.querySelector('.modal').style.display = "none";
      document.querySelector('.modal-bg-opacity').remove();
    }, 400)
  }
  if (e.target.classList.contains('join-form')) {
    e.preventDefault()
    document.querySelector('#modal-container').innerHTML += joinForm()
    document.querySelector('.modal').classList.add('modal-slide-in');
    setTimeout(function () {
      document.querySelector('.modal').classList.remove('modal-slide-in');
    }, 400)
  }
  if (e.target.classList.contains('partner-form')) {
    e.preventDefault()
    document.querySelector('#modal-container').innerHTML += partnershipForm()
    document.querySelector('.modal').classList.add('modal-slide-in');
    setTimeout(function () {
      document.querySelector('.modal').classList.remove('modal-slide-in');
    }, 400)
  }
  if (e.target.classList.contains('innovations-form')) {
    e.preventDefault()
    document.querySelector('#modal-container').innerHTML += innovationsForm()
    document.querySelector('.modal').classList.add('modal-slide-in');
    setTimeout(function () {
      document.querySelector('.modal').classList.remove('modal-slide-in');
    }, 400)
  }
  if (e.target.classList.contains('join-form-submit')) {
    e.preventDefault();
    let joinName = document.querySelector('.join-name-input');
    let joinPhone = document.querySelector('.join-phone-input');
    let joinEmail = document.querySelector('.join-email-input');

    if (joinName.value == "") {
      document.querySelector('.name-warning').style.display = "block"
    }
    if (joinPhone.value == "") {
      document.querySelector('.phone-warning').style.display = "block"
    }
    if (joinEmail.value == "") {
      document.querySelector('.email-warning').style.display = "block"
    }
  }
  if (e.target.classList.contains('partner-form-submit')) {
    e.preventDefault();
    let nameInput = document.querySelector('.partner-name-input');
    let phoneInput = document.querySelector('.partner-phone-input');
    if (nameInput.value == "") {
      document.querySelector('.name-warning').style.display = "block"
    }
    if (phoneInput.value == "") {
      document.querySelector('.phone-warning').style.display = "block"
    }
  }
  if (e.target.classList.contains('innovation-form-submit')) {
    e.preventDefault();
    let innovationName = document.querySelector('.innovation-name-input');
    let innovationPhone = document.querySelector('.innovation-phone-input');
    let innovationMail = document.querySelector('.innovation-email-input');
    let innovationText = document.querySelector('.innovation-text-input')
    if (innovationName.value == "") {
      document.querySelector('.name-warning').style.display = "block"
    }
    if (innovationPhone.value == "") {
      document.querySelector('.phone-warning').style.display = "block"
    }
    if (innovationMail.value == "") {
      document.querySelector('.email-warning').style.display = "block"
    }
    if (innovationText.value == "") {
      document.querySelector('.text-warning').style.display = "block"
    }
  }
  if (e.target.classList.contains('name-input')) {
    document.querySelector('.name-warning').style.display = "none"
  }
  if (e.target.classList.contains('phone-input')) {
    document.querySelector('.phone-warning').style.display = "none"
  }
  if (e.target.classList.contains('email-input')) {
    document.querySelector('.email-warning').style.display = "none"
  }
  if (e.target.classList.contains('contact-info')) {
    let contactPopUp = document.querySelector('.contact-pop-up')
    if (popupState == true) {
      contactPopUp.classList.add('opacity-animation')
      setTimeout(function () {
        contactPopUp.style.opacity = '1';
        contactPopUp.classList.remove('opacity-animation')
        popupState = false;
      }, 400)
    } else {
      document.querySelector('.contact-pop-up').style.opacity = '0';
      popupState = true
    }
  }
})
