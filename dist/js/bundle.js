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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9EQVRBL2xvY2FsaG9zdC9jb2Rpbmctc2FtcGxlL3NyYy9qcy9idW5kbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUEsQ0FBQyxDQUFDLFlBQVU7O0FBRVgsUUFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRcEIsS0FBSSxZQUFZLEdBQUc7QUFDbEIsTUFBSSxFQUFHLGdCQUFNOztBQUVaLFNBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5QyxXQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFBLEdBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7QUFFRixJQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVU7O0FBRXBELFFBQUksTUFBTSxDQUFDO0FBQ1gsVUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUM7QUFDbkMsUUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUN2QixZQUFPO0tBQ1A7QUFDRCxLQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkUsV0FBTyxLQUFLLENBQUM7SUFDYixDQUFDLENBQUM7R0FDSDtFQUNELENBQUE7O0FBRUQsYUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0NBRXBCLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL2ltcG9ydCBmYWNlYm9vayBmcm9tICcuL2ZhY2Vib29rJztcblxuJChmdW5jdGlvbigpe1xuXG5cdGNvbnNvbGUubG9nKCdob2dlJyk7XG5cblx0Ly9yZXF1aXJlICgnLi9qcXVlcnkubWl4aXR1cC5taW4nKTtcblxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gc21vb3RoIHNjcm9sbFxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHR2YXIgc21vb3RoU2Nyb2xsID0ge1xuXHRcdGluaXQgOiAoKSA9PiB7XG5cdFx0XHQvKj09PT09PT09PT0gc21vb3RoIHNjcm9sbCA9PT09PT09PT09Ki9cblx0XHRcdGpRdWVyeS5lYXNpbmcucXVhcnQgPSBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuXHRcdFx0XHRyZXR1cm4gLWMgKiAoKHQ9dC9kLTEpKnQqdCp0IC0gMSkgKyBiO1xuXHRcdFx0fTtcblxuXHRcdFx0JCgnYVtocmVmXj0jaGVhZGVyXSxhLnNjcm9sbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vI2hlYWRlcuOBuOOBruODquODs+OCr+OBruOBv+OBq+mZkOWumu+8iOODmuODvOOCuOOBruWFiOmgreS7peWkluOBp+OCueODoOODvOOCuOODs+OCsOOBleOBm+OCi+WgtOWQiOOBrzxhPuOCv+OCsOOBq3Njcmzjgq/jg6njgrnjgpLov73liqDvvIlcblx0XHRcdFx0dmFyIHRhcmdldDtcblx0XHRcdFx0dGFyZ2V0ID0gJCggJCh0aGlzKS5hdHRyKCdocmVmJykgKTtcblx0XHRcdFx0aWYgKHRhcmdldC5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3B9LCA4MDAsICdxdWFydCcpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzbW9vdGhTY3JvbGwuaW5pdCgpO1xuXG59KTtcbiJdfQ==
