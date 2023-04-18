var name ="Maksym";  /*  устаревший вариант */

let number = 7;    /* если число поменяется */
const pi = 3.14;   /*  если число не будет меняться */

number = 4;
let leftBorderWidth;       /*   пример undefined */

/* number (salarz, amount, etc) */
/* string  любая информация, которую можно описать словами ( "",'',``) */
/* булиновый или логический тип данных (true/false) */ /* . Если модальное откурыто получим тру , если нет - получим фолс. */
/* null ( то, чего не существует: страница и т.п.) */
/* underfined  ( файл существует , но значения никакого не имеет) */
/* object (obj) (комплексный тип данных) может включать в сеяб все типы данных */
/*  let obj ={
    name: 'apple',
    color: 'green',
    weight:200

} */
/* Symbol  */

/* alert(123) */

/* console.log(number) */
/* let answer = confirm("вам есть 18");
console.log(answer); */
/* let answer = prompt("вам есть 18", "");
console.log(answer);
 */
/* console.log(4+4) */
/* Так же есть операторы( +,-,* :) */
/* но есть и логические операторы - and, or (&&, || ) */
/* let isChecked = true,
    isClose = false; */
/* console.log(isChecked && isClose); */
/* console.log(isChecked || isClose)    */ 
/* условия */
/* if (2*6 == 8*1) {
    console.log('Верно')
} else {
    console.log('Ошибка') */
/* } */
/* let answer = confirm("вам есть 18");
if (answer) {
    console.log('Проходите')
} else {
    console.log('Не проходи')
} */

/* const num = 50;
if (num < 49) {
    console.log('неправильно')
} else if (num > 100) {
    console.log('много')
} else {
    console.log('Верно')
} */

/* Циклы */

/* for (let i = 1; i<8; i++) {
    console.log(i);
} */

/* Функции */
/* 
function logging(a, b) {
    console.log(a + b)
}

logging(3, 5);

logging(6, 8);

 */


/*  $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/chevron/left-solid.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/chevron/right-solid.svg"></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                }
            }
        ]
      });
  }); */

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click',  function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click',  function () {
    slider.goTo('next');
  });
        
  

    
  
/*   $(function() {
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  $('.catalog-item__link').each(function*(i) {
    $(this).on('click', function(e){
        e.prevent.Default();
        $('catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  }) 

  
});   */

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');
/* modal */

$('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
});
$('modal-close').on('click', function(){
    $('.overlay, #consultation. #order, #thanks').fadeOut('slow');
});


$('button-mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle') .eq(i).text());
        $('.overlay, #order' ).fadeIn('slow');
    });
});

/* }); */

/* modal */



