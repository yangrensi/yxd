function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
  // 鏍囩鐨勭储寮�
  var index=0;
  var timer=null;

  var lis=$('notice-tit').getElementsByTagName('li'),
      divs=$('notice-con').getElementsByTagName('div');

  if(lis.length!=divs.length) return;

  // 閬嶅巻鎵€鏈夌殑椤电
  for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
      // 鐢╰hat杩欎釜鍙橀噺鏉ュ紩鐢ㄥ綋鍓嶆粦杩囩殑li
      var that=this;
      // 濡傛灉瀛樺湪鍑嗗鎵ц鐨勫畾鏃跺櫒锛岀珛鍒绘竻闄わ紝鍙湁褰撳墠鍋滅暀鏃堕棿澶т簬500ms鏃舵墠寮€濮嬫墽琛�
      if(timer){
        clearTimeout(timer);
        timer=null;
      }
      // 寤惰繜鍗婄鎵ц
      timer=window.setTimeout(function(){
        for(var j=0;j<lis.length;j++){
          lis[j].className='';
          divs[j].style.display='none';
        }
        lis[that.id].className='select';
        divs[that.id].style.display='block';
      },10);
    }
  }
}