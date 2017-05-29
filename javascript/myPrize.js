$(function(){
	//安卓上input 获取光标位置，往上提
	$('input').focus(function(){
		$('.marskPrize ').css("margin-top","-100px");
	});
	$('input').blur(function(){
		$('.marskPrize ').css("margin-top","0px");
	});
	$('.close').click(function(){
		$('.marsk').removeClass('show').addClass('hidden');
	})
	//安卓上input 获取光标位置，往上提
	$('input').focus(function(){
		$('.marskContainer').css("margin-top","-100px");
	});
	$('input').blur(function(){
		$('.marskContainer').css("margin-top","0px");
	});
	$('input').focus(function(){
		$('.marskContainer3').css("margin-top","-100px");
	});
	$('input').blur(function(){
		$('.marskContainer3').css("margin-top","0px");
	});
	//显示弹出框
	$('.submit').click(function(){
		$('.marsk').removeClass('hidden').addClass('show');
	})
})
