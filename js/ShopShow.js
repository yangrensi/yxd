// JavaScript Document

//鍗曞嚮鍥剧墖鍒楄〃
function showPic(num)
{
	//灏嗘墍鏈夌殑li鏍峰紡璧嬪€间负绌�
	var objUl=FulS();
	for(var i=0;i<objUl.length;i++)
	{
		objUl[i].className="";
	}
	
	//瀵瑰崟鍑荤殑杩涜鏍峰紡搴旂敤
	FliS(num).className="tsSelectImg";
		
	//寰楀埌鍗曞嚮鍚庣殑鍥剧墖鍊�
	var src=Fpic(num).getAttribute("tsImgS");
	
	//杩涜璧嬪€�
	var Objimg=FimgS();
	
	Objimg.src=Fpic(num).src;
	
	
	document.getElementById("tsImgS").getElementsByTagName("a")[0].href=src;
	
	//鍥剧墖绛夋瘮渚�
	tsScrollResize();

	//璁剧疆瀵艰埅
	tsScrollDh(num);
	
	
	//婊氬姩鍥剧墖瀹氫綅
	FulSs().style.marginLeft="-"+(tsNum()*tsRowNum()*FliS(0).offsetWidth)+"px";

	
}
//涓婁竴椤�
function tsScrollArrLeft()
{
	if(tsNum()+1>1)
	{
		//璁剧疆瀵艰埅
		tsScrollDh((tsNum()-1)*tsRowNum());
		
		//婊氬姩鍥剧墖瀹氫綅
		FulSs().style.marginLeft="-"+(tsNum())*tsRowNum()*FliS(0).offsetWidth+"px";
	
	}
}

//涓嬩竴椤�
function tsScrollArrRight()
{
	if(tsNum()+2<=tsRowCount())
	{
		//璁剧疆瀵艰埅
		tsScrollDh((tsNum()+1)*tsRowNum());
		//婊氬姩鍥剧墖瀹氫綅
		FulSs().style.marginLeft="-"+(tsNum())*tsRowNum()*FliS(0).offsetWidth+"px";
		
	}
}



//璁剧疆瀵艰埅,濡傛灉涓嶅涓婇潰鐨処mg杩涜鎿嶄綔,閭ｄ箞imgno灏辫鏈夊弬鏁拌繘鏉�
function tsScrollDh(i)
{
	//璁剧疆涓婁竴椤靛鑸�
	document.getElementById("tsImgSArrL").setAttribute("showPicNum",i);
	
	//璁剧疆涓嬩竴椤靛鑸�
	document.getElementById("tsImgSArrR").setAttribute("showPicNum",i);
	
}


function tsScrollResize()
{
   var maxWidth=300;
   var maxHeight=300;
	
   var myimg = FimgS();

	var imgNew = new Image();
	imgNew.src = myimg.src;
	
	//灏唌yimg瀛樿捣鏉ワ紝鐩稿綋浜庝竴涓弬鏁帮紝涓嶇劧寮傛鐨勬椂鍊欐墽琛屽お蹇紝涓€鐩存槸鏈€鍚庝竴寮犲浘
	imgNew.preImg=myimg;
				
			
	//杩欎釜鏄负浜嗛槻閬ㄦ父绛夋祻瑙堝櫒锛屽浘鐗囧銆侀珮鍔犱负0鎵ц
	if (imgNew.width == 0 || imgNew.height == 0) {
			imgNew.onload=function(){
				tsScrollResizeHd(this,maxWidth,maxHeight,this.preImg);
			};
	}
	else
	{
		tsScrollResizeHd(imgNew,maxWidth,maxHeight,myimg);
	}
	
}

function tsScrollResizeHd(imgNew,maxWidth,maxHeight,myimg)
{
	var hRatio;
	var wRatio;
	var Ratio = 1;
	var w = imgNew.width;
	var h = imgNew.height;
	wRatio = maxWidth / w;
	hRatio = maxHeight / h;
	if (maxWidth == 0 && maxHeight == 0) {
		Ratio = 1;
	} else if (maxWidth == 0) {
		if (hRatio < 1) Ratio = hRatio;
	} else if (maxHeight == 0) {
		if (wRatio < 1) Ratio = wRatio;
	} else if (wRatio < 1 || hRatio < 1) {
		Ratio = (wRatio <= hRatio ? wRatio: hRatio);
	}
	if (Ratio < 1) {
		
		w = w * Ratio;
		h = h * Ratio;
	}
	
	if(h%2!=0)
	{
		h=h-1;
	}
	
	myimg.height = h;
	myimg.width = w;
	
	
	var tsImgsBox=document.getElementById("tsImgS");
	if(myimg.height<300)
	{
		var TopBottom=(300-myimg.height)/2;
		tsImgsBox.style.paddingTop=TopBottom+"px";
		tsImgsBox.style.paddingBottom=TopBottom+"px";
	}
	else
	{
		tsImgsBox.style.paddingTop="0px";
		tsImgsBox.style.paddingBottom="0px";
	}
}

//涓€琛屾樉绀哄嚑涓�
function tsRowNum()
{
	return document.getElementById("tsImgSCon").offsetWidth/FliS(0).offsetWidth;
}

//绗嚑琛� 浠�0寮€濮�
function tsNum()
{
	return Math.floor(document.getElementById("tsImgSArrL").getAttribute("showPicNum")/tsRowNum());
}
//鍏卞嚑琛�
function tsRowCount()
{
	return Math.ceil(FulS().length/tsRowNum());
}

//杩斿洖鍥剧墖瀵硅薄
function Fpic(i)
{
	var tsImgSCon=document.getElementById("tsImgSCon").getElementsByTagName("li");
	return src=tsImgSCon.item(i).getElementsByTagName("img")[0];
}
//杩斿洖li瀵硅薄
function FliS(i)
{
	return document.getElementById("tsImgSCon").getElementsByTagName("li")[i];
}

//杩斿洖鍥剧墖鍒楄〃瀵硅薄
function FulS()
{
	return document.getElementById("tsImgSCon").getElementsByTagName("li");
}
//鏌ユ壘鏈€澶х殑鍥�
function FimgS(){
	return document.getElementById("tsImgS").getElementsByTagName("img")[0];
}
//鏌ユ壘Ul瀵硅薄
function FulSs()
{
	return document.getElementById("tsImgSCon").getElementsByTagName("ul")[0];
}
	
//鍥剧墖闆嗗闈㈢殑DIV瀹�
document.getElementById("tsImgSCon").style.width=FliS(0).offsetWidth*4+"px";
	
//Ul瀹�
FulSs().style.width=FliS(0).offsetWidth*FulS().length+"px";

//鍥剧墖绛夋瘮渚�
tsScrollResize();