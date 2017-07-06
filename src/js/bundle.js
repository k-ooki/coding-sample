//import facebook from './facebook';

$(function(){

	console.log('hoge');

	//require ('./jquery.mixitup.min');

	//=====================================
	// smooth scroll
	//=====================================

	var smoothScroll = {
		init : () => {
			/*========== smooth scroll ==========*/
			jQuery.easing.quart = function (x, t, b, c, d) {
				return -c * ((t=t/d-1)*t*t*t - 1) + b;
			};

			$('a[href^=#header],a.scroll').on('click', function(){
				//#headerへのリンクのみに限定（ページの先頭以外でスムージングさせる場合は<a>タグにscrlクラスを追加）
				var target;
				target = $( $(this).attr('href') );
				if (target.length == 0) {
					return;
				}
				$('html,body').animate({scrollTop: target.offset().top}, 800, 'quart');
				return false;
			});
		}
	}

	smoothScroll.init();

});
