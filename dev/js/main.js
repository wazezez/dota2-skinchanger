let App = {
  /**
   * @module       Card
   * @description  Инициализация поиска типа кредитной карты по номеру
   */
  initCardInfo: function () {
    CardInfo.setDefaultOptions({
      banksLogosPath: '/images/banks-logos/',
      brandsLogosPath: '/images/brands-logos/'
    });
    $(document).ready(function(){
      $('.js-credit-card-number').mask("9999 9999 9999 9999", {
        placeholder:" ",
        completed:function() {
          let cardInfo = new CardInfo(this.val());
          $('.js-creditcard-logo').attr('alt',cardInfo.bankName);
          $('.js-creditcard-logo').attr('src',cardInfo.brandLogo);
        }
      });
    });
  },

  /**
   * @module       Mask
   * @description  Инициализация масок
   */
  initMasks: function (){
    $('.js-date-mask').mask("99",{placeholder:" ",});
    $('.js-cvv-mask').mask("999",{placeholder:" ",});
  },

  /**
   * @module       Handlers
   * @description  Инициализация обработчиков
   */
  initHandlers: function () {

    // ------
    // Обработка клика по ,ehuth меню
    // ------
    $('.js-burger').click(function(){
      let menu = $(this).attr('data-toggle')
      let status = $(this).attr('data-status');
      if (status =='closed') {
        $(this).addClass('open');
        $(this).attr('data-status','opened');
        $(menu).addClass('page-header__menu--show');
      } else {
        $(this).attr('data-status','closed');
        $(this).removeClass('open');
        $(menu).removeClass('page-header__menu--show');
      }
    });
    // ------
    // Обработка клика по кнопке показа формы
    // ------
    $('.js-show-cardform').on('click',function(e){
      e.preventDefault();
      $('.orderform__cardpay').addClass('orderform__cardpay--active');
    });

    // ------
    // Обработка ввода данных в поле ввода почты
    // ------
    $('#order-usermail').on('change keyup',function(){
      if (this.value.length > 1) {
        $('.orderform__creditbutton,.orderform__gpaybutton').prop('disabled',false);
      } else {
        $('.orderform__creditbutton,.orderform__gpaybutton').prop('disabled',true);
      }
    });
    // ------
    // Обработка ввода данных в поле ввода почты
    // ------
    $('.popup__close').on('click',function(){
      let popup = $(this).attr('data-popup');
      $(popup).removeClass('popup-wrapper--visible');
    });

    $('[data-open="modal"]').on('click',function () {
      let modal = $(this).attr('data-target');
      $('.popup').removeClass('popup-wrapper--visible');
      $(modal).addClass('popup-wrapper--visible');
    });

    /**
     * @description  Кнопка прокрутки слайдов
     */
    $('.js-slider-show-prev').on('click',function(){
      let slider = $(this).attr('data-slider');
      $(slider).slick("slickPrev");
    });
    $('.js-slider-show-next').on('click',function(){
      let slider = $(this).attr('data-slider');
      $(slider).slick("slickNext");
    });
  },
  initSliders: function () {
    $('#hero-slider').slick({
      slidesToShow: 1,
      inifinite: true,
      arrows:false,
      dots:false,
      autoplay:true,
      autoplaySpeed: 5000,

    });
  },
  /**
   * @module       Init
   * @description  Инициализация основных модулей
   */
  init: function(){
    this.initHandlers();
    this.initSliders();
    this.initMasks();
    this.initCardInfo();
  }
}
