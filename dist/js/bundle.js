(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//import facebook from './facebook';

'use strict';

$(function () {

	console.log('hoge');

	//require ('./jquery.mixitup.min');

	//=====================================
	// smooth scroll
	//=====================================

	var smoothScroll = {
		init: function init() {
			/*========== smooth scroll ==========*/
			jQuery.easing.quart = function (x, t, b, c, d) {
				return -c * ((t = t / d - 1) * t * t * t - 1) + b;
			};

			$('a[href^=#header],a.scroll').on('click', function () {
				//#headerへのリンクのみに限定（ページの先頭以外でスムージングさせる場合は<a>タグにscrlクラスを追加）
				var target;
				target = $($(this).attr('href'));
				if (target.length == 0) {
					return;
				}
				$('html,body').animate({ scrollTop: target.offset().top }, 800, 'quart');
				return false;
			});
		}
	};

	smoothScroll.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9EQVRBL2xvY2FsaG9zdC9ib24tY29kaW5nL2RlbW8vc3JjL2pzL2J1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNFQSxDQUFDLENBQUMsWUFBVTs7QUFFWCxRQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7OztBQVFwQixLQUFJLFlBQVksR0FBRztBQUNsQixNQUFJLEVBQUcsZ0JBQU07O0FBRVosU0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzlDLFdBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUEsR0FBRSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOztBQUVGLElBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVTs7QUFFcEQsUUFBSSxNQUFNLENBQUM7QUFDWCxVQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQztBQUNuQyxRQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3ZCLFlBQU87S0FDUDtBQUNELEtBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RSxXQUFPLEtBQUssQ0FBQztJQUNiLENBQUMsQ0FBQztHQUNIO0VBQ0QsQ0FBQTs7QUFFRCxhQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FFcEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vaW1wb3J0IGZhY2Vib29rIGZyb20gJy4vZmFjZWJvb2snO1xuXG4kKGZ1bmN0aW9uKCl7XG5cblx0Y29uc29sZS5sb2coJ2hvZ2UnKTtcblxuXHQvL3JlcXVpcmUgKCcuL2pxdWVyeS5taXhpdHVwLm1pbicpO1xuXG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyBzbW9vdGggc2Nyb2xsXG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdHZhciBzbW9vdGhTY3JvbGwgPSB7XG5cdFx0aW5pdCA6ICgpID0+IHtcblx0XHRcdC8qPT09PT09PT09PSBzbW9vdGggc2Nyb2xsID09PT09PT09PT0qL1xuXHRcdFx0alF1ZXJ5LmVhc2luZy5xdWFydCA9IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0XHRcdHJldHVybiAtYyAqICgodD10L2QtMSkqdCp0KnQgLSAxKSArIGI7XG5cdFx0XHR9O1xuXG5cdFx0XHQkKCdhW2hyZWZePSNoZWFkZXJdLGEuc2Nyb2xsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8jaGVhZGVy44G444Gu44Oq44Oz44Kv44Gu44G/44Gr6ZmQ5a6a77yI44Oa44O844K444Gu5YWI6aCt5Lul5aSW44Gn44K544Og44O844K444Oz44Kw44GV44Gb44KL5aC05ZCI44GvPGE+44K/44Kw44Grc2NybOOCr+ODqeOCueOCkui/veWKoO+8iVxuXHRcdFx0XHR2YXIgdGFyZ2V0O1xuXHRcdFx0XHR0YXJnZXQgPSAkKCAkKHRoaXMpLmF0dHIoJ2hyZWYnKSApO1xuXHRcdFx0XHRpZiAodGFyZ2V0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcH0sIDgwMCwgJ3F1YXJ0Jyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNtb290aFNjcm9sbC5pbml0KCk7XG5cbn0pO1xuIl19
