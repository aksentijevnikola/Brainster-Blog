
const blogCardContainer = document.querySelector('.blog-card-container');
const filterElements = document.querySelectorAll('.filter-wrapper aside');
const filterWrapper = document.querySelector('.filter-wrapper');
const filterBtnDesktop = document.querySelector('.filterBtn');
const filterBtnMobile = document.querySelector('.openFilter');
const filterNavigation = document.querySelector('.filter-navigation');
const filterAll = filterWrapper.querySelector('.filter-all');
const filterCareer = filterWrapper.querySelector('.filter-career');
const filterTechnology = filterWrapper.querySelector('.filter-technology');
const filterDataScience = filterWrapper.querySelector('.filter-data-science');
const filterMarketing = filterWrapper.querySelector('.filter-marketing');
const filterDesign = filterWrapper.querySelector('.filter-design');
const filterImpact = filterWrapper.querySelector('.filter-impact');
const slideContainer = document.querySelector('.slide-container');
const previousSlide = document.querySelector('.previous-slide');
const nextSlide = document.querySelector('.next-slide');
slidesRender();
blogCardRender();
let sliderInterval = setInterval(nextSlideInterval, 7000)
const slides = document.querySelectorAll('.slide');
let slideWidth = document.querySelector('.slide').getBoundingClientRect().width;
let slideCounter = 1;
let currentPage = 1
let slideCount = document.querySelector('.slide-count');
let filterState = true;
let activeFilter = true;


let setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
};

slides.forEach((el, index) => {setSlidePosition(el, index);})
slideContainer.style.transform = 'translateX(' + (-slideWidth * slideCounter) + 'px)';

function nextSlideInterval() {
    let allSlides = document.querySelectorAll('.slide')
    if (slideCounter >= allSlides.length - 1) return;
    slideContainer.style.transition = "transform 0.4s ease-in-out"
    slideCounter++;
    currentPage++
    if (currentPage > 9) {
        currentPage = 1;
        slideCount.innerText = `${currentPage}/9`
    } else {
        slideCount.innerText = `${currentPage}/9`
    }
    slideContainer.style.transform = 'translateX(' + (-slideWidth * slideCounter) + 'px)';
};

function blogCardRender() {
    blogCardContainer.innerHTML = ""
    blogCards.forEach(el => {
        blogCardContainer.innerHTML += blogCard(el.href, el.title, el.desc, el.label, el.img, el.alt);
    });
};

function filterCards(type, that) {
    blogCardContainer.innerHTML = "";
    blogCards.forEach(el => {
        if (el.id.split(", ").indexOf(type) > -1) {
            blogCardContainer.innerHTML += blogCard(el.href, el.title, el.desc, el.label, el.img, el.alt);
        }
    });
    filterElements.forEach(el => {
        if (el.classList.contains('current-filter')) {
            el.classList.remove('current-filter')
        }
    })
    that.classList.add('current-filter')
}

function filterNavigationDesktop() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        if (filterState == true) {
            document.querySelector('.filter-navigation').style.height = '75px';
            filterBtnDesktop.classList.add('active-filter')
            filterState = false;
        } else {
            document.querySelector('.filter-navigation').style.height = '0';
            filterBtnDesktop.classList.remove('active-filter')
            filterState = true;
        }
    }
}

function filterNavigationMobile() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (filterState == true) {
            filterNavigation.style.cssText = "height: 40vh; padding: 2rem 0;";
            filterState = false;
        } else {
            document.querySelector('.filter-navigation').style.height = '0';
            filterState = true;
        }
    }
}

function slidesRender () {
    let firstClone = slidesInfo[0]
    let lastClone = slidesInfo[slidesInfo.length - 1]
    slideContainer.innerHTML = "";
    slidesInfo.forEach(el => {
        slideContainer.innerHTML += renderSlide(el.img, el.alt, el.label, el.title, el.desc, el.href);
    })
    slideContainer.insertAdjacentHTML('afterbegin', renderSlide(lastClone.img, lastClone.alt, lastClone.label, lastClone.title, lastClone.desc, lastClone.href));
    slideContainer.innerHTML += renderSlide(firstClone.img, firstClone.alt, firstClone.label, firstClone.title, firstClone.desc, firstClone.href);
    let blogSlides = document.querySelectorAll('.slide')
    console.log(blogSlides)
    blogSlides[0].id = "lastClone"
    blogSlides[blogSlides.length - 1].id = "firstClone"
}

nextSlide.addEventListener('click', () => {
    let allSlides = document.querySelectorAll('.slide')
    if (slideCounter >= allSlides.length - 1) return;
    slideContainer.style.transition = "transform 0.4s ease-in-out"
    slideCounter++;
    currentPage++
    if (currentPage > 9) {
        currentPage = 1;
        slideCount.innerText = `${currentPage}/9`
    } else {
        slideCount.innerText = `${currentPage}/9`
    }
    slideContainer.style.transform = 'translateX(' + (-slideWidth * slideCounter) + 'px)';
    if (sliderInterval) {
        clearInterval(sliderInterval)
        sliderInterval = setInterval(nextSlideInterval, 7000)
    }
})

previousSlide.addEventListener('click', () => {
    if (slideCounter <= 0) return;
    slideContainer.style.transition = "transform 0.4s ease-in-out"
    slideCounter--;
    currentPage--;
    if (currentPage <= 0) {
        currentPage = 9;
        slideCount.innerText = `${currentPage}/9`
    } else {
        slideCount.innerText = `${currentPage}/9`
    }
    slideContainer.style.transform = 'translateX(' + (-slideWidth * slideCounter) + 'px)';
    if (sliderInterval) {
        clearInterval(sliderInterval)
        sliderInterval = setInterval(nextSlideInterval, 7000)
    }
})

slideContainer.addEventListener('transitionend', () => {
    let allSlides = document.querySelectorAll('.slide')
    if (allSlides[slideCounter].id === 'lastClone') {
        slideContainer.style.transition = "none"
        slideCounter = allSlides.length - 2;
        slideContainer.style.transform = 'translateX(' + (-slideWidth * slideCounter) + 'px)';
    }
    if (allSlides[slideCounter].id === 'firstClone') {
        slideContainer.style.transition = "none"
        slideCounter = allSlides.length - slideCounter;
        slideContainer.style.transform = 'translateX(' + (-slideWidth * slideCounter) + 'px)';
    }
})

filterAll.addEventListener('click', function () {
    blogCardRender()
    filterElements.forEach(el => {
        if (el.classList.contains('current-filter')) {
            el.classList.remove('current-filter')
        }
    })
    this.classList.add('current-filter')
})
filterCareer.addEventListener('click', function () { filterCards(`career`, this) })
filterTechnology.addEventListener('click', function () { filterCards(`technology`, this) })
filterDataScience.addEventListener('click', function () { filterCards(`data-science`, this) })
filterMarketing.addEventListener('click', function () { filterCards(`marketing`, this) })
filterDesign.addEventListener('click', function () { filterCards(`design`, this) })
filterImpact.addEventListener('click', function () { filterCards(`impact`, this) })
