var jwsThemeModule;(function($){"use strict";jwsThemeModule=(function(){return{jws_script:jws_script,init:function(){this.form_request();this.login_form();this.header_sticky();this.menu_level();this.post_gallery();this.post_related();this.menu_mobile();this.scrollTop();this.menu_list();this.mobile_default();this.menu_offset();this.video_popup();this.jws_theme_newsletter();this.animate();this.contact_form_loading();this.post_audio_play()},form_request:function(){$('select').select2()},animate:function(){var $container=$('.single-projects-container');$container.find('.jws_portfolio_wap').each(function(i){var element=$(this);element.css('opacity',0);new Waypoint({element:element[0],handler:function(direction){element.clearQueue().delay(100*i).queue(function(){element.addClass("animated");element.css('opacity',1)})},offset:'60%'})})},contact_form_loading:function(){$(document).on('click','.wpcf7-submit',function(){if(!$(this).parents('.wpcf7-form').find('.loader').length){$(this).parents('.wpcf7-form').append('<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>')}})},jws_carousel:function($scope,$){$scope.find('.jws-carousel').eq(0).each(function(){var $this=$(this);$this.not('.slick-initialized').slick({prevArrow:$('.jws-nav-carousel').find('.jws-button-prev'),nextArrow:$('.jws-nav-carousel').find('.jws-button-next'),swipeToSlide:!0,appendDots:$('.slider-dots-box'),dotsClass:'slider-dots'})})},init_jws_notices:function(){$('body').on('click','.ion-android-close',function(e){e.preventDefault();var _this=$(this).parents('[role="alert"]');_this.remove()})},jws_theme_newsletter:function(){var _send_mail=$('.jws-newsletter-popup');if(_send_mail.length===0||typeof Cookies===undefined)return;var _ckie_popup=Cookies.get('ckie_popup');if(_ckie_popup!=='true'){setTimeout(function(){jws_content_newsletter()},6000)}
$('.sub-new-nothank').on('click',function(){Cookies.set('ckie_popup',!0,{expires:1,path:'/'});setTimeout(function(){$.magnificPopup.close()},300)});function jws_content_newsletter(){$.magnificPopup.open({items:{src:'.jws-newsletter-popup'},type:'inline',mainClass:'mfp-fade',removalDelay:160,disableOn:!1,preloader:!1,fixedContentPos:!0,overflowY:'scroll',callbacks:{beforeOpen:function(){this.st.mainClass='quick-view-main'},open:function(){$(window).resize()},},})}},menu_list:function(){$(document).on("click",'body[data-elementor-device-mode="mobile"] .jws-menu-list.toggle-mobile .menu-list-title',function(){$(this).next('ul').slideToggle()})},post_related:function(){$('.post_related_slider').not('.slick-initialized').slick({dots:!1,arrows:!0,swipeToSlide:!0,prevArrow:'<span class="jws-carousel-btn prev-item"><i class="ion-ios-arrow-thin-right"></i></span>',nextArrow:'<span class="jws-carousel-btn next-item "><i class="ion-ios-arrow-thin-right"></i></span>',})},header_sticky:function(){if($('.cafe-row-sticky')[0]){$('.cafe-row-sticky').each(function(){var $this=$(this);var $sidebar=$('.jws_sticky_move');var $parent=$(this).parent();var current_width=0;$(window).resize(function(){if(current_width!=$(window).width()){current_width=$(window).outerWidth();$parent.height('');if(current_width>1024.98&&$this.hasClass('desktop-sticky')){$parent.height($this.outerHeight())}else if(current_width<1024.98&&current_width>768.98&&$this.hasClass('tablet-sticky')){$parent.height($this.outerHeight())}else if(current_width<768.98&&$this.hasClass('mobile-sticky')){$parent.height($this.outerHeight())}else{$this.removeClass('is-sticky');$this.find('.elementor-widget-clever-site-logo').removeClass('header-is-sticky')}
$parent.addClass('installed')}}).resize();var HeaderTop=$parent.offset().top-$('body').offset().top+200;var old_top_position=0;$(window).on('scroll',function(){if($parent.hasClass('installed')){var top=$(window).scrollTop();if($this.hasClass('cafe-scroll-up-sticky')){top=top-$parent.outerHeight();if(old_top_position>top&&top>$parent.outerHeight()*3){$this.not('.active-sticky').addClass('active-sticky');$this.removeClass('no-active-sticky');$sidebar.removeClass('no-active-sticky')}else{$this.removeClass('active-sticky');if($this.hasClass('is-sticky')){$this.addClass('no-active-sticky');$sidebar.addClass('no-active-sticky')}}
old_top_position=top}
if(current_width>1024.98&&$this.hasClass('desktop-sticky')){if(HeaderTop<top){$this.not('.is-sticky').addClass('is-sticky');$this.find('.elementor-widget-clever-site-logo:not(.header-is-sticky)').addClass('header-is-sticky');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').removeClass('toggle-active');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideUp()}else{$this.removeClass('is-sticky');$this.removeClass('no-active-sticky');$sidebar.removeClass('no-active-sticky');$this.find('.elementor-widget-clever-site-logo').removeClass('header-is-sticky');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').addClass('toggle-active');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideDown()}}else if(current_width<1024.98&&current_width>768.98&&$this.hasClass('tablet-sticky')){if(HeaderTop<top){$this.not('.is-sticky').addClass('is-sticky');$this.find('.elementor-widget-clever-site-logo').addClass('header-is-sticky');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').removeClass('toggle-active');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideUp()}else{$this.removeClass('is-sticky');$this.removeClass('no-active-sticky');$sidebar.removeClass('no-active-sticky');$this.find('.elementor-widget-clever-site-logo').removeClass('header-is-sticky');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').addClass('toggle-active');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideDown()}}else if(current_width<768.98&&$this.hasClass('mobile-sticky')){if(HeaderTop<top){$this.not('.is-sticky').addClass('is-sticky');$this.find('.elementor-widget-clever-site-logo:not(.header-is-sticky)').addClass('header-is-sticky');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').removeClass('toggle-active');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideUp()}else{$this.removeClass('is-sticky');$this.removeClass('no-active-sticky');$sidebar.removeClass('no-active-sticky');$this.find('.elementor-widget-clever-site-logo.header-is-sticky').removeClass('header-is-sticky');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').addClass('toggle-active');$('.cafe-wrap-menu .toggle .arrow.on-scroll').parents('.cafe-wrap-menu').find('.wrap-menu-inner').slideDown()}}}})})}},menu_level:function(){var body=$("body"),dropDownCat=$(".elementor_jws_menu_layout_menu_level .menu-item-has-children ,.elementor_jws_menu_layout_menu_level .menu_has_shortcode"),elementIcon='<button class="btn-sub-menu ion-android-arrow-dropright"></button>',elementbutton_submenu='<li><span class="btn-sub-menu-back"><i class="ion-android-arrow-dropleft"></i>'+jws_script.back+'</span></li>',butOpener=$(".btn-sub-menu");dropDownCat.find('> a').append(elementIcon);$(elementbutton_submenu).prependTo(dropDownCat.find('> .sub-menu'));if(dropDownCat.hasClass("active")){dropDownCat.addClass("active")}
$(document).on("click",".elementor_jws_menu_layout_menu_level .btn-sub-menu",function(e){e.preventDefault();var $parent=$(this).closest('li').find('> .sub-menu');$(this).parents('.jws_main_menu_inner').height($parent.height());$parent.parent().parent().find('> li > a').css({"transform":"translate3d(-25px, 0, 0)","opacity":"0"});setTimeout(function(){$parent.addClass('active');$parent.find("> li > a").css({"transform":"translate3d(0, 0, 0)","opacity":"1"})},300);$parent.find("> li > a").addClass('show')});$(document).on("click",".elementor_jws_menu_layout_menu_level .btn-sub-menu-back",function(e){e.preventDefault();var $parent=$(this).parent().parent();var $this=$(this);$($parent.find("> li > a").get().reverse()).removeClass('show');$($parent.find("> li > a").get().reverse()).css({"transform":"translate3d(-25px, 0 , 0)","opacity":"0"});if($parent.find('.show').length<1){$parent.removeClass("active");setTimeout(function(){if($parent.parent().parent().hasClass('nav')){$this.parents('.jws_main_menu_inner').height($this.parents('.nav').height())}else{$this.parents('.jws_main_menu_inner').height($parent.parent().parent().height())}
$parent.parent().parent().find('> li > a').css({"transform":"translate3d(0, 0, 0)","opacity":"1"})},300)}})},post_audio_play:function(){var players=$('audio.blog-audio-player');if(players.length){players.mediaelementplayer({audioWidth:'100%'})}},mobile_default:function(){$('body').on('click','.jws-tiger-mobile,.overlay',function(){$(this).parents('.elemetor-menu-mobile').toggleClass('active')})},handlePopup:function(data){$(data).each(function(){$(this).addClass('visible');$(this).find('.btn-loading-disabled').addClass('btn-loading')})},scrollTop:function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('.backToTop').addClass('totop-show')}else{$('.backToTop').removeClass('totop-show')}});$('.backToTop').on("click",function(){$('html, body').animate({scrollTop:0},1000);return!1})},video_popup:function(){$('.video_format').eq(0).each(function(){$('.video_format').magnificPopup({delegate:'a',type:'image',removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass='mfp-zoom-in'},elementParse:function(item){item.type='iframe',item.iframe={patterns:{youtube:{index:'youtube.com/',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'}}}}},})})},post_gallery:function(){if($('.jws-post-gallery .jws-popup-global').length>0){$('.jws-post-gallery').lightGallery({thumbnail:!0,selector:'.jws-popup-global'})}
if($('.post-image-slider').hasClass('horizontal_slider_content')){$('.post-image-slider').not('.slick-initialized').slick({pauseOnHover:!0,autoplay:!0,variableWidth:!0,dots:!1,arrows:!0,prevArrow:'<span class="jws-carousel-btn prev-item"><i class="ion-ios-arrow-thin-left"></i></span>',nextArrow:'<span class="jws-carousel-btn next-item "><i class="ion-ios-arrow-thin-right"></i></span>',})}else{$('.post-image-slider').not('.slick-initialized').slick({swipeToSlide:!0,dots:!1,arrows:!0,prevArrow:'<span class="jws-carousel-btn prev-item"><i class="ion-ios-arrow-thin-left"></i></span>',nextArrow:'<span class="jws-carousel-btn next-item "><i class="ion-ios-arrow-thin-right"></i></span>',})}
$('.main-gallery-image-slider').slick({pauseOnHover:!0,arrows:!1,fade:!0,asNavFor:'.thumbnail-slider',autoplay:!0,autoplaySpeed:5000,infinite:!0,});$('.thumbnail-slider').slick({pauseOnHover:!0,slidesToShow:4,slidesToScroll:1,asNavFor:'.main-gallery-image-slider',centerMode:!0,focusOnSelect:!0,centerPadding:'0px',prevArrow:'<span class="jws-carousel-btn prev-item"><i class="ion-ios-arrow-thin-left"></i></span>',nextArrow:'<span class="jws-carousel-btn next-item "><i class="ion-ios-arrow-thin-right"></i></span>',autoplay:!0,autoplaySpeed:5000,infinite:!0,responsive:[{breakpoint:993,settings:{slidesToShow:3,slidesToScroll:1,}},]})},menu_offset:function(){var setOffset=function(li,$menu){var $dropdown=li;var dropdownWidth=$dropdown.outerWidth();var dropdownOffset=$menu.offset();var toRight;var viewportWidth;var dropdownOffset2;var dropdownOffsetRight;var $dropdown_parent=$dropdown.parents('.elementor-column').offset();var before_menu=$dropdown.find('.before-menu');viewportWidth=$(document).width();if(!dropdownWidth||!dropdownOffset){return}
dropdownOffsetRight=viewportWidth-dropdownOffset.left-dropdownWidth;if($dropdown.hasClass('mega_menu')){if(viewportWidth<dropdownWidth){$menu.addClass('fullwidth');dropdownOffsetRight=-dropdownOffset.left}else{$menu.removeClass('fullwidth')}
if($dropdown.hasClass('left')){if(dropdownOffsetRight<0){$dropdown.css({left:dropdownOffsetRight})}else{$dropdown.css({left:0})}}
dropdownOffset2=$dropdown.offset();before_menu.css({left:$menu.find('> a > span').offset().left-dropdownOffset2.left+$menu.find('> a > span').outerWidth()/2})}};$('.elementor_jws_menu_layout_menu_horizontal li.menu-item-design-mega_menu_full_width , .elementor_jws_menu_layout_menu_horizontal li.menu-item-design-mega_menu').each(function(){var $menu=$(this);$menu.find(' > .sub-menu-dropdown').each(function(){setOffset($(this),$menu)})})},menu_mobile:function(){var dropDownCat=$(".elementor_jws_menu_layout_menu_vertical .menu-item-has-children"),elementIcon='<button class="btn-sub-menu ion-ios-arrow-down"></button>';$(elementIcon).insertAfter(dropDownCat.find('> a'));if(dropDownCat.hasClass("active")){dropDownCat.addClass("active")}
$(document).on("click",".elementor_jws_menu_layout_menu_vertical .btn-sub-menu",function(e){e.preventDefault();$(this).parent().siblings().removeClass('active');$(this).parent().siblings().find("> ul,.sub-menu-dropdown").slideUp(320);$(this).parent().find("> ul").slideToggle(320);$(this).parent().find(".sub-menu-dropdown").slideToggle(320);if($(this).parent().hasClass('active')){$(this).parent().removeClass('active')}else{$(this).parent().addClass('active')}})},login_form:function(){$('.jws-open-login:not(.logged)').on('click',function(e){event.preventDefault();$('.jws-form-login-popup').addClass('open');$('.jws-offcanvas').removeClass('jws-offcanvas-show');$('.jws-offcanvas-trigger').removeClass('active')});$('.jws-close , .jws-form-overlay').on('click',function(e){$('.jws-form-login-popup').removeClass('open')});$('.jws_toolbar_search').on('click',function(e){e.preventDefault();$('.form_content_popup').addClass('open')});$('.jws-login-form').each(function(){var $this=$(this);if(!$('.form-contaier').hasClass('url')){$this.find('.form-contaier').not('.slick-initialized').slick({swipeToSlide:!0,dots:!1,arrows:!1,adaptiveHeight:!0,infinite:!1,swipe:!1})}
$(this).find('form[name=loginpopopform]').on('submit',function(event){event.preventDefault();var valid=!0,email_valid=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;$(this).find('.error').remove();$(this).find('input.required').each(function(){if(!$(this).val()){$(this).addClass('invalid');if($(this).attr('name')=='log'){$(this).after('<span class="error">Please enter your email</span>')}
if($(this).attr('name')=='pwd'){$(this).after('<span class="error">Please enter your Password</span>')}
valid=!1}
if($(this).is(':checkbox')&&!$(this).is(':checked')){$(this).addClass('invalid');valid=!1}
if('email'===$(this).attr('type')){if(!email_valid.test($(this).val())){$(this).addClass('invalid');valid=!1}}});$(this).find('input.required').on('focus',function(){$(this).removeClass('invalid')});if(!valid){return valid}
var form=$(this),$elem=$this.find('.jws-login-container'),wp_submit=$elem.find('input[type=submit]').val();if(!$elem.find('.loader').length){$elem.append('<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>')}
$elem.addClass('loading');$elem.find('.jws-login .popup-message').slideUp();$elem.find('.message').slideDown().remove();if(!$('.form-contaier').hasClass('url')){setTimeout(function(){$this.find('.form-contaier')[0].slick.animateHeight()},500)}
var data={action:'jws_login_ajax',data:form.serialize()+'&wp-submit='+wp_submit,};$.post(jwsThemeModule.jws_script.ajax_url,data,function(response){if(response.data.code=='1'){if(response.data.redirect){if(window.location.href==response.data.redirect){location.reload()}else{window.location.href=response.data.redirect}}else{location.reload()}
$elem.find('.jws-login .popup-message').removeClass('woocommerce-info').addClass('woocommerce-message')}else{$elem.find('.jws-login .popup-message').addClass('woocommerce-info')}
$elem.find('.jws-login .popup-message').html(response.data.message).slideDown();$elem.removeClass('loading');if(!$('.form-contaier').hasClass('url')){setTimeout(function(){$this.find('.form-contaier')[0].slick.animateHeight()},500)}});return!1});$(this).find('form[name=registerformpopup]').on('submit',function(e){e.preventDefault();var valid=!0,email_valid=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;$(this).find('input.required').each(function(){if(!$(this).val()){$(this).addClass('invalid')}
if($(this).is(':checkbox')&&!$(this).is(':checked')){$(this).addClass('invalid')}
if('email'===$(this).attr('type')){if(!email_valid.test($(this).val())){$(this).addClass('invalid')}}});$(this).find('input.required').on('focus',function(){$(this).removeClass('invalid')});if(!valid){return valid}
var $form=$(this),data={action:'jws_register_ajax',data:$form.serialize()+'&wp-submit='+$form.find('input[type=submit]').val(),register_security:$form.find('#register_security').val(),},$elem=$('#jws-login-form .jws-login-container');if(!$elem.find('.loader').length){$elem.append('<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>')}
$elem.addClass('loading');$elem.find('.jws-register .popup-message').slideUp();$elem.find('.message').slideDown().remove();setTimeout(function(){var $formContainer=$this.find('.form-contaier');if($formContainer.length>0&&typeof $formContainer[0].slick!=='undefined'){$formContainer[0].slick.animateHeight()}},500);$.ajax({type:'POST',url:jwsThemeModule.jws_script.ajax_url,data:data,success:function(response){$elem.removeClass('loading');if(response.data.code=='1'){if(response.data.redirect){if(window.location.href==response.data.redirect){location.reload()}else{window.location.href=response.data.redirect}}else{location.reload()}
$elem.find('.jws-register .popup-message').removeClass('woocommerce-info').addClass('woocommerce-message')}else{$elem.find('.jws-register .popup-message').addClass('woocommerce-info')}
$elem.find('.jws-register .popup-message').html(response.data.message).slideDown();setTimeout(function(){var $formContainer=$this.find('.form-contaier');if($formContainer.length>0&&typeof $formContainer[0].slick!=='undefined'){$formContainer[0].slick.animateHeight()}},500)},})});$(this).find('.jws-register input[name="password"]').keyup(function(){checkpassword($(this).val());$('.slick-list').css('height','auto')});function checkpassword(password){var strength=0,meter=$('.meter'),meter_text=$('.text-meter'),password_hint=$('.jws-password-hint');if(password.match(/[a-z]+/)){strength+=1}
if(password.match(/[A-Z]+/)&&password.length>=8){strength+=1}
if(password.match(/[0-9]+/)&&password.length>=12){strength+=1}
if(password.match(/[$@#&!]+/)&&password.length>=14){strength+=1}
if(password.length>0){meter.show();password_hint.show()}else{meter.hide();password_hint.hide()}
switch(strength){case 0:meter_text.html("");meter.attr("meter","0");break;case 1:meter_text.html(jwsThemeModule.jws_script.metera);meter.attr("meter","1");break;case 2:meter_text.html(jwsThemeModule.jws_script.meterb);meter.attr("meter","2");break;case 3:meter_text.html(jwsThemeModule.jws_script.meterc);meter.attr("meter","3");password_hint.hide();break;case 4:meter_text.html(jwsThemeModule.jws_script.meterd);meter.attr("meter","4");password_hint.hide();break}}
if(!$('.form-contaier').hasClass("login_custom")){$(this).find('.change-form.login').on('click',function(e){e.preventDefault();$this.addClass('in-login');$this.removeClass('in-register');$this.find('.form-contaier').slick('slickGoTo',0)});$(this).find('.change-form.register').on('click',function(e){e.preventDefault();$this.removeClass('in-login');$this.addClass('in-register');$this.find('.form-contaier').slick('slickGoTo',1)})}else{$(this).find('.change-form.register').on('click',function(e){$(".jws_register_page").slideUp(0);setTimeout(function(){$(".jws_register_page").slideDown();$(".jws_login_page").slideUp()},500)});$(this).find('.change-form.login').on('click',function(e){$(".jws_login_page").slideUp(0);setTimeout(function(){$(".jws_register_page").slideUp();$(".jws_login_page").slideDown()},500)})}
$(this).find(".toggle-password2").click(function(){$(this).toggleClass("ion-eye-disabled");$(this).parents('form').find('input[type="password"]').addClass('change-type');if($(this).parents('form').find('.change-type').attr("type")=="password"){$(this).parents('form').find('.change-type').attr("type","text")}else{$(this).parents('form').find('.change-type').attr("type","password")}})});var recaptcha7;var recaptcha8;$(window).on('load',function(){if(document.getElementById("recaptcha7")&&typeof goole_captcha_api_obj!=="undefined"){recaptcha7=grecaptcha.render('recaptcha7',{'sitekey':goole_captcha_api_obj.google_captcha_site_key,'theme':'light'})}
if(document.getElementById("recaptcha8")&&typeof goole_captcha_api_obj!=="undefined"){recaptcha8=grecaptcha.render('recaptcha8',{'sitekey':goole_captcha_api_obj.google_captcha_site_key,'theme':'light'})}})},menu_nav:function(){var mainMenu=$('.elementor_jws_menu_layout_menu_horizontal').find('.nav'),lis=mainMenu.find(' > li.menu-item-design-mega_menu');mainMenu.on('hover',' > li.menu-item-design-mega_menu',function(){setOffset($(this))});var setOffset=function(li){var dropdown=li.find(' > .sub-menu-dropdown');dropdown.attr('style','');var dropdownWidth=dropdown.outerWidth(),dropdownOffset=dropdown.offset(),screenWidth=$(window).width(),viewportWidth=screenWidth,extraSpace=10;if(!dropdownWidth||!dropdownOffset)return;if(dropdownOffset.left+dropdownWidth>=viewportWidth&&li.hasClass('menu-item-design-mega_menu')){var toRight=dropdownOffset.left+dropdownWidth-viewportWidth;dropdown.css({left:-toRight-extraSpace})}};lis.each(function(){setOffset($(this));$(this).addClass('with-offsets')});var mega_item=mainMenu.find(' > li.menu-item-design-mega_menu_full_width');if(mega_item.length>0){$('.jws_header').addClass('has-mega-full')}
if($('.elementor_jws_menu_layout_menu_horizontal').hasClass('elementor-jws-menu-change-background-yes')){mega_item.mouseenter(function(){$('.jws_header.has-mega-full').addClass('mega-has-hover')});mega_item.mouseleave(function(){$('.jws_header.has-mega-full').removeClass('mega-has-hover')})}},}}());$(document).ready(function(){$("img").removeAttr("title")});$(document).ready(function(){jwsThemeModule.init()});$.fn.isInViewport=function(){let elementTop=$(this).offset().top;let elementBottom=elementTop+$(this).outerHeight();let viewportTop=$(window).scrollTop();let viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom};$(window).on("resize",function(e){jwsThemeModule.menu_offset()});$(document).ready(function(){setTimeout(function(){$('.load-template').each(function(){$(this).parent().html(JSON.parse($(this).html()))})},"700")});$.fn.gallery_popup=function(option){if(typeof($.fn.magnificPopup)=='undefined')return;option.find('a.jws-popup-global').magnificPopup({type:'image',gallery:{enabled:!0},removalDelay:500,mainClass:'gallery-global mfp-zoom-in mfp-img-mobile',callbacks:{open:function(){$.magnificPopup.instance.next=function(){var self=this;self.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.next.call(self);assets},120)};$.magnificPopup.instance.prev=function(){var self=this;self.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.prev.call(self)},120)}},imageLoadComplete:function(){var self=this;setTimeout(function(){self.wrap.addClass('mfp-image-loaded')},16)},},})};$.fn.maker_html=function(latlng,map,id,className){function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}
function CustomMarker(latlng,map,id,className){this.latlng_=latlng;this.className=className;this.id=id;this.setMap(map)}
if((typeof google==="undefined"?"undefined":_typeof(google))!==_typeof(undefined)&&_typeof(google.maps)!==_typeof(undefined)){CustomMarker.prototype=new google.maps.OverlayView();CustomMarker.prototype.draw=function(){var me=this;var div=this.div_,divChild,divChild2;if(!div){div=this.div_=document.createElement('DIV');div.className=this.className;div.setAttribute("data-id",this.id);divChild=document.createElement("div");div.appendChild(divChild);divChild2=document.createElement("div");div.appendChild(divChild2);google.maps.event.addDomListener(div,"click",function(event){google.maps.event.trigger(me,"click")});var panes=this.getPanes();panes.overlayImage.appendChild(div)}
var point=this.getProjection().fromLatLngToDivPixel(this.latlng_);if(point){div.style.left=point.x+'px';div.style.top=point.y+'px'}};CustomMarker.prototype.remove=function(){if(this.div_){this.div_.parentNode.removeChild(this.div_);this.div_=null}};CustomMarker.prototype.getPosition=function(){return this.latlng_}}}})(jQuery)