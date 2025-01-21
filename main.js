let boxBrands = document.querySelector('.section__brandsbox');
let showAllBtn = document.querySelector('.section__showall-btn');
let windowWidth = document.documentElement.clientWidth;

showAllBtn.addEventListener('click', function() {
    
    if (windowWidth < 1119.5 && showAllBtn.textContent === 'Показать всё') {
        boxBrands.classList.add('brandsbox-height1');
        showAllBtn.textContent = 'Скрыть' ;
        showAllBtn.classList.add('section__showall-btn--Up');
        }
    else if (windowWidth > 1119.5 && showAllBtn.textContent === 'Показать всё') {
        boxBrands.classList.add('brandsbox-height2');
        showAllBtn.textContent = 'Скрыть' ;
        showAllBtn.classList.add('section__showall-btn--Up');
        }  
    else if (windowWidth < 1119.5 && showAllBtn.textContent === 'Скрыть') {
            boxBrands.classList.remove('brandsbox-height1'); 
            showAllBtn.textContent = 'Показать всё'; 
            showAllBtn.classList.remove('section__showall-btn--Up');   
        }
    else if (windowWidth > 1119.5 && showAllBtn.textContent === 'Скрыть') {
        boxBrands.classList.remove('brandsbox-height2');
        showAllBtn.textContent = 'Показать всё'; 
        showAllBtn.classList.remove('section__showall-btn--Up');     
        }
        
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.25, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      ckickable: true,
    },
   
    breakpoints: { 320: { enabled: true, }, 768: { enabled: false, }}
});


