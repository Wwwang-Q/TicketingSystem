//接收数据
var url=location.search;
var Request=new Object();
if(url.indexOf("?")!=-1){
	var str=url.substr(1) //去掉问号
	strs=str.split("&");
	for(var i=0;i<strs.length;i++){
		Request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
	}
	 var start=Request["start"]; 
	 var final=Request["final"]; 
	 var birthday=Request["date"];
	 var flag=Request["flag"];
}

//传入城市及日期数据
var txt="<i class='glyphicon glyphicon-chevron-left' ></i>"+start+"&nbsp;&nbsp;至&nbsp;&nbsp;"+final+"</p>";
$('.city').html(txt);
$('.date').html(birthday);

//控制底部button的状态，为什么我觉得这个方法这么傻。。。是这么写么
$('#b1').click(function(){	
    $('#b2').removeClass('active')
    $('#b3').removeClass('active')
    $('#b1').addClass('active');
})
$('#b2').click(function(){	
    $('#b1').removeClass('active')
    $('#b3').removeClass('active')
    $('#b2').addClass('active');
})
$('#b3').click(function(){	
    $('#b1').removeClass('active')
    $('#b2').removeClass('active')
    $('#b3').addClass('active');
})
//余票详情
$('.myContent').delegate('.ticket','click',function(e){
	//判断是否加入“专厢”
	if(flag==1){
		var txt=$('.left').html();
		    txt+='<div class="col-xs-3 name"><p>专厢硬卧</p></div><div class="col-xs-3 price"> <p>￥173.5</p></div>'
        	+'<div class="col-xs-3 has"><p>20张</p></div><div class="col-xs-3 buy"><p><button class="btn-xs btn-primary">购买</button></p></div>'
        	txt+='<div class="col-xs-3 name"><p>专厢硬座</p></div><div class="col-xs-3 price"> <p>￥71</p></div>'
        	+'<div class="col-xs-3 has"><p>50张</p></div><div class="col-xs-3 buy"><p><button class="btn-xs btn-primary">购买</button></p></div>'
        $('.left').html(txt);
	}
	else if(flag==2){
		var txt='<div class="col-xs-3 name"><p>专厢硬卧</p></div><div class="col-xs-3 price"> <p>￥173.5</p></div>'
        	+'<div class="col-xs-3 has"><p>20张</p></div><div class="col-xs-3 buy"><p><button class="btn-xs btn-primary">购买</button></p></div>'
        	txt+='<div class="col-xs-3 name"><p>专厢硬座</p></div><div class="col-xs-3 price"> <p>￥71</p></div>'
        	+'<div class="col-xs-3 has"><p>50张</p></div><div class="col-xs-3 buy"><p><button class="btn-xs btn-primary">购买</button></p></div>'
        $('.left').html(txt);
	}
	$('#myModal').modal('show');
})
//前一天vs后一天
$('.prev').click(function(){
	var str=$('.date').text();
	var val=Date.parse(str);
	var date=new Date(val);
	var datep=new Date(date);
	datep.setDate(date.getDate()-1);
	 var times = datep.getFullYear()+"-"+(datep.getMonth()+1)+"-"+datep.getDate();
	 var r=document.getElementsByClassName('date');
	 $(r).text(times);	
})
$('.next').click(function(){
	var str=$('.date').text();
	var val=Date.parse(str);
	var date=new Date(val);
	var datep=new Date(date);
	datep.setDate(date.getDate()+1);
	 var times = datep.getFullYear()+"-"+(datep.getMonth()+1)+"-"+datep.getDate();
	 var r=document.getElementsByClassName('date');
	 $(r).text(times);	
})
//返回主页面

$('.city').click(function(){
	var url="index.html?from="+escape(start);
	url+="&to="+escape(final);
	location.href=url;
})
