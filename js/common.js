$(function(){
	//index
	$(".carousel-inner div:eq(0),.carousel-indicators li:eq(0)").addClass("active");
	$("#global li").hover(function(){
		$(this).find("img").stop().animate({"top":"-10"},400);	
	},function(){
		$(this).find("img").stop().animate({"top":"0"},400);	
	});
	$(".prod table tr:even").css({"background":"#f5f5f5"});
	
/*	var ww=window.screen.width;//鍏堣幏鍙栧睆骞曞垎杈ㄧ巼澶у皬
	if(ww>=767){
		$(".nav>li").hover(function(){
			$(this).find("ul").stop().slideToggle();	
		},function(){
			$(this).find("ul").stop().hide();	
		});
	}
*/	
})


//涓嬫媺杩炴帴
$(function(){
	$('.select').change(function(){
			var _web = $(this).val();
			if(_web!=0){
				window.open(_web); 
			}
			//location.href = _web;                      
	});
	
/*2div楂樺害涓€鏍�
var a=document.getElementById("left");   
  var b=document.getElementById("right");   
  if(a.clientHeight<b.clientHeight)   
  {   
 a.style.height=b.clientHeight+"px";   
  }   
  else
  {   
 b.style.height=a.clientHeight+"px";   
  }   
  
*/
	function showSlide(obj){
		var $s = $(obj);
		var $bImg = $s.find(".bigImg img");
		var $btn = $s.find("span");
		var $pBtn = $s.find(".top");
		var $nBtn = $s.find(".down");
		var $ul = $s.find("ul")
		var $li = $ul.find("li");
		var $i = 0;
		$li.eq($i).addClass("on");
		//鐐瑰嚮浜嬩欢
		if($li.length>5){
			var $e = $li.length-8;
			$nBtn.click(function(){
				if( $i < $e ){
					$ul.stop(false,true).animate({left:"-="+($li.width()+0)+"px"});
					$i++;
				}else{
					//alert("娌℃湁鏇村浜唦")
				}
			});
			
			$pBtn.click(function(){
				if($i > 0 ){
					$ul.stop(false,true).animate({left:"+="+($li.width()+0)+"px"});
					$i--;
				}else{
					//alert("娌℃湁鏇村浜唦")
				}
					
			});
					
		}else{
			
			$btn.hide();
			
		}
		
		//澶у浘鍒囨崲浜嬩欢
		
		$li.each(function(e) {
            
			$(this).on('click',function(){
				
				$li.removeClass("on");
				$li.eq(e).addClass("on");
				var _src = $li.eq(e).find("a").attr("rev");
				//$bImg.hide();
				$bImg.attr("src",_src);
				$(".MagicZoomBigImageCont img").attr("src",_src);
				/*$bImg.load(function(){
					$(this).fadeIn();		
				})*/
				
			})
			
        });
		
	}
	showSlide(".honor");
	 
});

/*杩斿洖椤堕儴*/
window.onload = function(){
	$(window).on({
	  scroll:function(){
		  var _wTop = $(window).scrollTop();
		  if(_wTop > 250){
			  $("#gotop").stop().show();
		  }else{
			  $("#gotop").stop().hide();
		  }
	  }
	});
	var obtn = document.getElementById('gotop');
	var clientHeight = document.documentElement.clientHeight;
	var isTop = true;
	var timer;
	obtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;	
			var speed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
			isTop = true;
			if(osTop == 0){
				clearInterval(timer);
			}
			
		},30);
	}
	window.onscroll = function() {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
}



//澶撮儴婊戝姩fixed
/*$(function(){ 
  var navPosTop = $("#menu").offset().top;
  $(window).scroll(function() {    
      var sTop = $(window).scrollTop();
      if(sTop >= navPosTop) {
        $("#menu").css({position: 'fixed', top: 0}).css("z-index","9999");
      }else {
        $("#menu").css({position: 'relative', top: 0}).css("z-index","9999");
      }  
  });  
})
*/