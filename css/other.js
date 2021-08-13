
$(window).load(function(){ _animation() });
$(function(){
	//杩斿洖椤堕儴
	//$("#totop").on('touchend',function(){
			//$("html,body").animate({scrollTop:"0px"},500);
		//});
	ietester();
	preani();
	$(window).scroll(_animation);

	//ibanner_full();
	//$(window).resize(function(){ibanner_full();});

	//瀹㈡湇浠ｇ爜
	var thisBox = $('.lanren');
	if(thisBox.length){
		var defaultTop = thisBox.offset().top;
		var slide_min = $('.lanren .slide_min');
		var slide_box = $('.lanren .slide_box');
		var closed = $('.lanren .slide_box h2');
		slide_min.on('click',function(){$(this).hide();	slide_box.show();});
		closed.on('click',function(){slide_box.hide();slide_min.show();});
		// 椤甸潰婊氬姩鐨勫悓鏃讹紝鎮诞妗嗕篃璺熺潃婊氬姩
		$(window).on('scroll',function(){scro();});
		$(window).onload = scro();

		function scro(){
			var offsetTop = defaultTop + $(window).scrollTop()+'px';
			thisBox.animate({top:offsetTop},
			{	duration: 600,	//婊戝姩閫熷害
		     	queue: false    //姝ゅ姩鐢诲皢涓嶈繘鍏ュ姩鐢婚槦鍒�
		     });
		}
	}
	
	//灏鹃儴浜岀淮鐮�
	$('.soubtn').click(function(){
		if($(this).hasClass('on')){
			$('.sou,.soutxt,.soubtn').removeClass('on');
		}else{
			$('.sou,.soutxt,.soubtn').addClass('on');
		}
	});

	$('#totop').click(function(){
		$("html,body").stop(true,false).animate({scrollTop:"0px"},500,'swing');
	})
	//渚ц竟鍥炲埌椤堕儴鐨勬樉绀洪殣钘�
	//$(window).scroll(function(){
	//	var sh = $(window).scrollTop() || 0;
	//	if(sh<=500){$('#totop').hide();}
	//	else{$('#totop').show();}
	//});


	$('.footewm').on('mouseenter', function() {
		$('.footbigewm').fadeIn(300);
	}).on('mouseleave', function() {
		$('.footbigewm').fadeOut(300);
	})
	
	$('.sidetel').hover(function(){
		$(this).find('.sidetelno').toggleClass('on');
	})


	//瀵艰埅涓嬫媺鑿滃崟 浜岀骇鑿滃崟
	$(".nav>li").hover(function(){
		var l = $(this).find('.navtwo');
		if(l.length){ l.stop(true).slideDown(300); }
		$(this).siblings('li').find('.navtwo').stop(true).slideUp(300);
	},function(){
		var l = $(this).find('.navtwo');
		if(l.length){ l.stop(true).slideUp(300);}
	}); 


	//鎷涜仒灞曞紑
	$('.rec-hand').click(function(){
		var bool = $(this).parents('li').hasClass('on');
		$(this).parents('li').toggleClass('on');
		if(!bool){
			$(this).siblings('.rec-con').slideDown('600');
		}else{
			$(this).siblings('.rec-con').slideUp('600');
		}
	})

	//鐢㈠搧鍒楄〃鍙冲伌閷ㄩ粸
	$('.leftnav li').click(function(){
		var i = $(this).index();
		var liobj = $('.jiulist li').eq(i);
		var t = liobj.offset().top;
		$("html,body").stop(true,false).animate({scrollTop:t+"px"},800,'swing');
	})

	 

	//11璧勬枡锛屾€у埆
	$('.sex label').click(function(){
		if( !$(this).hasClass('on') ){
			$('.sex label').removeClass('on');
			$(this).addClass('on');
			$(this).siblings('input[type=radio]').get(0).checked= true;
		}
	});

 	
	$('.msgbg').click(function(event){
		event = event ? event : window.event; 
		if(event.target==this){ msgoff();}
	})
	$('.selfclose').click(function(event){
		event = event ? event : window.event;
		if(event.target==this){ $(this).removeClass('on').fadeOut(300);}
	})

	//09妗堜緥璇︽儏鐐瑰皬鍥撅紝鐪嬪ぇ鍥�
	$('.smallpic').on('click','li',function(){
		if(!$(this).hasClass('on')){
			$(this).addClass('on').siblings('li').removeClass('on');
			smlmove(2,smlw,'smallpic','bigpic');
		}
	})

	var smlw = $('.smallpic').attr('data')-0;
	$('.xijie-prev').click(function(){smlmove(0,smlw,'smallpic','bigpic')})
	$('.xijie-next').click(function(){smlmove(1,smlw,'smallpic','bigpic')})

})

function mwon(cname){ $('.'+cname).fadeIn(300).addClass('on');}
function mwoff(cname){ $('.'+cname).removeClass('on').fadeOut(300);}
function msgon(){ $('.msgbg').fadeIn(300).addClass('on');}
function msgoff(){$('.msgbg').removeClass('on').fadeOut(300)}

function ibanner_full(){
	if( !$('#home_slider').length ) return false;
	var wh = $(window).height();
	var pw = wh * 32/15 ;
	$('#home_slider .slides').height(wh);
	$('#home_slider img').height(wh).width(pw).css('margin-left',-pw/2+'px');
}
		 



function selfclose(obj){
	event = event ? event : window.event;
	if(event.target==obj){ $(obj).removeClass('on').fadeOut(300);}
}
function addmsg(){
		if($('.msgbg').length<=0){
			var ss = '<div class="msgbg" onclick="selfclose(this)"><div class="msg bsb guodu">\
			<p class="msgtxt"></p>\
			<input type="button" value="鍏抽棴" class="btn" onclick="msgoff()">\
			</div></div>';

		    $('body').append(ss);
		}
	}
var msgtimer;
function msgshow(msg,milisec){
	addmsg();
	$('.msgtxt').text(msg);
	msgon();

	if(milisec){
		clearTimeout(msgtimer);
		msgtimer = setTimeout(function(){msgoff()},milisec);
	}
}

var isIE ,IEno;
function ietester(){
    var UA = navigator.userAgent;
    if(/msie/i.test(UA)){
    	isIE = true;
    	IEno = UA.match(/msie (\d+\.\d+)/i)[1]-0;
    }else if(~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')){
    	isIE = true;
        IEno = UA.match(/rv:(\d+\.\d+)/)[1]-0;
    }else{
    	isIE = false;
    }
}

function headxifu(){
	var windowTop = $(window).scrollTop();
	if( !$('.head').hasClass('on') && windowTop>=40 ){
		$('.head').addClass('on');
	}else if( $('.head').hasClass('on') && windowTop<40 ){
		$('.head').removeClass('on');
	}
}

function myreset(formid){
	$('#'+formid).find('input[type=text]').removeClass('Validform_error').val('');
	$('#'+formid).find('textarea').removeClass('Validform_error').val('');
	$('#'+formid).find('span.Validform_checktip').removeClass('Validform_wrong Validform_right').text('');
}

function _animation(){

	if( isIE && IEno <= 9 ){ $('.hasani').addClass('ani').removeClass('hasani');}

	var windowTop = $(window).scrollTop();
	var windowBottom = windowTop + $(window).height();


	$('.hasani').each(function(){

		var pageQ1 = $(this).offset().top;
		var pageQ3 = $(this).offset().top  + $(this).height() / 1;

		if( ( pageQ1 <= windowBottom ) && ( pageQ3 >= windowTop ) ){				
				if( !$(this).hasClass("ani") )  $(this).addClass('ani');
		}else {
			//$(this).removeClass("ani");
		}
	});	
}

function preani(){
	$('.anidelay1').each(function(){
		$(this).children().each(function(i){
			var ss = i <= 9 ? '0'+i : i;
			$(this).addClass('delay'+ss);
		})
	})
	$('.anidelay2').each(function(){
		$(this).children().each(function(i){
			var ss = i*2 <= 9 ? '0'+i*2 : i*2;
			$(this).addClass('delay'+ss);
		})
	})
	$('.anidelay3').each(function(){
		$(this).children().each(function(i){
			var ss = i*3 <= 9 ? '0'+i*3 : i*3;
			$(this).addClass('delay'+ss);
		})
	})
}


function datenow(){
	var myDate = new Date(),datestr="";
	//myDate.setDate(myDate.getDate());
	datestr+= myDate.getFullYear();

	var m = myDate.getMonth()-0+1; 
	if(m<10) m = '0'+m;
	datestr+='-'+m;

	var d = myDate.getDate();
	if(d<10) d = '0'+d;
	datestr+='-'+d;

   return datestr;
}


function xjsmallw(w){
	//w涓哄崟涓猯i鐨勫瀹藉害锛屽寘鎷唴澶栬竟璺濆拰杈规
	if($('.smallpic').length){
		var n = $('.smallpic').find('li').size();
		$('.smallpic').width(w*n);
	}
}

function smlmove(dir,w,classname,imgid){
	//0宸�1鍙�2褰撳墠
	var l = $('.'+classname+' li ').size();
	var n = $('.'+classname+' li.on ').index() || 0;
	if(dir==0){ n = n>0? n-1:l-1;
	}else if(dir==1){ n = n==l-1? 0:n+1;}

	var obj = $('.'+classname+' li').eq(n);
	obj.addClass('on').siblings('li').removeClass('on');
	var url = obj.find('img').attr('hdsrc') || obj.find('img').attr('src');
	//var txt = obj.find('img').attr('title');
	$('#'+imgid).attr('src',url);
	//$('#'+imgid+'txt').text(txt);
	//绉诲姩
	var outleft = $('.'+classname+'-out').offset().left;
	var outwidth = $('.'+classname+'-out').width();
	var outright = outleft + outwidth;
	var inleft = $('.'+classname).offset().left;

	if( w*n + inleft  < outleft ){
		$('.'+classname).stop(true).animate({'left': (-w*n)+'px'}, 300);
	}else if(w*n+w + inleft > outright){
		$('.'+classname).stop(true).animate({'left': (outwidth-w*n-w)+'px'}, 300);
	}
}