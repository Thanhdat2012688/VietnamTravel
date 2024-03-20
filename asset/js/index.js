
 // Event click on icon-search
 var searchBoxElemment = document.querySelector('.search-box');
 var inputElement = document.querySelector('.input-search');
 var buttonSearch = document.querySelector('.submit-btn');
 
    buttonSearch.onclick = function() {
     searchBoxElemment.classList.toggle('open');
    }



// Slider-Banner

const bannerMain = document.querySelector('.wrapper-main');
const bannerItems = document.querySelectorAll('.wrapper-main-item');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const dotList = document.querySelectorAll('.slider-dot-item');

const bannerItemsWidth = bannerItems[0].offsetWidth;
const bannerItemsLength = bannerItems.length;

let bannerIndex = 0;
let positionBannerX = 0;

                    // xử lí slider với dots
 
    [...dotList].forEach(function(dot) {
        dot.addEventListener('click', function(e) {
            [...dotList].forEach(function(dot) {
                dot.classList.remove('slider-dot-item-active');
            })
            e.target.classList.add('slider-dot-item-active');
            bannerIndex = parseInt(e.target.dataset.index);
            positionBannerX = -1 * bannerIndex * bannerItemsWidth;
            bannerMain.style.transform = `translateX(${positionBannerX}px)`
        })
    });                

                    // Xử lí slider với prevBtn và nextBtn

    nextBtn.onclick = function() {
        handleChangeBanner(1)
    }

    prevBtn.onclick = function() {
        handleChangeBanner(-1)
    }

    function handleChangeBanner(params) {
        if(params == 1) {
            if(bannerIndex >= bannerItemsLength - 1) {
                bannerIndex = bannerItemsLength - 1;
                return;
            }
            bannerIndex++;
            positionBannerX = positionBannerX - bannerItemsWidth;
            bannerMain.style.transform = `translateX(${positionBannerX}px)`;
        }else if(params == -1) {
            if( bannerIndex <= 0) {
                bannerIndex = 0;
                return;
            }
            bannerIndex--;
            positionBannerX = positionBannerX + bannerItemsWidth;
            bannerMain.style.transform = `translateX(${positionBannerX}px)`;
        }
                    //xử lí click btn tương ứng với click dot
        [...dotList].forEach(function(dot) {
            dot.classList.remove('slider-dot-item-active');
        });
        dotList[bannerIndex].classList.add('slider-dot-item-active');
    }


// Event in button arrow-down in form suggest

var arrowElements = document.querySelectorAll('.form-arrow-down');
var formDestination = document.querySelector('.form-item-list-destination');
var formDuration = document.querySelector('.form-item-list-duration');
var formBlock = true;

arrowElements[0].onclick = function() {
    if(formBlock) {
        formDestination.style.display = 'block';
        formDestination.classList.toggle('form-full');
        formBlock = false;
    }else {
        formDestination.style.display = 'none';
        formBlock = true;
    }
}

arrowElements[1].onclick = function() {
    if(formBlock) {
        formDuration.style.display = 'block';
        formBlock = false;
    }else {
        formDuration.style.display = 'none';
        formBlock = true;
    }
}



// Xử lí sự kiện onmouseover lên item phần cẩm nang du lịch

const backgroundItem = document.querySelector('.handbook-item-content-img');
const backgroundName = document.querySelector('.handbook-item-content-link-title');
const backgroundTime = document.querySelector('.handbook-item-content-parameter-time');
const backgroundInteractive = document.querySelector('.handbook-item-content-parameter-interactive');

const itemImages = document.querySelectorAll('.handbook-item-avatar');
const itemNames = document.querySelectorAll('.handbook-item-name');
const itemTimes = document.querySelectorAll('#time');
const itemInteractives = document.querySelectorAll('#interactive');

  
function changeData(previewPic) {
    var imageSrc = previewPic.src;
    var imageAlt = previewPic.alt;
    backgroundItem.setAttribute('src', imageSrc); //có thể dùng backgroundItem.src = imageSrc cho nhanh cũng được.
    backgroundName.innerHTML =  imageAlt;
    backgroundTime.innerHTML = previewPic.parentElement.querySelector('.time').textContent;
    backgroundInteractive.innerHTML = previewPic.parentElement.querySelector('.interactive').textContent;
};

// Cách 2 sử dụng vòng lặp giải quyết trực tiếp
    [...itemImages].forEach(function(item) {
        item.onclick = function() {
            backgroundItem.src = item.src;
            backgroundName.innerHTML = item.parentElement.querySelector('.handbook-item-name').textContent;
            backgroundTime.innerHTML = item.parentElement.querySelector('.time').textContent;
            backgroundInteractive.innerHTML = item.parentElement.querySelector('.interactive').textContent;
        }
    })

//  Code handbook slider item

const handbookSlider = document.querySelector('.handbook-slider');
const sliderMain = document.querySelector('.slider-main');
const sliderItems = document.querySelectorAll('.slider-main-item');
const dotItems = document.querySelectorAll('.slider-dots-item');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');

const sliderLength = sliderItems.length;
const sliderItemWidth = sliderItems[0].offsetWidth;

let positionX = 0;
let index = 0;

sliderNext.addEventListener('click',function() {
    handleChangeSlider(1);
});

sliderPrev.addEventListener('click',function() {
    handleChangeSlider(-1);
});

[...dotItems].forEach(function(item) {
    item.addEventListener('click', function(e) {
        [...dotItems].forEach(function(dotItem) {
            dotItem.classList.remove('dot-item-active');
        })
        e.target.classList.add('dot-item-active');
        var indexDot = parseInt(e.target.dataset.index);
        index = indexDot;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    })
})

function handleChangeSlider(direction) {
    if(direction == 1) {
        index++;
        if(index >= sliderLength) {
            index = sliderLength - 1;
            return;
        }
        positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
    }else if(direction == -1) {
        index--;
        if(index <= -1) {
            index = 0;
            return;
        }
        positionX = positionX + sliderItemWidth;
        sliderMain.style.transform = `translateX(${positionX}px)`;
    }
    [...dotItems].forEach(function(dotItem) {
        dotItem.classList.remove('dot-item-active');
    })
    dotItems[index].classList.add('dot-item-active');
}


// Xử lí control video khi ấn player --> chưa được tối ưu hóa, nên áp dụng pr = this

const productElements = document.querySelectorAll('.product-item');
const overlayElements = document.querySelectorAll('.product-item-overlay');
const videoElements = document.querySelectorAll('.product-item-video');
const backgroudElements = document.querySelectorAll('.product-item-img');
const playBtns = document.querySelectorAll('.product-item-control');

    productElements[0].onmouseover = function() {
        overlayElements[0].style.display = 'none';
        videoElements[0].style.zIndex = 10;
        videoElements[0].style.autoplay = true; 
    }
    productElements[0].onmouseout = function() {
        overlayElements[0].style.display = 'block';
        videoElements[0].style.zIndex = 1;
        videoElements[0].style.autoplay = false; 
    }

    productElements[1].onmouseover = function() {
        overlayElements[1].style.display = 'none';
        videoElements[1].style.zIndex = 10;
        videoElements[1].style.autoplay = true; 
    }
    productElements[1].onmouseout = function() {
        overlayElements[1].style.display = 'block';
        videoElements[1].style.zIndex = 1;
        videoElements[1].style.autoplay = false; 
    }

    productElements[2].onmouseover = function() {
        overlayElements[2].style.display = 'none';
        videoElements[2].style.zIndex = 10;
        videoElements[2].style.autoplay = true; 
    }
    productElements[2].onmouseout = function() {
        overlayElements[2].style.display = 'block';
        videoElements[2].style.zIndex = 1;
        videoElements[2].style.autoplay = false; 
    }

    productElements[3].onmouseover = function() {
        overlayElements[3].style.display = 'none';
        videoElements[3].style.zIndex = 10;
        videoElements[3].style.autoplay = true; 
    }
    productElements[3].onmouseout = function() {
        overlayElements[3].style.display = 'block';
        videoElements[3].style.zIndex = 1;
        videoElements[3].style.autoplay = false; 
    }

// xử lí slider review
    
const reviewMain = document.querySelector('.review-slider-wrapper-main');
const reviewItems = document.querySelectorAll('.review-slider-wrapper-main-item');
const reviewDots = document.querySelectorAll('.review-dot-item');

const reviewItemsLength = reviewItems.length;
const reviewItemsWidth = reviewItems[0].offsetWidth;

let positionMainX = 0;

[...reviewDots].forEach(function(item) {
    item.addEventListener('click', function(e) {
        [...reviewDots].forEach(function(dot) {
            dot.classList.remove('review-dot-item-active');
        })
        e.target.classList.add('review-dot-item-active');
        var indexDotItem = parseInt(e.target.dataset.index);
        positionMainX = -1 * indexDotItem * reviewItemsWidth;
        reviewMain.style.transform = `translateX(${positionMainX}px)`;
    })
})



// xử lí form đăng kí ở footer l

const nextBtns = document.querySelectorAll('.next');
const backBtns = document.querySelectorAll('.back');
const form1 = document.querySelector('.form-1');
const form2 = document.querySelector('.form-2');
const form3 = document.querySelector('.form-3');
const stepColor = document.querySelector('.step-color');

nextBtns[0].onclick = function() {
    form1.style.left = '240px';
    form2.style.left = '0px';
    stepColor.style.width = '150px';
}


nextBtns[1].onclick = function() {
    form2.style.left = '240px';
    form3.style.left = '0px';
    stepColor.style.width = '240px';
}

backBtns[0].onclick = function() {
    form1.style.left = '0px';
    form2.style.left = '-240px';
    stepColor.style.width = '70px';
}


backBtns[1].onclick = function() {
    form2.style.left = '0px';
    form3.style.left = '-240px';
    stepColor.style.width = '150px';
}

// Vlaidate event on icon input

const iconPwd = document.querySelector('.icon-pwd');
const inputItem = document.querySelector('.input-pwd');
let type = true;

iconPwd.addEventListener('click', (e) => {
    if(type) {
        inputItem.type = 'text';
        type = false;
    }else {
        inputItem.type = 'password';
        type = true;
    }
})

// Xử lí header-mobile

const barsBtn = document.querySelector('.header-mobile-bars');
const headerMobileNavbar = document.querySelector('.header-mobile-lits');
const closeheaderNavbar = document.querySelector('.header-mobile-lits-close');
const  overlayHeader = document.querySelector(' .header-over-lay');

barsBtn.addEventListener('click', () => {
    headerMobileNavbar.style.animation = "navbarFadeIn 0.5s linear forwards";
    overlayHeader.style.display = 'block';
})

closeheaderNavbar.addEventListener('click', () => {
    headerMobileNavbar.style.animation = `navbarFadeOut 0.25s linear forwards`;
    overlayHeader.style.display = 'none';
})

overlayHeader.addEventListener('click', () => {
    headerMobileNavbar.style.animation = `navbarFadeOut 0.25s linear forwards`;
    overlayHeader.style.display = 'none';
})