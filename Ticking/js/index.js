//接收数据
var url=location.search;
var Request=new Object();
if(url.indexOf('?')!=-1){
	var str=url.substr(1);
	var strs=str.split('&');
	for(var i=0;i<strs.length;i++){
		Request[strs[i].split('=')[0]]=unescape(strs[i].split('=')[1]);
	}
	var from=Request["from"];
	var to=Request["to"];
	
}
//最近查询路线

if(from&&to){
	var txt=$('.latest').html();
	txt+="<div class='travel'><span class='from'>"+from+"</span>至<span class='to'>"+to+"</span></div>";
	$('.latest').html(txt);
}



//选项卡
$('#tittle2 a').click(function(e){
	e.preventDefault()
	$(this).tab('show');
	$('#tittle2 a').css("border-bottom"," 1px solid #ddd");
	$(this).css("border-bottom","none");
})
////控制灰色背景的高度
//var h=$(window).height()-$(".tittle").height()-$('#tittle2').height()-$('#footer').height();
//$(".container").css("height",h+"px");
//window.resize(function(){
//	var h=$(window).height()-$(".tittle").height()-$('#tittle2').height()-$('#footer').height();
//$(".container").css("height",h+"px");
//})

//交换按钮
$('#change').click(function(){
	var tmp="";
	var a="";
	tmp=$('.start').val();
	a=$('.final').val();
	$('.start').val(a);
	$('.final').val(tmp);
})
$('#change1').click(function(){
	var tmp="";
	var a="";
	tmp=$('.start1').text();
	a=$('.final1').text();
	$('.start1').text(a);
	$('.final1').text(tmp);
})
//日历
$(document).ready(function() {
                  $('#birthday').daterangepicker({ singleDatePicker: true }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                  });
                  $('#birthday1').daterangepicker({ singleDatePicker: true }, function(start, end, label) {
                    console.log(start.toISOString(), end.toISOString(), label);
                  });
               });
           
//查询 按钮
var flag=0;
$('#find').click(function(){
	if($('input:checkbox').is(':checked')){
		 flag=1;
	}
	var url="display.html?start="+escape($('.start').val());
url+="&final="+escape($('.final').val());
url+="&date="+escape($('#birthday').val());
url+="&flag="+escape(flag);
	location.href=url;
})
$('#find1').click(function(){
	flag=2;
	var url="display.html?start="+escape($('.start1').val());
url+="&final="+escape($('.final1').val());
url+="&date="+escape($('#birthday1').val());
url+="&flag="+escape(flag);
	location.href=url;
})
//最近查询
$('.latest').delegate('.travel','click',function(e){
	var from=$(this).find(".from").html();
	var to=$(this).find(".to").html();
	$('.start').val(from);
	$('.final').val(to);
})
$('.latest1').delegate('.travel1','click',function(e){
	var from=$(this).find(".from1").html();
	var to=$(this).find(".to1").html();
	$('.start1').val(from);
	$('.final1').val(to);
})