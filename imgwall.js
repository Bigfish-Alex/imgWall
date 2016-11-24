//jQuery 封装瀑布流图片墙
//作者: Alex
//date: 2016-10-13
/*
$.imgwall({
    col: n, // 列数
    callback: function(data){}//回调方法 => 有参数回传
})
*/
//#photosContainer 使用这个作为图片的父元素

//样式说明
//#photosContainer{
//	position: relative;
//	width: 100%;
//}
//#photosContainer img{
//	position: absolute;
//	top: 0px;
//	left: 0px;
//	border:10px solid #D0D0D0;
//	box-sizing: border-box;
//}

(function ($) {
    $.imgwall = function (opts) {
        var _default = {
            content: null,
            col: 3
        };
        
        opts = $.extend(true, _default, opts);
        var col = opts.col;
        
		var widthSize = 100 / col;
		$('#photosContainer img').each(function(i, img) {
			$('#photosContainer img').css({
				width: widthSize + '%',
			})
			if(i < col) {
				$('#photosContainer img').eq(i).css({
					left: widthSize * i + '%',
					top: 0
				})
			}
			if(i >= col) {
				var index = i - col;
				var nextTop = parseInt($('#photosContainer img').eq(index).css('top')) + $('#photosContainer img').eq(index).height() + 5;
				$('#photosContainer img').eq(i).css({
					left: widthSize * (i % col) + '%',
					top: nextTop + 'px',
				})
			}
		})
        
        if (typeof opts.callback == 'function') {
            opts.callback(obj);
        }
    }
})(jQuery)